![](https://brand.corecode.school/logos/logo_core_wide.svg)

# Exercises w3d4 - Canvas

Sobre el código del Pacman creado en clase vamos a hacer un par de añadidos: `keyUp` y `keyDown` para que Pacman se desplace por el eje de las Y y pintaremos un laberinto como imagen de fondo del canvas.

## 1. Y axis on Pacman

En esta misma carpeta encontrarás el PACMAN realizado en clase. No obstante aún no es capaz de detectar las teclas `keyUp` y `keyDown`. Al pulsarlas, PACMAN debe dejar de desplazarse por el eje de las X y empezar a desplazarse por el eje de las Y de manera automática. No olvides revisar su `direction` para que la boca vaya siempre hacia el lado correcto del movimiento.

![pacman](https://media4.giphy.com/media/d9QiBcfzg64Io/200w.webp?cid=ecf05e47gog73fhphjofh6n2o114x42xh5opse59cbykfxde&rid=200w.webp&ct=g)

## 2. Pacman's map (Bonus)

Una vez completado el ejercicio anterior, añade un nuevo actor a tu juego: el mapa. Sigue la información definida en la variable `pacmanMap` de la `class Map {(...)}` y pinta un laberinto en el fondo de tu canvas.

Use la clase MAP definida en la carpeta del actor, recorra `let pacmanMap` y dibuje elementos separados con:

-   ctx.fillStyle();
-   ctx.fillRect();
-   ctx.strokeStyle();
-   ctx.strokeRect();
-   ctx.beginPath();
-   ctx.arc();
-   ctx.fill();

¡Recuerda! El laberinto se comportará como una imagen de fondo: por ahora, tus pacman no interactuarán con ella. Observa el resultado esperado en la siguiente imagen:

<img src="./img/map.gif" alt="map" width="300"/>

## 3. Entrega

Puedes completar los ejercicios en sus respectivos archivos. Después, haznos una pull request al repositorio de CORE.

## References

-   [Canvas API - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
-   [Canvas - W3Schools](https://www.w3schools.com/tags/ref_canvas.asp)
-   [String.prototype.split()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/split)
-   [CanvasRenderingContext2D.strokeRect()](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/strokeRect)
-   [CanvasRenderingContext2D.arc()](https://developer.mozilla.org/es/docs/Web/API/CanvasRenderingContext2D/arc)
