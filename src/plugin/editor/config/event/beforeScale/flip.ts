// #图形编辑器 [限制最小编辑尺寸，且支持镜像操作 （resize 元素事件前置钩子函数）]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件 // [!code hl] 
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({
    view: window,
    editor: {
        lockRatio: true,
        beforeScale({ target, scaleX, scaleY }) { // [!code hl:7]
            if (target.width * Math.abs(scaleX) < 20 || target.height * Math.abs(scaleY) < 20) {
                const scale = Math.min(20 / target.width, 20 / target.height)
                return { scaleX: scaleX < 0 ? -scale : scale, scaleY: scaleY < 0 ? -scale : scale }
            }
            return true
        }
    }
})

const rect = Rect.one({ editable: true, fill: '#32cd79', cornerRadius: 30 }, 100, 100)
app.tree.add(rect)

app.editor.select(rect)