// #突出主体、淡化其他元素（半透明）[leafer]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#FEB027' }, 210, 100)

leafer.add(Rect.one({ fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 100, 100))
leafer.add(rect)
leafer.add(Rect.one({ fill: '#FFE04B', cornerRadius: [0, 20, 20, 0] }, 320, 100))

setTimeout(() => {

    leafer.dim = true // 进行淡化 // [!code hl:3]
    // leafer.dim = 0.2 // 指定透明度
    rect.dimskip = true // 跳过淡化，突出主体

}, 1000)