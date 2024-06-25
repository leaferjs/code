import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 100, 100)
leafer.add(rect)

rect.export('jpg', 0.5).then(result => { // [!code hl:5]
    console.log(result.data)
})

// const result = await rect.export('jpg', {quality: 0.5})