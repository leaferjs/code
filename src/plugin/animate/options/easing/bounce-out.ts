// #动画 - 缓动方式  [bounce-out（Animate）]
import { Leafer, Rect } from 'leafer-ui'
import { Animate } from '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 0, 100, 50, 50)

leafer.add(rect)

new Animate(
    rect,
    { x: 500 }, // style keyframe
    {
        easing: 'bounce-out',  // 重力反弹结束 // [!code hl]
        duration: 2,
        loop: true
    } // options
)