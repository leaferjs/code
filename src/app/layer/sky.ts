import { App, Rect } from 'leafer-ui'

const app = new App({  // [!code hl:5]
    view: window,
    tree: {},
    sky: { type: 'draw', usePartRender: false }
})

const rect = new Rect({ x: 100, y: 100, fill: '#32cd79', draggable: true })
const border = new Rect({ x: 200, y: 200, stroke: 'blue', draggable: true })

app.tree.add(rect)
app.sky.add(border)