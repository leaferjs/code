import { ImageManager, Leafer } from 'leafer-ui'

// chrome 刷新页面时不会销毁实例，需要主动销毁
window.addEventListener('unload', () => {
    const { list } = Leafer
    list.forEach(leafer => (leafer as Leafer).destroy(true))
    list.destroy()
    ImageManager.destroy()
})