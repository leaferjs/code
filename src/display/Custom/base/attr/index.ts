// #自定义元素 [添加属性]
import { Leafer, Rect, RectData, registerUI, dataProcessor, boundsType } from 'leafer-ui'
import { IRectInputData, IRectData } from '@leafer-ui/interface'


// 1. 在数据接口中添加属性  // [!code hl:9]

export interface ICustomInputData extends IRectInputData {
    left?: number | string // 输入数据，必须为可选
}

export interface ICustomData extends IRectData {
    left?: number // 计算数据，必须为可选
}

export class CustomData extends RectData implements ICustomData {

}

@registerUI()
export class Custom extends Rect {

    public get __tag() { return 'Custom' }

    @dataProcessor(CustomData)
    declare public __: ICustomData

    // 2. 添加属性，并指定属性处理器  // [!code hl:3]
    @boundsType(0)
    declare public left: number | string

    constructor(data: ICustomInputData) {
        super(data)
        // ...
    }

}


const leafer = new Leafer({ view: window })
const custom = new Custom({ left: 50, width: 100, height: 200, fill: 'blue', draggable: true })

leafer.add(custom)

console.log(custom.toJSON()) // 导出json {tag: 'Custom',left: 50, width: 200, height: 50, fill: 'blue', draggable: true }