// #新增元素属性 [为文本新增一个 dataType 类型的属性]
import { Leafer, Text, dataType } from 'leafer-ui'

const leafer = new Leafer({ view: window })

Text.addAttr('version', '1.6.0', dataType)  //  [!code hl]

// default version

const text = new Text({ text: 'Welcome to LeaferJS' })

leafer.add(text)

console.log((text as any).version) // 1.6.0

// set version

const text2 = new Text({ version: '1.6.0' } as any)

console.log((text2 as any).version) // 1.6.0