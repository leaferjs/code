import { Group, Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const group = new Group({ x: 100, y: 100, scaleX: 2, scaleY: 2 })
const rect = new Rect({ x: 100, y: 100, fill: '#32cd79', draggable: true })

leafer.add(group)
group.add(rect)

const point = { x: 100, y: 100 } // [!code hl:2]
rect.worldToLocal(point)

console.log('local', point)