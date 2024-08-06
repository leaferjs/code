import { Leafer, Text, dataType } from 'leafer-ui'

const leafer = new Leafer({ view: window })

Text.addAttr('version', '1.0.2', dataType)  //  [!code hl]

// default version

const text = new Text({ text: 'Welcome to LeaferJS' })

leafer.add(text)

console.log((text as any).version) // 1.0.2

// set version

const text2 = new Text({ version: '1.1.0' } as any)

console.log((text2 as any).version) // 1.1.0