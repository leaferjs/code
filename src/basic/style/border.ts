// #region create
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({ // [!code hl:9]
    x: 100,
    y: 100,
    width: 200,
    height: 200,
    fill: '#32cd79',
    stroke: 'black', // [!code hl:2]
    strokeWidth: 2,
    dashPattern: [6, 6] // 绘制虚线
})

leafer.add(rect)
// #endregion create

// #region change
rect.stroke = 'blue'
rect.strokeWidth = 4
// #endregion change

// #region set
rect.set({
    stroke: 'blue',
    strokeWidth: 4
})
// #endregion set


// #region reset
rect.reset() // 完全重置

rect.reset({ // 重置为新样式
    stroke: 'blue',
    strokeWidth: 4
})
// #endregion reset