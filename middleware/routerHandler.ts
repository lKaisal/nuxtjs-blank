import { Context } from '@nuxt/vue-app'

export default context => {
  const { store } = context as Context
  store.dispatch('ui/hideAllOverlayElements')
}
