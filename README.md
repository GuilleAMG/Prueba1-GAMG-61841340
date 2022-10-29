# Prueba 1 de Semana 3 en Programacion 4

## Tablas de multiplicar

### Guillermo Munguia - 61841340

Crear una aplicación en Node.js que permita mostrar al usuario las tablas de multiplicar por medio de una página web.
El multiplicador es el factor que indica las veces que el que se ha de sumar el otro factor llamado multiplicando.

a * b = c
El factor b es el multiplicador.
El factor a es el multiplicando.
El producto (c) es el resultado de la multiplicación.
Tabla Multiplicar

El usuario podrá indicar por medio de la URL que tabla desea ver, por ejemplo http://localhost/5 esta URL indica que desea visualizar la tabla del 5. En la pagina web debe mostrarse el resultado en tres posibles formatos(texto plano, JSON o HTML).
La selección del formato se indicará como bandera al momento de correr el comando ejemplo node app.js --formato=json

La pagina web mostrara en formato json el resultado:

[
  {
    “Multiplicando”:5,
    “Multiplicador”:1,
    “Producto”:5
  },
  {
  “Multiplicando”:5,
  “Multiplicador”:2,
  “Producto”:10
  }….
]

Se debe enviar un header HTTP en la respuesta GET que el usuario haga con el código 200 y el content-type debe ser de acuerdo al formato que se indique por comando.
Adicional debe enviar en el mismo comando el limite del multiplicador, si queremos mostrar la tabla del 1 al 10, enviamos la bandera --limite=10
La aplicacion debe contener todos los archivos partes del proyecto que son:

package.json
README.md
.gitignore - Se debe indicar en el gitignore que se excluya la carpeta node_module

Para entregar la prueba debe compartir un link publico de su repositorio, el cual debe contener 5 commit como mínimo, les recomiendo realizar varias etapas de su código por ejemplo: commit inicial, un commit cuando tenga el http, otro cuando tengan configurado yargs, etc… hasta llegar al commit 5