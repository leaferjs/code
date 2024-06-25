import { Leafer, Rect } from 'leafer-ui'
import anime from 'animejs'

const leafer = new Leafer({ view: window })

const rect = new Rect({ y: 100, cornerRadius: 50, fill: '#32cd79' })

leafer.add(rect)

const data = {
    x: 0,
    cornerRadius: 50,

    fillR: 0x32, // = #32cd79
    fillG: 0xcd,
    fillB: 0x79
}

anime({
    targets: data,

    x: 500,
    cornerRadius: 0,

    fillR: 0xff, // = #ffcd00 
    fillG: 0xcd,
    fillB: 0x00,

    loop: true, // 循环
    direction: 'alternate', // 循环往复
    easing: 'easeInOutQuad', // 动画类型
    update() {
        const { x, cornerRadius, fillR, fillG, fillB } = data
        rect.set({ x, cornerRadius, fill: toColor(fillR, fillG, fillB) })
    }
})

function toColor(r: number, g: number, b: number) {
    const num = (r << 16) | (g << 8) | b | 0
    return '#' + num.toString(16).padStart(6, '0')
}
