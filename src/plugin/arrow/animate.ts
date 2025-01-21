import { Leafer } from 'leafer-ui'
import { Arrow } from '@leafer-in/arrow'
import '@leafer-in/animate'

const leafer = new Leafer({ view: window })

const rect = new Arrow({
    x: 100,
    y: 100,
    stroke: '#32cd79',
    strokeWidth: 5,
    dashPattern: [10, 10], // 绘制虚线 // [!code hl:8]
    dashOffset: 0,
    animation: { // 虚线动画
        style: { dashOffset: -20 },
        easing: 'linear',
        duration: 0.5,
        loop: true,
    }
})

leafer.add(rect)