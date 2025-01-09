import { Leafer, Text } from 'leafer-ui'
import '@leafer-in/animate'

const leafer = new Leafer({ view: window })

const text = new Text({
    fill: 'rgb(50,205,121)',
    animation: {  // [!code hl:4]
        style: { text: 'Welcome to LeaferJS' },
        duration: 2,
    }
})

leafer.add(text)