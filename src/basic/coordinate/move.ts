import { Group, Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const group = new Group({ x: 100, y: 100, scaleX: 2, scaleY: 2 })
const rect = new Rect({ x: 100, y: 100, fill: '#32cd79', draggable: true })

leafer.add(group)
group.add(rect)

const worldMove = { x: 10, y: 10 }  // [!code hl:3]
const localMove = { x: 0, y: 0 }
rect.worldToLocal(worldMove, localMove, true)

console.log('local move', localMove)
