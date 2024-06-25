import { Leafer, Text } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const text = new Text({
    fill: 'rgb(50,205,121)',
    text: 'Welcome to LeaferJS',
})

leafer.add(text)