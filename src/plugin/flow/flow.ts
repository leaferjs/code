import { Leafer, Rect, Star, Ellipse } from 'leafer-ui'
import { Flow } from '@leafer-in/flow'

const leafer = new Leafer({ view: window })

const flow = new Flow({ flow: 'x', gap: { x: 'auto', y: 20 }, fill: 'gray', flowAlign: { content: 'top', x: 'from' }, flowWrap: true, x: 100, y: 100, width: 260, height: 260 })

const rect = new Rect({ fill: 'red' })
const star = new Star({ fill: 'green', x: 800, height: 100 })
const ellipse = new Ellipse({ fill: 'blue' })
flow.addMany(rect, star, ellipse)

leafer.add(flow)