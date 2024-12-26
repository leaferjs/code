import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件(可选)

const app = new App({  // [!code hl:4]
    view: window,
    editor: { lockRatio: true }
})

const rect = Rect.one({ editable: true, fill: 'rgb(50,205,121)', cornerRadius: 30 }, 100, 100)
app.tree.add(rect)

app.editor.target = rect