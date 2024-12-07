import { Leafer, Text } from 'leafer-ui'
import '@leafer-in/animate'

const leafer = new Leafer({ view: window })

const text = new Text({
    fill: 'rgb(50,205,121)',
    text: 0,  // [!code hl:5]
    animation: {
        style: { text: 100 },
        duration: 2
    }
})

leafer.add(text)