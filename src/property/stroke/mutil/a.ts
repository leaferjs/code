import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({
    width: 100,
    height: 100,
    stroke: [ // [!code hl:11]
        {
            type: 'linear',
            stops: [{ offset: 0, color: '#FF4B4B' }, { offset: 1, color: '#FEB027' }]
        },
        {
            type: 'image',
            url: '/image/leafer.jpg',
            mode: 'cover',
            opacity: 0.5
        }]
})

leafer.add(rect)