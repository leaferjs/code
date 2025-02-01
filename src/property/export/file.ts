// #导出图片 [导出文件]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 100, 100)
leafer.add(rect)

rect.export('test.png') // [!code hl:3]

// const result = await rect.export('./home/test.png')