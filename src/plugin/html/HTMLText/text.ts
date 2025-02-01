// #HTML 文本
import { Leafer } from 'leafer-ui'
import { HTMLText } from '@leafer-in/html'

const leafer = new Leafer({ view: window })

const text = new HTMLText({
    text: '<i style="color: red; font-weight: bold;">Welcome</i> to <i style="color: rgb(50,205,121); font-size: 30px">LeaferJS</i>',
})

leafer.add(text)