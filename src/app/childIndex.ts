import { App, Leafer, Rect } from 'leafer-ui'

const app = new App({ view: window })

app.ground = new Leafer({ type: 'draw' })
app.tree = new Leafer()
app.sky = new Leafer({ type: 'draw' })

app.add(app.ground)
app.add(app.tree)
app.addBefore(app.sky, app.ground)

const background = new Rect({ width: 800, height: 600, fill: 'gray' })
const rect = new Rect({ x: 100, y: 100, fill: '#32cd79', draggable: true })
const border = new Rect({ x: 150, y: 150, stroke: 'blue', draggable: true })

app.ground.add(background)
app.tree.add(rect)
app.sky.add(border)

setTimeout(() => {
    app.addAfter(app.sky, app.ground)
}, 2090)
