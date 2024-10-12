import { Leafer, Rect } from 'leafer-ui'
import { Animate } from '@leafer-in/animate'

const leafer = new Leafer({ view: window })

const rect = new Rect({ y: 100, cornerRadius: 50, fill: '#32cd79' })

leafer.add(rect)

new Animate(  // [!code hl:7]
    rect,
    { x: 500, cornerRadius: 0, fill: '#ffcd00' }, // style keyframe
    {
        duration: 1,
        swing: true // 摇摆循环播放
    } // options
)