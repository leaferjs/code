import { Leafer } from 'leafer-ui'

const leafer = new Leafer({
    view: window,
    start: false // [!code hl]
})

// async create leafs ...

leafer.start() 