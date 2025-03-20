// #导出图片 [导出高清图]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/export' // 引入导出元素插件 // [!code hl] 

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 100, 100)
leafer.add(rect)

rect.export('HD.png', { pixelRatio: 2 }) // [!code hl:3]

// const result = await rect.export('HD.png', { pixelRatio: 2 }}