import { Leafer, Group, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const group = new Group() // [!code hl:4]
leafer.add(group)

leafer.zoomLayer = group

// fixed layer
leafer.add(new Rect({ fill: '#FF4B4B', draggable: true }))

// zoom / move layer
group.add(new Rect({ x: 100, y: 100, fill: '#32cd79', draggable: true }))