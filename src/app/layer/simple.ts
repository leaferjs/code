import { App, Rect } from 'leafer-ui'

const app = new App({ view: window }) // [!code hl:5]

app.ground = app.addLeafer({ type: 'draw' })
app.tree = app.addLeafer()
app.sky = app.addLeafer({ type: 'draw', usePartRender: false })

const background = new Rect({ width: 800, height: 600, fill: 'gray' })
const rect = new Rect({ x: 100, y: 100, fill: '#32cd79', draggable: true })
const border = new Rect({ x: 200, y: 200, stroke: 'blue', draggable: true })

app.ground.add(background)
app.tree.add(rect)
app.sky.add(border)