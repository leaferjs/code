// #导出图片 [导出二进制数据]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/export' // 引入导出元素插件

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 100, 100)
leafer.add(rect)

rect.export('png', true).then(result => { // [!code hl:5]
    console.log(result.data)
})

// const result = await rect.export('png', { blob: true })