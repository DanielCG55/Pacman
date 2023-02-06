const converAngletoRad = (angle) => (angle * Math.PI) / 180;

let pacmanMap =
`WWWWWWWWWWWWWWWWWWWWWWWWWWWWW
W............WWW............W
W.WWWW.WWWWW.WWW.WWWWW.WWWW.W
W*WWWW.WWWWW.WWW.WWWWW.WWWW*W
W.WWWW.WWWWW.WWW.WWWWW.WWWW.W
W...........................W
W.WWWW.WW.WWWWWWWWW.WW.WWWW.W
W.WWWW.WW.WWWWWWWWW.WW.WWWW.W
W......WW....WWW....WW......W
WWWWWW.WWWWW.WWW.WWWWW.WWWWWW
WWWWWW.WWWWW.WWW.WWWWW.WWWWWW
WWWWWW.WW...........WW.WWWWWW
WWWWWW.WW.WWW---WWW.WW.WWWWWW
WWWWWW.WW.WoooooooW.WW.WWWWWW
..........WoooooooW..........
WWWWWW.WW.WoooooooW.WW.WWWWWW
WWWWWW.WW.WWWWWWWWW.WW.WWWWWW
WWWWWW.WW...........WW.WWWWWW
WWWWWW.WW.WWWWWWWWW.WW.WWWWWW
WWWWWW.WW.WWWWWWWWW.WW.WWWWWW
W............WWW............W
W.WWWW.WWWWW.WWW.WWWWW.WWWW.W
W*WWWW.WWWWW.WWW.WWWWW.WWWW*W
W...WW.................WW...W
WWW.WW.WW.WWWWWWWWW.WW.WW.WWW
WWW.WW.WW.WWWWWWWWW.WW.WW.WWW
W......WW....WWW....WW......W
W.WWWWWWWWWW.WWW.WWWWWWWWWW.W
W.WWWWWWWWWW.WWW.WWWWWWWWWW.W
W...........................W
WWWWWWWWWWWWWWWWWWWWWWWWWWWWW`
  .split("\n")
  .map((row) => row.split(""));
const totalRatio = Math.floor(1024/ pacmanMap.length);

class Map {
  draw(ctx) {
    for (let y = 0; y < pacmanMap.length; y++) {
      for (let x = 0; x < pacmanMap[y].length; x++) {
        let pos = pacmanMap[y][x];

        ctx.beginPath();
        if (pos === "W") {
          ctx.fillStyle = "#ffafcc";
          ctx.fillRect(x * totalRatio, y * totalRatio, totalRatio, totalRatio);
        }
        if (pos === '.') {
          ctx.fillStyle = '#bde0fe';
          ctx.arc(x * totalRatio + totalRatio / 2, y * totalRatio + totalRatio / 2, 5, 0, converAngletoRad(360));
          ctx.fill();
         }
         if (pos === '-') {
          ctx.fillStyle = '#fefae0';
          ctx.fillRect(x * totalRatio, y * totalRatio, totalRatio, totalRatio);
         }
         if (pos === 'o') {
          ctx.fillStyle = '#8ecae6';
          ctx
          .fillRect(x * totalRatio, y * totalRatio, totalRatio, totalRatio);
      }
      if (pos === '*') {
        ctx.fillStyle = '#e63946';
        ctx.arc(x * totalRatio + totalRatio / 2, y * totalRatio + totalRatio / 2, 5, 0, converAngletoRad(360));
        ctx.fill();
    }
        ctx.closePath();
      }
    }
  }
  update() {}
  keyboard_event(key) {}
}

