import { App, Rect, MoveEvent, ZoomEvent } from 'leafer-ui'
import '@leafer-in/viewport' // 导入视口插件

const app = new App({
    view: window,
    tree: { type: 'custom' } // 给 tree 层添加自定义视口  // [!code hl]
})

// 自定义平移视图    // [!code hl:11]
app.tree.on(MoveEvent.BEFORE_MOVE, (e: MoveEvent) => {
    const { x, y } = app.tree.getValidMove(e.moveX, e.moveY)
    app.tree.zoomLayer.move(x, y)
})

// 自定义缩放视图
app.tree.on(ZoomEvent.BEFORE_ZOOM, (e: ZoomEvent) => {
    const center = { x: e.x, y: e.y }
    app.tree.zoomLayer.scaleOfWorld(center, app.tree.getValidScale(e.scale))
})

app.tree.add(Rect.one({ fill: '#32cd79' }, 100, 100, 200, 200))