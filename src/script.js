window.onload = () => {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    // Pintamos un cuadrado
    // ctx.fillStyle = 'green';
    // ctx.fillRect(10, 10, 100, 100);

    // Mapa del juego
   

    // Pintamos Pacman
    let actors = [
         new Map(),
        new Pacman({ x: 12, y: 100 }, "yellow", 15),
        // new Pacman({ x: 12, y: 200 }, "red", 15),
        // new Pacman({ x: 12, y: 300 }, "blue", 15),
        // new Pacman({ x: 12, y: 400 }, "green", 15),
        
        
    ];
    let lastFrame = 0;

    
    const render = (time) => {
        
        let delta = (time - lastFrame) / 1000;

      
        lastFrame = time;

       
        actors.forEach((actor) => {
            actor.update(delta);
        });

 
        ctx.clearRect(0, 0, canvas.width, canvas.height);       
        actors.forEach((actor) => {
            actor.draw(ctx, delta);
        });    
        window.requestAnimationFrame(render);
    };
window.requestAnimationFrame(render);
   
    document.body.addEventListener("keydown", (e) => {
        // console.log(e.key);
        actors.forEach(actor => { actor.keyboard_event(e.key) });
    })
}

