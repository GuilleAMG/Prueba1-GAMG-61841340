let objeto = {
    "multiplicador":"1",
    "multiplicando":"1",
    "producto":"1"
}

function principal(req, res){
    res.writeHead(200,{'Content-Type':'text/plain'})
    res.write('Pagina de Inicio. \n Bienvenido a mi prueba1, modifica el enlace para ver las tablas de multiplicar. \n Utiliza / seguida del numero de tabla que deseas ver.');
}

function tabla1(req, res){
    res.writeHead(200,{'Content-Type':'application/json'})
    res.write(JSON.stringify(objeto));
}

function tabla2(req, res){
    res.writeHead(200,{'Content-Type':'application/json'})
    res.write(JSON.stringify(objeto));
}

function tabla3(req, res){
    res.writeHead(200,{'Content-Type':'application/json'})
    res.write(JSON.stringify(objeto));
}

function tabla4(req, res){
    res.writeHead(200,{'Content-Type':'application/json'})
    res.write(JSON.stringify(objeto));
}

function tabla5(req, res){
    res.writeHead(200,{'Content-Type':'application/json'})
    res.write(JSON.stringify(objeto));
}

function tabla6(req, res){
    res.writeHead(200,{'Content-Type':'application/json'})
    res.write(JSON.stringify(objeto));
}

function tabla7(req, res){
    res.writeHead(200,{'Content-Type':'application/json'})
    res.write(JSON.stringify(objeto));
}

function tabla8(req, res){
    res.writeHead(200,{'Content-Type':'application/json'})
    res.write(JSON.stringify(objeto));
}

function tabla9(req, res){
    res.writeHead(200,{'Content-Type':'application/json'})
    res.write(JSON.stringify(objeto));
}

function tabla10(req, res){
    res.writeHead(200,{'Content-Type':'application/json'})
    res.write(JSON.stringify(objeto));
}

function info(req, res){
    res.writeHead(200,{'Content-Type':'text/plain'})
    res.write('Sitio desarrollado por GAMG.');
}

function defo(req, res){
    res.writeHead(404,{'Content-Type':'text/plain'})
    res.write('Pagina no disponible.');
}

module.exports={
    principal,
    tabla1,
    tabla2,
    tabla3,
    tabla4,
    tabla5,
    tabla6,
    tabla7,
    tabla8,
    tabla9,
    tabla10,
    info,
    defo
}

/*const yargs = require('yargs')
    .option('saludo',{type:'string'})
    .option('valor',{alias:'v', type:'number'})
    .check((argv,options)=>{
        if(argv.v > 0){
            return true
        }else if(isNaN(argv.v)){
            throw 'El valor deber ser numerico.'
        }
        else{
            throw 'El valor deber ser mayor a: 0 (Cero)'
        }
    })

console.log(yargs.argv)*/