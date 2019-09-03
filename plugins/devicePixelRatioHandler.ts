export default function({ store }) {
  const pixelRatio = window.devicePixelRatio

  store.commit('ui/setPixelRatio', pixelRatio)
}
