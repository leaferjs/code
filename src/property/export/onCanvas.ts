// #导出图片 [绘制水印]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/export' // 引入导出元素插件 // [!code hl] 

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 100, 100)
leafer.add(rect)

rect.export('test.png', {
    onCanvas(canvas) {  // 通过onCanvas钩子函数绘制水印 // [!code hl:9]
        const {
            context,  // CanvasRenderingContext2D，原生canvas上下文对象
            pixelWidth, // 实际像素宽度
            pixelHeight  // 实际像素高度
        } = canvas

        context.fillText('绘制水印', pixelWidth - 60, pixelHeight - 20)
    }
})