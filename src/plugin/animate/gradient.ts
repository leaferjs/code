import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/state'
import '@leafer-in/animate'
import '@leafer-in/transition'

const leafer = new Leafer({ view: window })

const rect = new Rect({
    x: 100,
    y: 100,
    width: 100,
    height: 100,
    cornerRadius: 30,
    fill: {
        type: 'linear',
        stops: ['#FEB027', '#79CB4D']
    },
    hoverStyle: {
        fill: {
            type: 'radial',
            from: 'top',
            stops: ['#FF4B4B', '#FEB027']
        }
    },
    transition: 1
})

leafer.add(rect)