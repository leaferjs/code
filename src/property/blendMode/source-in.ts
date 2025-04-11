// #混合模式 [source-in 仅在新形状和目标画布重叠的地方绘制新形状，其他的都是透明的]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect1 = Rect.one({ fill: '#FF4B4B', cornerRadius: 20 }, 100, 100)
const rect2 = Rect.one({ fill: '#32cd79', cornerRadius: 50 }, 150, 150)

leafer.add([rect1, rect2])

setTimeout(() => {

    // 设置混合模式
    rect2.blendMode = 'source-in'  // [!code hl]

}, 1000)