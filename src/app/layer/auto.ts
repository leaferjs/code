import { App, Rect } from 'leafer-ui'

const app = new App({ // [!code hl:6]
    view: window,
    ground: { type: 'draw' }, // 可选
    tree: {},
    sky: { type: 'draw', usePartRender: false }
})

const background = new Rect({ width: 800, height: 600, fill: 'gray' })
const rect = new Rect({ x: 100, y: 100, fill: '#32cd79', draggable: true })
const border = new Rect({ x: 200, y: 200, stroke: 'blue', draggable: true })

app.ground.add(background)
app.tree.add(rect)
app.sky.add(border)