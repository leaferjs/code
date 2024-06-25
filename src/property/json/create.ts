import { Group, Leafer } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const json = { "x": 20, "y": 20, "children": [{ "tag": "Rect", "x": 100, "y": 100, "width": 200, "height": 200, "fill": "#32cd79", "draggable": true }] }// [!code hl:3]

const group = new Group(json)

leafer.add(group)