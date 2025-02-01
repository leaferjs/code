// #导出图片 [画面截图]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

leafer.add(Rect.one({ fill: '#32cd79' }, 100, 100))

leafer.export('screenshot.png', { screenshot: true }) // [!code hl:3]

// const result = await leafer.export('screenshot.png', {screenshot: true}