<template lang="pug">
  include ../../tools/all

  +b.component-prop-dec
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch, Ref } from 'vue-property-decorator'
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import { State, Getter, Mutation, Action, namespace } from 'vuex-class'
import { UiState } from '@/store/ui'
import { DataState } from '@/store/data'

@Component({
  name: 'ComponentPropDec',
  components: {
    // 
  },
})

export default class ComponentPropDec extends Vue {
  @Prop() index: number

  observer = null

  @State('ui') stateUi: UiState
  @State('catalogue') stateCatalogue: DataState
  @Getter('screenSize', { namespace: 'ui' }) screenSize

  @Ref('name') readonly nameRef!: HTMLElement

  get breakpoint() { return this.stateUi.breakpoint }

  async mounted() {
    if (process.client) {
      // 
    }
  }

  @Watch('screenSize')
  async screenSizeHandler(val: number) {
    // 
  }


  // @Mutation('ui') setPanelCartScrolledEnough
  // setNameStyle() { return `animation-duration: ${this.animationDuration}s !important;` }
}
</script>

<style lang="stylus" scoped>
@import '~@/styles/common'

.component-prop-dec
  // 
</style>
