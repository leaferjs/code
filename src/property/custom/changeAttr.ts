import { Leafer, Text } from 'leafer-ui'

const leafer = new Leafer({ view: window })

Text.changeAttr('fill', 'red')  //  [!code hl]

const text = new Text({ text: 'Welcome to LeaferJS' })

leafer.add(text)