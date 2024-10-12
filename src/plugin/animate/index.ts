import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/animate'

const leafer = new Leafer({ view: window })


const rect = new Rect({
    x: 0,
    y: 50,
    width: 100,
    height: 100,
    fill: '#32cd79',
    draggable: true,
    animation: {
        keyframes: [{ style: { x: 100, scale: 0.5 } }, { style: { x: 200, scale: 1.5 }, duration: 2 }, { style: { x: 400, scale: 1 }, duration: 2 }],
        join: true,
        loop: true,
        delay: 2,
    }
})

leafer.add(rect)


const rect2 = new Rect({
    x: 0,
    y: 200,
    width: 100,
    height: 100,
    fill: '#32cd79',
    draggable: true,
    animation: {
        keyframes: [{ style: { x: 100, scale: 0.5 } }, { style: { x: 200, scale: 1.5 }, duration: 2 }, { style: { x: 400, scale: 1 }, delay: 1, duration: 2 }],
        loop: true,
        delay: 2,
    }
})

leafer.add(rect2)


const rect3 = new Rect({
    x: 0,
    y: 350,
    width: 100,
    height: 100,
    fill: '#32cd79',
    draggable: true,
    animation: {
        keyframes: [{ style: { x: 100, scale: 0.5 } }, { style: { x: 200, scale: 1.5 }, duration: 2 }, { style: { x: 400, scale: 1 }, delay: 1, duration: 2 }],
        join: true,
        duration: 6,
        swing: true, // 摇摆循环播放
        delay: 2,
    }
})

leafer.add(rect3)

const rect4 = new Rect({
    x: 0,
    y: 500,
    width: 100,
    height: 100,
    fill: '#32cd79',
    draggable: true,
    animation: {
        keyframes: [{ x: 100, scale: 0.5 }, { style: { x: 200, scale: 1.5 }, duration: 2 }, { x: 400, scale: 1 }],
        loopDelay: 1,
        swing: true, // 摇摆循环播放
        delay: 2,
    }
})

leafer.add(rect4)


const rect5 = new Rect({
    x: 0,
    y: 650,
    width: 100,
    height: 100,
    fill: '#32cd79',
    draggable: true,
    animation: {
        keyframes: [{ x: 400 }],
        loopDelay: 1,
        swing: true, // 摇摆循环播放
        delay: 2,
    }
})

leafer.add(rect5)
