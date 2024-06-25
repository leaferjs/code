import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({
    width: 100,
    height: 100,
    fill: {  // [!code hl:6]
        type: 'linear',
        from: 'top-left',
        to: 'bottom-right',
        stops: [{ offset: 0, color: '#FEB027' }, { offset: 1, color: '#79CB4D' }]
    },
})

leafer.add(rect)