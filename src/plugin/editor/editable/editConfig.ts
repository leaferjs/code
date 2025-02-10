// #图形编辑器 [editConfig]
import { Text, defineKey } from 'leafer-ui'

// 1. 设置类，所有 Text 元素生效（推荐）
Text.setEditConfig({
    editSize: 'scale' // 使用对象
})

Text.setEditConfig(function (text: Text) {
    return {  // 使用函数返回对象，可增加业务逻辑分流
        editSize: text.get('width') ? 'size' : 'scale'
    }
})


// 2. 设置实例，单个元素生效 （不推荐）
const text = new Text({ text: 'hello', editable: true })
defineKey(text, 'editConfig', {
    get() { return { moveable: false } }
})
