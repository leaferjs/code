// #聚焦状态 
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/state' // 导入交互状态插件 // [!code hl] 

const leafer = new Leafer({ view: window })

const rect = new Rect({
    width: 100,
    height: 100,
    fill: 'rgba(50,205,121, 0.7)',
    cornerRadius: 30,
    focusStyle: { // [!code hl:3] // 聚焦样式
        stroke: '#FEB027'
    }
})

leafer.add(rect)

setTimeout(() => {

    rect.focus()  // [!code hl:1] // 设置聚焦状态 

    setTimeout(() => { rect.focus(false) }, 2000)

}, 1000)
