import { App, Frame, Rect } from 'leafer-ui'
import { Editor } from '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件(可选)

const app = new App({ // [!code hl:6]
    view: window,
    fill: '#F2F2F2', // 背景色
    tree: { type: 'design' }, // 添加 tree 层
    sky: {}  // 添加 sky 层
})

app.tree.add(Frame.one({ // 页面内容
    children: [
        Rect.one({ editable: true, fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 100, 100),
        Rect.one({ editable: true, fill: '#FFE04B', cornerRadius: [0, 20, 20, 0] }, 300, 100)
    ]
}, 100, 100, 500, 600))

app.sky.add(app.editor = new Editor()) // 添加图形编辑器，用于选中元素进行编辑操作 [!code hl]