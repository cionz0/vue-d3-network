<script>
  import * as forceSimulation from 'd3-force'
  import * as bboxCollide from 'd3-bboxCollide'

  const d3 = Object.assign({}, forceSimulation, bboxCollide)
  import svgRenderer from './components/svgRenderer.vue'
  import canvasRenderer from './components/canvasRenderer.vue'
  import saveImage from './lib/saveImage.js'
  import svgExport from './lib/svgExport.js'

  export default {
    name: 'd3-network',
    components: {
      canvasRenderer,
      svgRenderer
    },
    props: {
      netNodes: {
        type: Array
      },
      netLinks: {
        type: Array
      },
      options: {
        type: Object
      },
      nodeSym: {
        type: String
      },
      nodeCb: {
        type: Function
      },
      linkCb: {
        type: Function
      },
      customForces: {
        type: Object
      },
      selection: {
        type: Object,
        default: () => {
          return {
            nodes: {},
            links: {}
          }
        }
      },
      collisionForce: {
        type: Object,
        default: () => {
          return {
            strength: 0,
            iterations: 0
          }
        }
      }
    },
    data () {
      return {
        canvas: false,
        nodes: [],
        links: [],
        size: {
          w: 500,
          h: 500
        },
        offset: {
          x: 0,
          y: 0
        },
        clientOffset: {
          x: 0,
          y: 0
        },
        force: 500,
        forces: {
          Center: false,
          X: 0.5,
          Y: 0.5,
          ManyBody: true,
          Link: true,
          Collide: true
        },
        noNodes: false,
        strLinks: true,
        fontSize: 10,
        dragging: false,
        linkWidth: 1,
        nodeLabels: false,
        nodeSize: 5,
        mouseOfst: {
          x: 0,
          y: 0
        },
        padding: {
          x: 0,
          y: 0
        },
        simulation: null,
        nodeSvg: null,
        resizeListener: true
      }
    },
    render (createElement) {
      let ref = 'svg'
      let props = {}
      let renderer = 'svg-renderer'
      let bindProps = [
        'size',
        'nodes',
        'links',
        'selected',
        'linksSelected',
        'strLinks',
        'linkWidth',
        'nodeLabels',
        'fontSize',
        'labelOffset',
        'offset',
        'padding',
        'nodeSize',
        'noNodes'
      ]

      for (let prop of bindProps) {
        props[prop] = this[prop]
      }
      props.nodeSym = this.nodeSvg

      if (this.canvas) {
        renderer = 'canvas-renderer'
        ref = 'canvas'
        props.canvasStyles = this.options.canvasStyles
      }

      return createElement('div', {
        attrs: {class: 'net'},
        on: {'mousemove': this.move, '&touchmove': this.move}
      }, [
        createElement(renderer, {
          props, ref, on: {action: this.methodCall}
        })
      ])
    },
    created () {
      this.updateOptions(this.options)
      this.buildNodes(this.netNodes)
      this.links = this.buildLinks(this.netLinks)
      this.updateNodeSvg()
    },
    mounted () {
      this.onResize()
      this.$nextTick(() => {
        this.animate()
      })
      if (this.resizeListener) window.addEventListener('resize', this.onResize)
    },
    beforeDestroy () {
      if (this.resizeListener) window.removeEventListener('resize', this.onResize)
    },
    computed: {
      selected () {
        return this.selection.nodes
      },
      linksSelected () {
        return this.selection.links
      },
      center () {
        return {
          x: this.size.w / 2 + (this.size.w / 200) + this.offset.x,
          y: this.size.h / 2 + (this.size.h / 200) + this.offset.y
        }
      },
      labelOffset () {
        return {
          x: (this.nodeSize / 2) + (this.fontSize / 2),
          y: this.fontSize / 2
        }
      }
    },
    watch: {
      netNodes (newValue) {
        this.buildNodes(newValue)
        this.reset()
      },
      netLinks (newValue, oldValue) {
        this.links = this.buildLinks(newValue)
        this.reset()
      },
      nodeSym () {
        this.updateNodeSvg()
      },
      options (newValue, oldValue) {
        this.updateOptions(newValue)
        if (oldValue.size && newValue.size) {
          if ((oldValue.size.w !== newValue.size.w) || (oldValue.size.h !== newValue.size.h)) {
            this.onResize()
          }
        }
        this.animate()
      }
    },
    methods: {
      updateNodeSvg () {
        let svg = null
        if (this.nodeSym) {
          svg = svgExport.svgElFromString(this.nodeSym)
        }
        this.nodeSvg = svg
      },
      methodCall (action, args) {
        let method = this[action]
        if (method && typeof (method) === 'function') {
          if (args) method(...args)
          else method()
        } else {
          console.error('Call to undefined method:', action)
        }
      },
      onResize () {
        let size = this.options.size
        if (!size || !size.w) this.size.w = this.$el.clientWidth
        if (!size || !size.h) this.size.h = this.$el.clientHeight
        this.padding.x = 0
        this.padding.y = 0
        // search offsets of parents
        let vm = this
        while (vm.$parent) {
          this.padding.x += vm.$el.offsetLeft || 0
          this.padding.y += vm.$el.offsetTop || 0
          vm = vm.$parent
        }
        this.animate()
      },
      // -- Data
      updateOptions (options) {
        for (let op in options) {
          if (this.hasOwnProperty(op)) {
            this[op] = options[op]
          }
        }
      },
      buildNodes (nodes) {
        let vm = this
        this.nodes = nodes.map((node, index) => {
          // node formatter option
          node = this.itemCb(this.nodeCb, node)
          // index as default node id
          if (!node.id) vm.$set(node, 'id', index)
          // initialize node coords
          if (!node.x) vm.$set(node, 'x', 0)
          if (!node.y) vm.$set(node, 'y', 0)
          // node default name
          if (!node.name) vm.$set(node, 'name', 'node ' + node.id)

          //  cionzo qua metti una div con dentro il nome e la appiccichi al nodo
          function getTextWidth (text, font) {
            // re-use canvas object for better performance
            var canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement('canvas'))
            var context = canvas.getContext('2d')
            context.font = font
            var metrics = context.measureText(text)
            return {w: metrics.width, h: metrics.height}
          }

          let metrics = getTextWidth(node.name, this.fontSize)

          node.labelWidth = metrics.w
          node.labelHeight = this.fontSize

          if (node.svgSym) {
            node.svgIcon = svgExport.svgElFromString(node.svgSym)
            if (!this.canvas && node.svgIcon && !node.svgObj) node.svgObj = svgExport.toObject(node.svgIcon)
          }
          return node
        })
      },

      buildLinks (links) {
        return links.concat().map((link) => {
          // link formatter option
          link = this.itemCb(this.linkCb, link)
          // source and target for d3
          link.source = link.sid
          link.target = link.tid
          return link
        })
      },
      itemCb (cb, item) {
        if (cb && typeof (cb) === 'function') item = cb(item)
        return item
      },
      // -- Animation
      simulate (nodes, links) {
        let forces = this.forces
        let sim = d3.forceSimulation()
           .stop()
           .alpha(0.5)
           // .alphaMin(0.05)
           .nodes(nodes)
        let radius = this.nodeSize
        let padding = 3;

        if (forces.Center !== false) sim.force('center', d3.forceCenter(this.center.x, this.center.y))
        if (forces.X !== false) {
          sim.force('X', d3.forceX(this.center.x).strength(forces.X))
        }
        if (forces.Y !== false) {
          sim.force('Y', d3.forceY(this.center.y).strength(forces.Y))
        }
        if (forces.ManyBody !== false) {
          sim.force('charge', d3.forceManyBody().strength(-this.force))
        }
        if (forces.Link !== false) {
          sim.force('link', d3.forceLink(links).id(function (d) { return d.id }))
        }
        if (forces.Collide !== false) {
          var collide = d3.bboxCollide(function (d, i) {
            console.log(d, radius)
            console.log(d.name, [[-0.5 * radius , -0.5 * d.labelHeight],[0.5 * radius + d.labelWidth, 0.5 * d.labelHeight]])
            return [[-0.5 * radius -padding , -padding -0.5 * d.labelHeight], [padding + 0.5 * radius + d.labelWidth,padding +  0.5 * d.labelHeight]]
          })
             .strength(this.collisionForce.strength)
             .iterations(this.collisionForce.iterations)
          console.log('collide', collide)
          sim.force('collide', collide)
        }

        sim = this.setCustomForces(sim)

        return sim
      },
      setCustomForces (sim) {
        let forces = this.customForces
        if (forces) {
          for (let f in forces) {
            let d3Func = this.getD3Func('force' + f)
            if (d3Func) {
              let args = forces[f]
              sim.force('custom' + f, d3Func(...args))
            }
          }
        }
        return sim
      },
      getD3Func (name) {
        let func = d3[name]
        if (func && typeof (func) === 'function') return func
        return null
      },
      animate () {
        if (this.simulation) this.simulation.stop()
        if (this.forces.Link !== false) this.simulation = this.simulate(this.nodes, this.links)
        else this.simulation = this.simulate(this.nodes)
        var that = this
        this.simulation.on('tick', function () {
          that.nodes.forEach(function (n) {

            n.cx = Math.max(that.nodeSize, Math.min(that.size.w - that.nodeSize - n.labelWidth - 1, n.x))
            n.cy = Math.max(that.nodeSize, Math.min(that.size.h - that.nodeSize - 0.5 * n.labelHeight - 1, n.y))
            n.x = n.cx
            n.y = n.cy
          })

        })
        this.simulation.restart()
      },
      reset () {
        this.animate()
        this.nodes = this.simulation.nodes()
        if (this.forces.links) this.links = this.simulation.force('link').links()
      },
      // -- Mouse Interaction
      move (event) {
        let pos = this.clientPos(event)
        if (this.dragging !== false) {
          if (this.nodes[this.dragging]) {
            this.simulation.restart()
            this.simulation.alpha(0.5)
            this.nodes[this.dragging].fx = pos.x - this.mouseOfst.x
            this.nodes[this.dragging].fy = pos.y - this.mouseOfst.y
          }
        }
      },
      clientPos (event) {
        let x = (event.touches) ? event.touches[0].clientX : event.clientX
        let y = (event.touches) ? event.touches[0].clientY : event.clientY
        x = x || 0
        y = y || 0
        return {x, y}
      },
      dragStart (event, nodeKey) {
        this.dragging = (nodeKey === false) ? false : nodeKey
        this.setMouseOffset(event, this.nodes[nodeKey])
        if (this.dragging === false) {
          this.simulation.alpha(0.1)
          this.simulation.restart()
          this.setMouseOffset()
        }
      },
      dragEnd () {
        let node = this.nodes[this.dragging]
        if (node && !node.pinned) {
          // unfix node position
          node.fx = null
          node.fy = null
        }
        this.dragStart(false)
      },
      // -- Render helpers
      nodeClick (event, node) {
        this.$emit('node-click', event, node)
      },
      linkClick (event, link) {
        this.$emit('link-click', event, link)
      },
      setMouseOffset (event, node) {
        let x = 0
        let y = 0
        if (event && node) {
          let pos = this.clientPos(event)
          x = (pos.x) ? pos.x - node.x : node.x
          y = (pos.y) ? pos.y - node.y : node.y
        }
        this.mouseOfst = {x, y}
      },
      screenShot (name, bgColor, toSVG, svgAllCss) {
        let exportFunc
        let args = []
        if (this.canvas) {
          toSVG = false
          exportFunc = this.$refs.canvas.canvasScreenShot
          args = [bgColor]
        } else {
          exportFunc = this.$refs.svg.svgScreenShot
          args = [toSVG, bgColor, svgAllCss]
        }
        if (toSVG) name = name || 'export.svg'

        exportFunc((err, url) => {
          if (!err) {
            if (!toSVG) saveImage.save(url, name)
            else saveImage.download(url, name)
          }
          this.$emit('screen-shot', err)
        }, ...args)
      }
    }
  }
</script>

<style lang="stylus">
  @import 'vars.styl'
  .net
    height: 100%
    margin: 0

  .net-svg
  // fill: white // background color to export as image
  .node
    stroke: alpha($dark, 0.7)
    stroke-width: 3px
    transition: fill 0.5s ease
    fill: $white

  .node.selected
    stroke: $color2

  .node.pinned
    stroke: alpha($warn, .6)

  .link
    stroke: alpha($dark, 0.3)

  .node
  .link
    stroke-linecap: round
    &:hover
      stroke: $warn
      stroke-width: 5px

  .link.selected
    stroke: alpha($color2, 0.6)

  .curve
    fill: none

  .node-label
    fill: $dark
    height: auto
    width: auto
    white-space: nowrap
</style>

