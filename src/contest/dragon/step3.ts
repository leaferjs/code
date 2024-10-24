
import { App, Line, Rect, Platform, IRotationPointData } from 'leafer-ui'
import '@leafer-in/editor'
import '@leafer-in/motion-path'

import { points } from './points' // 之前采集的飞行路径坐标点


const app = new App({
    view: window,
    editor: {} // 会自动创建 editor实例、tree层、sky层
})

// 加载龙的飞行路径
const line = new Line({ motionPath: true, points }) // 增加 motionPath: true， 设为运动路径
app.tree.add(line)


// 绘制龙

/// 1. 头
const head = new Rect({ width: 30, height: 30, around: 'center', fill: 'black' })
app.tree.add(head)

// 2. 爪子
const claws = [
    new Rect({ width: 20, height: 40, around: 'bottom', fill: 'black' }),
    new Rect({ width: 20, height: 40, around: 'top', fill: 'gray' }),
    new Rect({ width: 20, height: 40, around: 'bottom', fill: 'black' }),
    new Rect({ width: 20, height: 40, around: 'top', fill: 'gray' })
]
app.tree.add(claws)

// 3. 身体，多个活动关节
const body: Rect[] = []
for (let i = 0; i < 20; i++) body.push(new Rect({ width: 20, height: 20, around: 'center', fill: 'rgb(50,205,121)' }))
app.tree.add(body)

// 4. 尾巴
const tail = new Rect({ width: 20, height: 20, around: 'center', fill: 'red' })
app.tree.add(tail)


// 飞行到指定位置
function flyTo(to: number): void {
    let point: IRotationPointData

    head.set(line.getMotionPoint(to)) // 获取运动路径上的点，然后 set({x, y, rotation})
    to -= 30

    body.forEach(item => {
        if (to >= 0) item.set(line.getMotionPoint(to))
        to -= 25
    })

    if (to >= 0) tail.set(line.getMotionPoint(to))

    // 爪子需要特殊处理一下
    const space = (body.length / 4) * 25
    to += space
    if (to >= 0) {
        point = line.getMotionPoint(to)
        claws[0].set(point)
        claws[1].set(point)
        claws[0].rotation -= 30
        claws[1].rotation += 30
    }

    to += space * 2
    if (to >= 0) {
        point = line.getMotionPoint(to)
        claws[2].set(point)
        claws[3].set(point)
        claws[2].rotation -= 30
        claws[3].rotation += 30
    }
}

//  沿路径飞行的数据
const total = line.getMotionTotal() // 运动路径的总长度
let to = 600 // 飞往的位置（距离起点）


// 开始循环飞行动画
function animate() {
    to += 5
    if (to > total) to = 0
    flyTo(to)

    Platform.requestRender(animate)
}


// 设置龙的初始状态
flyTo(to)


// 点击头部之后开始动画
head.on('tap', () => {
    head.fill = 'blue'
    animate()
})