<template>
  <section
    id="js-wrap"
    ref="wrap"
    class="virtual-scroll"
    @wheel="wheelHandle"
    @touchstart="touchStartHandle"
    @touchmove="touchMoveHandle"
    @touchend="touchEndHandle"
  >
    <div class="vs__inner">
      <div
        v-for="(item, index) in displayList"
        ref="targets"
        :key="`target${index}`"
        class="vs__target"
      >
        <div class="target__inner" v-html="item" />
      </div>
    </div>
    <div v-if="false" class="vs__scroll">wheel : {{ accelerate }}</div>
  </section>
</template>

<script>
import { gsap } from 'gsap/all'
import jsonData from './name.json'
import isMobile from 'ismobilejs'

const dataLastIndex = jsonData.length - 1

export default {
  name: 'VirtualScroll',
  components: {},

  data() {
    return {
      // origin json data
      jsonData,

      /// data last index number
      dataLastIndex,

      // target rect height
      targetHeight: 0,
      targetsHeight: 0,

      // wheel
      accelerate: {
        current: 0,
        target: 0,
      },

      // touch
      touchPos: {
        startY: 0,
        diff: 0,
        endY: 0,
      },

      scroll: 0,

      // easing value
      ease: 0.1,

      // target elements
      targets: [
        {
          dom: null,
          pos: 0,
          index: 0,
        },
      ],

      // transform positions
      positions: [],

      // visible jsonData index - この値の数がDOMの数になる
      listIndex: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    }
  },

  computed: {
    displayList() {
      return this.listIndex.map((val) => this.jsonData[val])
    },
  },

  watch: {
    //
  },

  mounted() {
    this.$nextTick(() => {
      this.init()
    })
  },

  created() {
    //
  },

  beforeDestroy() {
    //
  },

  methods: {
    init() {
      this.initItemsStyle()
      this.update()
    },

    /**
     * set target style
     */
    initItemsStyle() {
      // set target height
      this.targetHeight = this.$refs.targets[0].offsetHeight
      this.targetsHeight = this.targetHeight * this.listIndex.length

      this.$refs.targets.forEach((el, i) => {
        // set position to array
        this.positions.push(this.targetHeight * i)

        //        const rotationX = math.map(this.positions[i], 0, this.targetsHeight, 120, -120)

        // set style
        gsap.set(el, {
          y: this.positions[i],
          //          rotationX,
        })
      })
    },

    /**
     * requestAnimationFrame
     */
    update() {
      requestAnimationFrame(this.update)

      if (isMobile.any) {
        this.touchPosToAccelerate()
      } else {
        this.updateAccelerate()
      }
    },

    /**
     * easing Accelerate value
     */
    updateAccelerate() {
      this.accelerate.target +=
        (this.accelerate.current - this.accelerate.target) * this.ease

      this.accelerate.target = Math.trunc(this.accelerate.target * 100) / 100
      //
      if (Math.trunc(this.accelerate.target) !== this.accelerate.current) {
        this.scroll += this.accelerate.target - this.scroll
        //
        this.moveItems()
      }
    },

    touchPosToAccelerate() {
      this.accelerate.target +=
        (this.touchPos.diff - this.accelerate.target) * this.ease

      this.accelerate.target = Math.trunc(this.accelerate.target * 100) / 100
      //
      if (Math.trunc(this.accelerate.target) !== this.accelerate.current) {
        this.scroll += this.accelerate.target - this.scroll
        //
        this.moveItems()
      }
    },

    /**
     * set target style
     */
    moveItems() {
      // console.log(this.scroll)
      this.$refs.targets.forEach((el, i) => {
        // position checker
        this.checkPosition(i)

        //        const rotationX = math.map(this.positions[i], 0, this.targetsHeight, 120, -120)
        // set style
        gsap.set(el, {
          y: this.positions[i],
          //          rotationX,
        })
      })
    },

    /**
     *
     */
    checkPosition(i) {
      if (this.positions[i] < -this.targetHeight) {
        console.log('💫 up')
        // current visible last index
        const lastItemIndex = this.positions.indexOf(
          Math.max.apply(null, this.positions),
        )

        // move under the last item position - 一番下部の要素のindex
        const lastItemPos = Math.max(...this.positions)
        this.positions[i] = lastItemPos + this.targetHeight

        // 最後だったら 0に
        if (this.listIndex[lastItemIndex] === this.dataLastIndex) {
          this.$set(this.listIndex, i, 0)
        } else {
          // lastItemIndex をインクリメント
          this.$set(this.listIndex, i, this.listIndex[lastItemIndex] + 1)
        }
      } else if (
        this.positions[i] >
        this.targetHeight * this.positions.length
      ) {
        console.log('💫 down')
        // current visible first index - 一番上部の要素のindex
        const firstItemIndex = this.positions.indexOf(
          Math.min.apply(null, this.positions),
        )

        // move on the first item position
        const firstItemPos = Math.min(...this.positions)
        this.positions[i] = firstItemPos - this.targetHeight

        // 一番上が 0だったら 最後の要素をセット
        if (this.listIndex[firstItemIndex] === 0) {
          this.$set(this.listIndex, i, this.dataLastIndex)
        } else {
          // firstItemIndex をデクリメント
          this.$set(this.listIndex, i, this.listIndex[firstItemIndex] - 1)
        }
      }

      // update position with wheel amount
      this.positions[i] += this.scroll / 5
    },

    /**
     * wheel handler
     */
    wheelHandle(e) {
      const value = e.wheelDelta || -e.deltaY || -e.detail

      const _value = Math.trunc(value * 10) / 10

      if (Math.abs(_value) > 1) {
        this.accelerate.current = _value
      }

      const delta = Math.max(-1, Math.min(1, _value))
      //
      if (delta < 0) {
        // next
      } else {
        // prev
      }
    },
    /**
     * touchstart handler
     */
    touchStartHandle(e) {
      console.log('touchStartHandle')
      this.touchPos.startY = e.changedTouches[0].screenY
    },
    /**
     * touchmove handler
     */
    touchMoveHandle(e) {
      this.touchPos.endY = e.changedTouches[0].screenY
      this.touchPos.diff = this.touchPos.endY - this.touchPos.startY
    },
    /**
     * touchend handler
     */
    touchEndHandle(e) {
      console.log('touchEndHandle')
      this.touchPos.endY = e.changedTouches[0].screenY
      this.touchPos.startY = 0
      this.touchPos.diff = 0

      if (this.touchPos.endY < this.touchPos.startY) {
        // next
      }

      if (this.touchPos.endY > this.touchPos.startY) {
        // prev
      }
    },
  },
}
</script>

<style scoped lang="scss">
.virtual-scroll {
  position: relative;
  height: 500px;
  overflow: hidden;
  background-color: #f1f1f1;
  transform-style: preserve-3d;
  perspective: 400px;
}

.vs__inner {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200px;
  height: calc(200px * 9); // = item count
  transform: translate(-50%, -50%);
}

.vs__target {
  position: absolute;
  z-index: 2;
  left: calc(50% - 200px / 2);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  border: 5px dashed darken(#25ecb7, 35%);
  background-color: lighten(#25ecb7, 35%);
  box-shadow: 0 0 30px rgba(black, 0.05);
  box-sizing: border-box;
}

.target__inner {
  width: 100%;
  padding-top: 1em;
  padding-bottom: 1em;
  text-align: center;
  background-color: #25ecb7;
  box-shadow: 0 0 30px rgba(black, 0.15);
}

.vs__scroll {
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>
