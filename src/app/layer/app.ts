import { App, Leafer, Rect } from 'leafer-ui'

const app = new App({ view: window }) // [!code hl:9]

app.ground = new Leafer({ type: 'draw' })
app.tree = new Leafer()
app.sky = new Leafer({ type: 'draw', usePartRender: false })

app.add(app.ground)
app.add(app.tree)
app.add(app.sky)

const background = new Rect({ width: 800, height: 600, fill: 'gray' })
const rect = new Rect({ x: 100, y: 100, fill: '#32cd79', draggable: true })
const border = new Rect({ x: 200, y: 200, stroke: 'blue', draggable: true })

app.ground.add(background)
app.tree.add(rect)
app.sky.add(border)
