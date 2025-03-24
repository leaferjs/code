// #自定义元素 [继承 Group]
import { IGroupInputData, IGroupData } from '@leafer-ui/interface'
import { Leafer, registerUI, dataProcessor, Group, GroupData, dataType } from 'leafer-ui'


// 定义数据

export interface ICustomGroupInputData extends IGroupInputData {
    top?: number
}

export interface ICustomGroupData extends IGroupData {
    top?: number
}

export class CustomGroupData extends GroupData implements ICustomGroupData {

}

// 定义类

@registerUI()
class CustomGroup extends Group {

    public get __tag() { return 'CustomGroup' }

    @dataProcessor(CustomGroupData)
    declare public __: ICustomGroupData

    @dataType(0)
    declare public top: string // 增加自定义属性， 注意必须加上 declare 关键词

    constructor(data: ICustomGroupInputData) {
        super(data)
        // ...添加子元素
    }

}

const leafer = new Leafer({ view: window })
const customGroup = new CustomGroup({ top: 50, y: 100, draggable: true })

leafer.add(customGroup)