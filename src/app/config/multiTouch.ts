// #应用与引擎配置 - 禁用多点触屏功能 [Leafer]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({
    view: window,
    multiTouch: { disabled: true } // [!code hl]
})

leafer.add(Rect.one({ fill: '#32cd79' }, 100, 100))