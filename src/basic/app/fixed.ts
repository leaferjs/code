import { Leafer } from 'leafer-ui'

new Leafer({
    view: 'id', // 支持 window 、div、canvas 标签对象， 可使用id字符串(不用加 # 号)
    width: 600, // 不能设置为 0， 否则会变成自动布局
    height: 600
})