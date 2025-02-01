import { App, Text } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件  // [!code hl:2] 
import '@leafer-in/text-editor'

const app = new App({
    view: window,
    editor: {}
})

app.tree.add(Text.one({ // [!code hl:4] 
    text: 'Action is the proper fruit of knowledge.',
    editable: true, fill: '#FFE04B', fontSize: 16,
}, 100, 100, 100))  