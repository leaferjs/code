import { Leafer } from 'leafer-ui'

const leafer = new Leafer({ // [!code hl:4]
    view: window,
    start: false
})

// async create leafs ...

leafer.start() 