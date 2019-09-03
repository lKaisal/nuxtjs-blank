// import { debounce } from 'lodash-es'

export default ({ store }) => {
  let prevScroll = null
  const supportPageOffset = window.pageXOffset !== undefined
  const isCSS1Compat = ((document.compatMode || '') === 'CSS1Compat')

  const scrollHandler = () => {
    const scrollY = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop
    const scrollDiff = scrollY - prevScroll
    const scrollDirection = scrollDiff > 0 ? 'down' : 'up'

    store.commit('ui/updateScrollInfo', [scrollY, scrollDirection])
    prevScroll = scrollY
  }

  scrollHandler()

  window.addEventListener('scroll', scrollHandler)
}
