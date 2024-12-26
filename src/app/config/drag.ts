import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/viewport' // 导入视口插件

const leafer = new Leafer({ view: window, type: 'viewport' })

leafer.add(Rect.one({ fill: '#32cd79', draggable: true }, 100, 100))
leafer.add(Rect.one({ fill: '#32cd79', draggable: true }, 300, 100))


leafer.config.move.drag = true  // [!code hl] // 预览模式，可在应用运行中实时修改。