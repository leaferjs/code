
import { App, Rect, Group, DragEvent, DropEvent } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件

const app: App = new App({
    view: window,
    editor: {}
})

const group = new Group({ x: 300, y: 300 })
const rect = new Rect({ fill: 'blue', editable: true })

app.tree.add(new Rect({ fill: 'green', editable: true, draggable: true }))
app.tree.add(new Rect({ fill: 'red', editable: true, draggable: true }))


app.tree.add(group)
group.add(rect)

group.on(DragEvent.ENTER, function () {
    DragEvent.setData({ data: 'drop data' })
    rect.set({ stroke: 'black', strokeWidth: 2 })
})

group.on(DragEvent.LEAVE, function () {
    rect.set({ stroke: '' })
})

group.on(DropEvent.DROP, function (e: DropEvent) {
    console.log(e.data, e.list)
    e.list.forEach((leaf) => {

        leaf.dropTo(group) // 放置元素到group中

    })
})