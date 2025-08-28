// 你也可以使用npm包模式，编译成js文件供worker调用
importScripts('https://unpkg.com/@leafer-ui/worker@1.9.5/dist/worker.min.js')

const { Leafer, Rect } = LeaferUI

const leafer = new Leafer({ width: 800, height: 600 })
leafer.add(Rect.one({ fill: '#32cd79' }, 100, 100))

leafer.export('jpg').then((result) => {
  self.postMessage(result.data)
})
