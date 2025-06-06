// #动画 - 循环间隔  [loopDelay（animate）]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 0, 100, 50, 50)

leafer.add(rect)

rect.animate(
    { x: 500 }, // style keyframe
    {
        duration: 2,
        loop: true,
        loopDelay: 1 // 循环间隔 1 秒，再进入下一次循环动画 // [!code hl]
    } // options
)