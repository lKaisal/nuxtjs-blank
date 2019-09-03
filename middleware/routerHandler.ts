export default async context => {
  const { store, from } = context
  store.dispatch('ui/hideAllOverlayElements')
  if (from) store.commit('ui/setFromPage', { name: from.name, params: from.params })

  const { route } = context
  const isPageProduct = route.name.includes('product')
  if (isPageProduct) store.commit('ui/setPanelCartScrolledEnough', false)
}
