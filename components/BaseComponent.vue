<template lang="pug">
  include ../tools/all

  +b.base-component
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapMutations } from 'vuex'
import { from } from 'rxjs';
import { delayWhen, filter } from 'rxjs/operators';
import { CSSTimeline } from '@/mixins/css-timeline'
import { pageTransition } from '@/store/ui'

export default Vue.extend({
  name: 'BaseComponent',
  computed: {
    ...mapState('ui', [
      'globalLoaderLeft',
      'pageTransition'
    ])
  },
  created() {
    if (!this.globalLoaderLeft) {
      const unwatch = this.$watch('globalLoaderLeft', async () => {
        this.setPageTransition({ enterRunning: true, enterFinished: false, leaveRunning: false, leaveFinished: false })
        await this.enterAnimation()
        this.setPageTransition({ enterRunning: false, enterFinished: true, leaveRunning: false, leaveFinished: false })
        console.log('base mounted after watch')

        unwatch()
      })
    }
  },
  async mounted() {
    if (this.globalLoaderLeft && !this.pageTransition.enterRunning && !this.pageTransition.enterFinished) {
      this.setPageTransition({ enterRunning: true, enterFinished: false, leaveRunning: false, leaveFinished: false })
      await this.enterAnimation()
      this.setPageTransition({ enterRunning: false, enterFinished: true, leaveRunning: false, leaveFinished: false })
      console.log('base mounted')
    }
  },
  async beforeDestroy() {
    this.setPageTransition({ enterRunning: false, enterFinished: false, leaveRunning: true, leaveFinished: false })
    await this.leaveAnimation()
    this.setPageTransition({ enterRunning: false, enterFinished: false, leaveRunning: false, leaveFinished: true })
    console.log('base destroyed')
  },
  methods: {
    ...mapMutations('ui', [
      'setPageTransition'
    ]),
    async enterAnimation(extendFn = (tl: CSSTimeline) => {ease: 'cubic-bezier(0.260, 0.860, 0.440, 0.985)'}) {
      const timeline =  new CSSTimeline({cleanup: true});
      timeline.to(this.$el, 1,
        { opacity: 0 },
        { opacity: 1 },
      );

      extendFn(timeline);

      await timeline.render();
      return timeline.play();
    },
    leaveAnimation(extendFn = (tl: CSSTimeline) => {ease: 'cubic-bezier(0.260, 0.860, 0.440, 0.985)'}): Promise<any> {
      const timeline =  new CSSTimeline({cleanup: true});

      timeline.to(this.$el, .35,
        { opacity: 1 },
        { opacity: 0 },
      )

      extendFn(timeline);

      return timeline.play();
    },
  }
})
</script>

<style lang="stylus" scoped>
@import '~@/styles/tools'

.base-component

  &__loader
    z-index 999
    position fixed
    top 0
    right 0
    bottom 0
    left 0
</style>
