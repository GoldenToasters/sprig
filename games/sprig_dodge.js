/*
@title: sprig_dodging
@author: sam liu and lucas

Instructions:

Welcome to Sprig!!!

Hit "run" to execute the code and
start the game (you can also press shift+enter).

To complete each step you'll have to edit the code.

The code for this game starts below this comment.

This code has intentional errors.

Made based on this workshop https://workshops.hackclub.com/sprig_dodge/

The goal is to dodge the fireballs.

Click the "open help" to discover your toolkit.

--------
Step 1
--------

Add the player to the map

--------
Step 2
--------

Add controls for moving the player to right, use "d" as input

--------
Step 3
--------

Fix the code!
This cause this error:
Uncaught TypeError: Cannot read properties of undefined (reading 'length') on line ... in column 33. Open the browser console for more information.

Tip:
the getAll() and getFirst() functions are a bit strange, aren't they?

--------
Step 4
--------

Add all functions in the gameLoop interval

Tip: use spawnObstacle(), moveObstacles(), despawnObstacles(), and checkHit()

--------
END
--------

Modify the game to make it your own! Try:
 - adding two players
 - adding powerups
 - come up with your own mechanic!
*/
const player = "p";
const obstacle = "o";
const sky = "l";
const grassTop = "w";
const grass = "r";
const animal = "h";
const sun = "s";
const extinct = "e";
const gameover = map `
e`
setLegend(
  [obstacle, bitmap`
.......66.0.....
........6.......
0....66.6.6.....
0...66.66.66..0.
....666666.6.0..
...6609999066...
...69909909966..
..669990099996..
..600033330006..
..02220LL02220..
..02220LL02220..
...000LLLL0006..
0..693LLLL3996..
00.6093333906...
....60000006..0.
.....666666.....`],
  [player, bitmap`
................
...0000000......
..0DDDDDDD0.....
..020D20DD0.....
..0000DDDD00....
..0033DDDDD000..
...00000DD00D0..
...0D0.0DD0D0...
....0D00D0D0.00.
.....0D0D0D00D0.
......00DDDDD00.
.......0DDDDD0..
......00000000..
.....0DD0..0D0..
.....0D0...0DD0.
.....000...0000.`],
  [sky, bitmap `
1111111111111111
1111111111111111
1111111111111111
111L1111111L1111
1111LL1111LL1111
11111LLLLLL11111
1111111111111111
1111111111111111
1111111111111111
L111L11111111111
L1LL111111111111
1L1111111111L111
111111111111LLLL
11111111111111L1
1111111111111111
1111111111111111`],
  [grassTop, bitmap `
................
..CC............
..CC........C...
.CCCC......CFC.C
CCFFCCCC.CCFFFCF
FFFFFFFFCFFFFFFF
FFFFFFFFFFFFFFFF
FFFFFFFFFFCFFFFF
FFFFFFFFFFCFFFFF
FFFFFFFFCCFCCFFF
FFFFFFFFFFFFFFFF
FFFFCFFFFFFFFFFF
FFFFCCFFFFFFFFFF
FFFCFCCFFFFFFFFF
FFFFFFFFFFFFFFFF
FFFFFFFFFFFFFFFF`],
  [grass, bitmap `
FFFFFFFFFFFFFFFF
FFFFFFFFFFFFFFFF
FFCCFFFFFFFFFFFF
FCCCFFFFFFFFFFFF
FCFCCFFFFFFFFFFF
FFFFCFFFFFFFFFFF
FFFFFFFFFFFFFFFF
FFFFFFFFFFFFFFFF
FFFFFFFFCCFFFFFF
FFFFFFFCCFCCFFFF
FFFFFFCCFFFCCFFF
FFFFFFFFFFFFFFFF
FFFFFFFFFFFFFFFF
FFFFFFFFFFFFFFFF
FFFFFFFFFFFFFFFF
FFFFFFFFFFFFFFFF`],
  [animal, bitmap `
....000.........
...0LLL0........
...0LLLL00000...
.CC0L0LLLLLL00.C
.CFCL0LCCLLLLCCF
CCFCLLCFFCCCCCFF
FFFFCCFFFFFFFFFF
FFFFFFFFFFFCCFFF
FFFFFFFFFFCFCFFF
FFFFFFFFFFFFFFFF
FFFFCCFFFFFFFFFF
FFFCCFCFFFFFFFFF
FCCCFFCCFFFFFFFF
FFFFFFFCFFFFFFFF
FFFFFFFFFFFFFFFF
FFFFFFFFFFFFFFFF`],
  [sun, bitmap `
1LL1111111111111
L11L111111111111
1111111F11111111
111111111111F111
11F11FFFFF11111L
1111FFFFFFF11LL1
111FFFFFFFFF1111
111FFFFFFFFF1111
1F1FFF0FFF0F1F11
111FFFFLLLFF1111
1111FFLLLLLLL111
11111FL11111L111
11F1111111111111
1111111111111111
1111111111111111
1111111111111111`],
  [extinct, bitmap `
1111111111111111
1111111111112221
LL1L111111112022
1LLL111111112222
1110000011222211
110DDDD001222211
110DDD0301221111
110D0D0300111L11
110000DD0D011LLL
110D0DDDD0011111
110DDDDDDD001111
11C00D00DDDD001C
CCF0D0C0DD0DD0CC
FFF00FF00D000FFF
FFFFFFFF000FFFFF
FFFFFFFFFFFFFFFF`],
  
)


// Step 1 - Add player to map
setMap(map`
.........
.s.......
.........
.........
.........
.........
....p....
wwwwwwwhw
rrrrrrrrr`)
setBackground(sky)
// Create a variable that shows when the game is running
var gameRunning = true; 

// START - PLAYER MOVEMENT CONTROLS

onInput("a", () => {
  if (gameRunning) {
    getFirst(player).x -= 1;
  }
});
onInput("d", () => {
  if (gameRunning) {
    getFirst(player).x -= -1;
  }
});

// Step 2 - Add move right controls
// END - PLAYER MOVEMENT CONTROLS

// Put obstacle in a random position
function spawnObstacle() {
  let x = Math.floor(Math.random() * 8);
  let y = 0; 
  addSprite(x, y, obstacle);
}

// Make obstacles move
function moveObstacles() {
  let obstacles = getAll(obstacle);

  for (let i = 0; i < obstacles.length; i++) {
    obstacles[i].y += 1;
  }
}

// Make obstacles disappear
function despawnObstacles() {
  let obstacles = getAll(obstacle);

  for (let i = 0; i < obstacles.length; i++) {
   if (obstacles[i].y == height()-2) {
     obstacles[i].remove();
   }
  }
}

// See if the player was hit
function checkHit() {
  // Step 3 - Fix code
  let obstacles = getAll(obstacle);
  let p = getFirst(player);
  
  for (let i = 0; i < obstacles.length; i++) {
    if (obstacles[i].x == p.x && obstacles[i].y == p.y) {
      return true;
    }
  }

  return false;
}

var gameLoop = setInterval(() => {
  // Step 4 - Add all game functions

spawnObstacle()
  
moveObstacles()
  
despawnObstacles()
  
  if (checkHit()) {
    setMap(gameover);
    clearInterval(gameLoop);
    gameRunning = false;
    addText("Extinction", {
      x: 5,
      y: 2,
      color: color`3`
    });
  }

}, 1000);
