// #混合模式 [destination-over 在现有画布内容的后面绘制新的图形]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect1 = Rect.one({ fill: '#FF4B4B', cornerRadius: 20 }, 100, 100)
const rect2 = Rect.one({ fill: '#32cd79', cornerRadius: 50 }, 150, 150)

leafer.add([rect1, rect2])

setTimeout(() => {

    // 设置混合模式
    rect2.blendMode = 'destination-over'  // [!code hl]

}, 1000)