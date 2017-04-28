//import array that dictates what tiles are needed
	//the array is an array of X by Y columns and rows representing the level in the form of digits
//map the tile source image to a sequence of digits
//display whatever tiles are represented by the level array onscreen
	

var map = {
  cols: 8,
  rows: 8,
  tsize: 32,
  tiles: [
    1, 3, 3, 3, 1, 1, 3, 1,
    1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 2, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 2, 1, 1, 1, 1,
    1, 1, 1, 1, 2, 1, 1, 1,
    1, 1, 1, 1, 2, 1, 1, 1,
    1, 1, 1, 0, 0, 1, 1, 1
  ],
  getTile: function(col, row) {
    return this.tiles[row * map.cols + col]
  }
};

// Game.load = function () {
    // return [
        // Loader.loadImage('tileset', '../assets/tileset.png')
    // ];
// };

// Game.init = function () {
    // this.tileMap = Loader.getImage('tileset');
// };

// Game.update = function (delta) {
// };

displayMap = function () {
    for (var c = 0; c < map.cols; c++) {
        for (var r = 0; r < map.rows; r++) {
            var tile = map.getTile(c, r);
            if (tile !== 0) { // 0 => empty tile
                this.ctx.drawImage(
                    this.tileMap, // image
                    (tile - 1) * map.tsize, // source x
                    0, // source y
                    map.tsize, // source width
                    map.tsize, // source height
                    c * map.tsize,  // target x
                    r * map.tsize, // target y
                    map.tsize, // target width
                    map.tsize // target height
                );
            }
        }
    }
};

displayMap();