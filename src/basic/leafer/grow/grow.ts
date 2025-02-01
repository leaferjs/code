// #创建自动生长的 Leafer [grow]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({
    view: window,
    grow: true, // 自动生长 // [!code hl:3] 
    // growWidth: true, // 进一步细化宽度是否生长， 默认同 grow
    // growHeight: true  // 进一步细化高度是否生长， 默认同 grow
    fill: 'gray'
})

// 拖拽矩形可以看到画布在生长，自动贴合内容
leafer.add(Rect.one({ fill: '#32cd79', draggable: true }, 100, 100)) 