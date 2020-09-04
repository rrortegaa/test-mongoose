const mongoose = require ('mongoose')
const connectionUrl = 'mongodb+srv://rrortegaa:stupydoo0402@cluster-5a-gen-etti3.mongodb.net/Kodemia?retryWrites=true&w=majority'            
mongoose.connect(connectionUrl, {useNewUrlParser: true, useUnifiedTopology: true })


const Koder = mongoose.model('Koder', {
    name: String,
    age: Number,
    generation: Number
})

Koder

const newKoder = new Koder ({ name:'Jos', age:26, generation: 5 })
//con el operador new estamos creando un objeto pero no se esta guardando en la DB
newKoder.save() // 
    .then(koder => {
        console.log('koder: ', koder)
    })

Koder.find()
    .then((kodersList) => {
        console.log('koderList: ',kodersList)
    })

Koder.find()
    .then((kodersList) => {
        console.log('koderList: ',kodersList)
        console.log('kodersList[0].name: ', kodersList[0].name)
    })

// usando deconstrucción    
Koder.find()
    .then((kodersList) => {
        //const [primerKoder, segundoKoder, tercerKoder, cuartoKoder ] = kodersList // Es posicional
        const [ primerKoder, segundoKoder, tercerKoder] = kodersList
        console.log('Name tercerKoder: ', tercerKoder.name)
    })