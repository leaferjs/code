// #图形编辑器 [显示中间控制点，并修改样式]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件(可选)

const app = new App({  // [!code hl:7]
    view: window,
    editor: {
        point: { cornerRadius: [0, 0, 10, 0] },
        middlePoint: { width: 12, height: 4, cornerRadius: 2 }
    }
})

const rect = Rect.one({ editable: true, fill: 'rgb(50,205,121)', cornerRadius: 30 }, 100, 100)
app.tree.add(rect)

app.editor.target = rect