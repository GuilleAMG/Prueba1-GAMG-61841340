const { argv } = require('yargs');

let objeto = {
    "Multiplicando":"1",
    "Multiplicador":"2",
    "Producto":"Resultado",
    "Limite":"10"
}

/*
let yargs = require('yargs')
    .option('multiplicando',{alias:'m', type:'number'})
    .option('multiplicando',{alias:'m2', type:'number'})
    .option('producto', {alias:'p', type:'number'})
    .option('limite', {alias:'l', type:'number'})
    .check((argv,options)=>{
        if(argv.m > 0){
            return true
            switch(argv.m){
                case '1':
                    for(argv.m=1;i>0;i++){
                        i = argv.l;
                        argv.p = argv.m * argv.m2;
                        console.log(argv.p)
                    }
                    break
                case '2':
                    for(argv.m=2;i>0;i++){
                        i = argv.l;
                        argv.p = argv.m * argv.m2;
                        console.log(argv.p)
                    }
                    break
                case '3':
                    for(argv.m=3;i>0;i++){
                        i = argv.l;
                        argv.p = argv.m * argv.m2;
                        console.log(argv.p)
                    }
                    break
                case '4':
                    for(argv.m=4;i>0;i++){
                        i = argv.l;
                        argv.p = argv.m * argv.m2;
                        console.log(argv.p)
                    }
                    break
                case '5':
                    for(argv.m=5;i>0;i++){
                        i = argv.l;
                        argv.p = argv.m * argv.m2;
                        console.log(argv.p)
                    }
                    break
                case '6':
                    for(argv.m=6;i>0;i++){
                        i = argv.l;
                        argv.p = argv.m * argv.m2;
                        console.log(argv.p)
                    }
                    break
                case '7':
                    for(argv.m=7;i>0;i++){
                        i = argv.l;
                        argv.p = argv.m * argv.m2;
                        console.log(argv.p)
                    }
                    break
                case '8':
                    for(argv.m=8;i>0;i++){
                        i = argv.l;
                        argv.p = argv.m * argv.m2;
                        console.log(argv.p)
                    }
                    break
                case '9':
                    for(argv.m=9;i>0;i++){
                        i = argv.l;
                        argv.p = argv.m * argv.m2;
                        console.log(argv.p)
                    }
                    break
                case '10':
                    for(argv.m=10;i>0;i++){
                        i = argv.l;
                        argv.p = argv.m * argv.m2;
                        console.log(argv.p)
                    }
                    break
                default:
                    throw 'Numero fuera de los limites.'
                    break
            }
        }else if(isNaN(argv.v)){
            throw 'El valor deber ser numerico.'
        }
        else{
            throw 'El valor deber ser mayor a: 0 (Cero)'
        }
    })
*/

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

