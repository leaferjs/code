// #创建 Line [绘制趋势图（App)]
import { App, Line } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({ view: window, editor: {} })

const line = new Line({  // [!code hl:7]
    points: [0, 90, 20, 60, 40, 80, 60, 40, 75, 50, 90, 10, 100, 90],  // [x,y, x,y ...]
    curve: true,
    strokeWidth: 5,
    stroke: '#32cd79',
    editable: true
})

app.tree.add(line)