import { Leafer, Group, Rect, DropEvent, DragEvent } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const dragRect = new Rect({ x: 200, y: 100, fill: '#32cd79', draggable: true })

const group = new Group({ x: 300, y: 300 })
const rect = new Rect({ fill: 'blue' })

leafer.add(dragRect)
leafer.add(group)
group.add(rect)

group.on(DragEvent.ENTER, function () {  // [!code hl:16]
    //DropEvent.setList(dragRect)
    DragEvent.setData({ data: 'drop data' })
    rect.set({ stroke: 'black', strokeWidth: 2 })
})

group.on(DragEvent.LEAVE, function () {
    rect.set({ stroke: '' })
})

group.on(DropEvent.DROP, function (e: DropEvent) {
    console.log(e.data)
    e.list.forEach((leaf) => {
        leaf.dropTo(group)
    })
})