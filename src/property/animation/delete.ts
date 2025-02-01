// #动画样式 [删除文本动画]
import { Leafer, Text } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件

const leafer = new Leafer({ view: window })

const text = new Text({
    fill: 'rgb(50,205,121)',
    text: 'Welcome to LeaferJS',
    animation: {  // [!code hl:4]
        style: { text: '' },
        duration: 2,
    }
})

leafer.add(text)