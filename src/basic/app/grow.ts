import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({
    view: window,
    grow: true, // 自动生长 [!code hl:3] 
    // growWidth: true, // 宽度是否生长， 默认同 grow
    // growHeight: true  // 高度是否生长， 默认同 grow
    fill: 'black'
})

const rect = Rect.one({ fill: '#32cd79', draggable: true }, 100, 100, 200, 200)

leafer.add(rect) // 拖拽矩形可以看到画布在生长，自动贴合内容