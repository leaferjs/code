import { IRectInputData, IRectData } from '@leafer-ui/interface'
import { Leafer, registerUI, dataProcessor, Rect, RectData, dataType } from 'leafer-ui'


// 定义数据

export interface ICustomRectInputData extends IRectInputData {
    top?: number
}

export interface ICustomRectData extends IRectData {
    top?: number
}

export class CustomRectData extends RectData implements ICustomRectData {

}

// 定义类

@registerUI()
class CustomRect extends Rect {

    public get __tag() { return 'CustomRect' }

    @dataProcessor(CustomRectData)
    declare public __: ICustomRectData

    @dataType(0)
    declare public top: string // 增加自定义属性， 注意必须加上 declare 关键词

    constructor(data: ICustomRectInputData) {
        super(data)
        // ...
    }

}

const leafer = new Leafer({ view: window })
const customRect = new CustomRect({ top: 50, y: 100, width: 200, height: 50, fill: 'blue', draggable: true })

leafer.add(customRect)