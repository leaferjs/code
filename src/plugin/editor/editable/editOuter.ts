import { Text, defineKey } from 'leafer-ui'

// 1. 设置类，所有 Text 元素生效（推荐）
Text.setEditOuter('TextEditTool')

Text.setEditOuter(function (text: Text) {
    // 使用函数返回名称，可增加业务逻辑分流
    return text.get('width') ? 'EditTool' : 'TextEditTool'
})


// 2. 设置实例，单个元素生效 （不推荐）
const text = new Text({ text: 'hello', editable: true })
defineKey(text, 'editOuter', {
    get() { return 'TextEditTool' }
})
