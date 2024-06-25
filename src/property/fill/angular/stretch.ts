import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({
    width: 100,
    height: 100,
    fill: {  // [!code hl:6]
        type: "angular",
        stretch: 0.1,
        to: 'bottom-right',
        stops: [{ offset: 0, color: '#FF4B4B' }, { offset: 0.3, color: '#FEB027' }, { offset: 0.7, color: '#79CB4D' }, { offset: 1, color: '#FF4B4B' }]
    }
})

leafer.add(rect)