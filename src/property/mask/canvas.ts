import { Leafer, Group, Image, Canvas, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const group = new Group({ x: 100, y: 100 })  // [!code hl:7]

const mask = new Canvas({ width: 100, height: 100, mask: true })
mask.context.fillStyle = 'black'
mask.context.arc(50, 50, 20, 0, 180)
mask.context.fill()



const image = new Image({
    width: 100,
    height: 100,
    opacity: 0.2,
    url: 'image/leafer.jpg'
})

const rect = new Rect({
    width: 100,
    height: 100,
})

leafer.add(group)



group.add(mask)   // [!code hl:2]
group.add(image)
group.add(rect)