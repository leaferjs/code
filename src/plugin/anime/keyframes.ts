import { Leafer, Rect } from 'leafer-ui'
import anime from 'animejs'

const leafer = new Leafer({ view: window })

const rect = new Rect({ y: 100, cornerRadius: 50, fill: '#32cd79', around: 'center' })

leafer.add(rect)

const data = {
    x: 50,
    scaleX: 1,
    rotation: 0,
    cornerRadius: 50,

    fillR: 0x32, // = #32cd79
    fillG: 0xcd,
    fillB: 0x79,
}

anime({
    targets: data,

    keyframes: [
        {
            x: 150,
            scaleX: 2,

            fillR: 0xff, // = #ffcd00 
            fillG: 0xcd,
            fillB: 0x00,

            duration: 500 // 500毫秒内执行完此关键帧
        },
        {
            x: 50,
            scaleX: 1,

            fillR: 0xff, // = #ffc000 
            fillG: 0xc0,
            fillB: 0x00,

            duration: 200
        },
        {
            x: 500,
            cornerRadius: 0,

            fillR: 0x32, // = #32cd79
            fillG: 0xcd,
            fillB: 0x79,

            easing: 'easeOutBounce',
            delay: 100 // 延时100毫秒再执行此关键帧
        },
        {
            x: 50,
            rotation: -720,
            cornerRadius: 50,
        }
    ],

    duration: 3000,
    loop: true, // 循环
    easing: 'easeInOutQuad', // 动画类型
    update() {
        const { x, scaleX, rotation, cornerRadius, fillR, fillG, fillB } = data
        rect.set({ x, scaleX, rotation, cornerRadius, fill: toColor(fillR, fillG, fillB) })
    }
})

function toColor(r: number, g: number, b: number) {
    const num = (r << 16) | (g << 8) | b | 0
    return '#' + num.toString(16).padStart(6, '0')
}
