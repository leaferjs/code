import { Leafer, Rect } from 'leafer-ui'

const div = document.body.appendChild(document.createElement('div'))
const canvas = document.body.appendChild(document.createElement('canvas'))

div.style.height = '600px'
div.innerText = '请往下滑，会出现一个矩形'

const leafer = new Leafer({ view: canvas, type: 'block', height: 800 })

const rect = new Rect({
    x: 100,
    y: 100,
    width: 200,
    height: 200,
    fill: '#32cd79',
    cornerRadius: [50, 80, 0, 80],
    draggable: true
})

leafer.add(rect)