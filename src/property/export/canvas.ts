// #导出图片 [导出画布]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 100, 100)
leafer.add(rect)

rect.export('canvas').then(result => { // [!code hl:5]
    const leaferCanvas = result.data
    const canvas = leaferCanvas.view
    const context = leaferCanvas.context

    console.log('canvas', canvas) // HTMLCanvasElement
    console.log('2d context', context) // CanvasRenderingContext2D

    // 有和rect.export() 一样的导出函数，导出结果直接是一个data
    leaferCanvas.export('a.jpg', 0.9) // options只能设置图像相关的参数
})

// const result = await rect.export('canvas')