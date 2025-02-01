// #创建自动生长的 Leafer [grow-height]
import { Leafer, Rect } from 'leafer-ui'

// 高度自动生长, 宽度固定不变
const leafer = new Leafer({
    view: window,
    width: 200,
    grow: true, // 自动生长 // [!code hl:3] 
    growWidth: false,  // 单独阻止宽度自动生长
    fill: 'gray'
})

// 拖拽矩形可以看到画布在生长，自动贴合内容
leafer.add(Rect.one({ fill: '#32cd79', draggable: true }, 100, 100)) 