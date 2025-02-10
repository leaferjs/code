// #修改样式 [标准修改]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({
    x: 100,
    y: 100,
    width: 100,
    height: 100,
    fill: '#32cd79',
    stroke: 'black',
    strokeWidth: 2,
    dashPattern: [6, 6] // 绘制虚线
})

leafer.add(rect)

// #region main
// 标准修改
rect.stroke = 'blue'
rect.strokeWidth = 4
// #endregion main