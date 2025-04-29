// #突出主体、淡化其他元素（半透明）[App]
import { App, Rect } from 'leafer-ui'
import { EditorEvent } from '@leafer-in/editor' // 导入图形编辑器插件 //
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({
    view: window,
    editor: {}  //  配置 editor 会自动创建并添加 app.editor 实例、tree 层、sky 层
})

const rect = Rect.one({ editable: true, fill: '#FEB027' }, 210, 100)

app.tree.add(Rect.one({ editable: true, fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 100, 100))
app.tree.add(rect)
app.tree.add(Rect.one({ editable: true, fill: '#FFE04B', cornerRadius: [0, 20, 20, 0] }, 320, 100))

// 突出显示选中元素，淡化其他元素
app.editor.on(EditorEvent.SELECT, (e: EditorEvent) => {

    app.tree.dim = !!e.value // 选中元素后进行淡化 // [!code hl:3]

    if (e.value) e.editor.list.forEach(item => item.dimskip = true) //  跳过淡化，突出主体

    if (e.oldValue) e.oldList.forEach(item => {
        if (!e.editor.hasItem(item)) item.dimskip = false
    })

})