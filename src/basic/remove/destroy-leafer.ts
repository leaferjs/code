// #销毁应用
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

leafer.add(Rect.one({ fill: '#32cd79' }, 100, 100))

setTimeout(() => {

    leafer.destroy() // [!code hl:2] // 应用销毁，默认为异步方式
    // leafer.destroy(true)  //  销毁应用，同步方式

}, 2000)
