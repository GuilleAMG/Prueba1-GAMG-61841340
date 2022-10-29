const http = require('http')
const router = require('./router.js')
require('dotenv').config()

const server = http.createServer(function(peticion, respuesta){
    console.log(peticion.url)
    switch(peticion.url){
        case '/':
            router.principal(peticion, respuesta);
            break
        case '/1':
            router.tabla1(peticion, respuesta);
            break
        case '/2':
            router.tabla2(peticion, respuesta);
            break
        case '/3':
            router.tabla3(peticion, respuesta);
            break
        case '/4':
            router.tabla4(peticion, respuesta);
            break
        case '/5':
            router.tabla5(peticion, respuesta);
            break
        case '/6':
            router.tabla6(peticion, respuesta);
            break
        case '/7':
            router.tabla7(peticion, respuesta);
            break
        case '/8':
            router.tabla8(peticion, respuesta);
            break
        case '/9':
            router.tabla9(peticion, respuesta);
            break
        case '/10':
            router.tabla10(peticion, respuesta);
            break
        case '/about':
            router.info(peticion, respuesta);
            break
        default:
            router.defo(peticion, respuesta);
            break
    }
    respuesta.end()
})

server.listen(process.env.PORT, process.env.HOST, function(){
    console.log(`Servidor disponible: http://${process.env.HOST}:${process.env.PORT}`)
});



