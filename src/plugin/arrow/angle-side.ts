// #箭头样式 [单边角度箭头]
import { Leafer } from 'leafer-ui'
import { Arrow } from '@leafer-in/arrow' // 导入箭头插件 // [!code hl]

const leafer = new Leafer({ view: window })

const arrow = new Arrow({
    y: 50,
    endArrow: 'angle-side',  // [!code hl:1]
    strokeWidth: 5,
    stroke: '#32cd79'
})

leafer.add(arrow)