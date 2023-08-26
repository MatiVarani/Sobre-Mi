# Piedra, Papel o Tijera :rock: :page_with_curl: :scissors: 

El obejtivo del proyecto es la programacion del juego Piedra, Papel o Tijera en una Pagina Web con componentes dinamicos. 
En este Sitio Web se podra seleccionar las cantidad de partidas a jugar en contra de la computadora.
Para este desarrollo web se utilizó HTML, CCS3 y JavaScript.

### Pre-requisitos 📋

_Para ejecutar este proyecto solo necesitas un navegador instalado en tu equipo._

## PARTE 1: Estructura del Proyecto

* `index.html` Archivo [HMTL] donde se estructura la Página Web del proyecto y sus contenidos.

* `styles.css` Archivo [CSS] donde se aplican todos los estilos generales y particulares de la Pagina Web.

* `script.js` Archivo [JavaScript] utilizado para añadir todas las caracteristicas interactivas o dinámicas de la Pagina Web.

## PARTE 2: Obtención del nombre del jugador

   Para obtener el nombre del jugador se utiliza una funcion JavaScript.

   * `obtenerJugadaComputadora()` : Esta funcion ejecuta un prompt para que el jugador pueda ingresar su nombre. Comprueba que el nombre no sean espacios vacios y esta vinculada mediante un evento de tipo *onclick* con el *boton* ingresar nombre y la eleccion del jugador.

## PARTE 3: Selección de la opción del jugador y del oponente (PC)

   * Para la eleccion del jugador se establecen tres *input* de tipo imagen, vinculadas mediante a un evento *onclick* ejecutando una serie de funciones para cada eleccion.
   
   * `obtenerJugadaComputadora()`: Mediante esta funcion en el codigo JavaScript la computadora obtiene un numero *random* entre de 0, 1 o 2 del tipo entero. Cada uno de éstos representa una jugada (Piedra, Papel o Tijera) posible para la computadora, la cual, es mostrada explícita y graficamente en la pagina web.

## PARTE 4: Determinación del ganador y actualización del marcador

   * Cuando el jugador selecciona su jugada y la computadora obtiene la suya aleatoriamente segun la parte 3, se ejecuta una funcion para obtener al ganador de la partida. 

   * `determinarGanador(jugadaComputadoraN,jugadaUsuarioN)`: Esta funcion determina el ganador segun la eleccion del jugador y la jugada de la computadora, que se le pasan por parametros a la funcion.
   Una vez determinado el ganador de la partida, la funcion actualiza el marcador correspondiente y muestra el resultado de la partida en la pagina web.

## PARTE 5: Control del juego

   La cantidad de partidas a jugar es determinada mediante un selector que permite escojer entre 1 y 10 partidas. 
   
   * `partidas()`: Una vez seleccionado este parametro en el sitio web la funcion JavaScript toma este valor.

   * `ultimaJugada()`: Por cada una de las jugadas del usuario se disminuye el contador verificando a traves de esta funcion que si el contador llega a cero indica que es la ultima partida y ejecuta la funcion `ObtResultado()`.

## PARTE 6: Anunciar al ganador y reiniciar el juego

   * Por cada eleccion del usuario el codigo ejecuta la funcion `ganadorParcial()` la que verifica si alguno de los jugadores tuvo más jugadas ganadas que la mitad de partidas seleccionadas anteriormente. Determinando así el ganador antes de jugar la totalidad de partidas.

   * `ObtResultado()`: Funcion ejecutada por las dos ultimas (`ultimaJugada()` y `ganadorParcial()`). La misma verifica las victorias acumuladas por cada uno de los jugadores y muestra en la pagina web el resultado final del juego.

## PARTE 7: Mejoras y personalización

   Con el sitio web y sus caracteristicas interactivas en funcionamiento se aplicaron los estilos al mismo mediante CSS para hacerlo mas atractivo con colores, imagenes y transiciones sobre los elementos de la página. 

## PARTE 8: Comentarios explicativos y optimización del código

   Cuando el proyecto se encontró completamente funcional al juego, se agregaron los comentarios correspondiente en cada uno de los archivos o codigos desarrollados para explicar cada una de las funciones o acciones de las partes. 

## PARTE 9: Prueba y depuración

   + Se prueba el funcionamiento de todo el código, mediante diferentes opciones disponibles y se comparte con colegas y amigos para que lo ejecuten y puedan correrlo. 
   
   + Ayudando a la deteccion de errores y depuracion para asegurarse de que el codigo funciona correctamente. Se corrige y ajusta los errores detectados. 

## PARTE 10: Documentación y entrega

   + Se agrega este Readme.md que documenta el codigo desarrollado para este proyecto y se cargan todos los archivos al repositorio de GitHub.

## Construido con 🛠️

* [HTML] - Creacion del sitio Web.
* [CSS3] - Apariencia del sitio Web.
* [JavaScript] - Ejecuta todas las funciones de las operaciones y el sitio Web.

## Autores ✒️

* **Varani Matias** - [GitHub] (https://github.com/MatiVarani)
