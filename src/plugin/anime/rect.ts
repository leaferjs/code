import { Leafer, PointerEvent, Rect } from 'leafer-ui'
import anime from 'animejs'

const leafer = new Leafer({ view: window })

const rect = new Rect({ y: 100, cornerRadius: 50, fill: '#32cd79' })

leafer.add(rect)

rect.on(PointerEvent.DOWN, () => {

    anime({
        targets: rect,

        x: 500,
        cornerRadius: 0,

        easing: 'easeInOutQuad' // 动画类型
    })

})

