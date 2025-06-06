// #应用与引擎配置 - document 视口类型 [Leafer]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/viewport' // 导入视口插件

const leafer = new Leafer({
    view: window,
    type: 'document' // 添加视口 // [!code hl]
})

leafer.add(Rect.one({ fill: '#32cd79' }, 100, 100, 200, 200))
leafer.add(Rect.one({ fill: '#32cd79' }, 100, 600, 200, 200))
leafer.add(Rect.one({ fill: '#32cd79' }, 100, 1200, 200, 200))
leafer.add(Rect.one({ fill: '#32cd79' }, 100, 1800, 200, 200))