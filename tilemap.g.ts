// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile11 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile12 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile13 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile14 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile15 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`21001800050505050505060303030b0b0b0b0b0b0b0b0b0b0b0b0b0303030606050505050505050505050603030307070a0a070707070707070a0a07070303030606050505050505050505060303030a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0303030606050501010505050506060202020a0a070a070a070a070a070a070a0a020202060605050101050505050606020202020a0a0a0a0a0a0a0a0a0a0a0a0a020202020606050505050505050506060202020606090909090909090909090906060202020606050505050505050506060202020604090808080808080808080904060202020606050505050105050506020202020604090808080808080808080904060202020206050505050105050506020202020604090808080808080808080904060202020206050505050505050506020202020604090808080a0a0a0808080904060202020206050505050505050506020202020204090909090a0a0a090909090402020202020605050505010105050602020202020404040404040404040404040402020202020605050505010105050602020202020404040404040404040404040402020202020605050505050505050602020202020204040404040404040404040202020202060505050505050505050606020202020202020206060606060202020202020206060505050505050505050505060602020202020202020202020202020202060606050505050505050505050505050602020202020202020202020202020202060505050505050505050505050505050606020202020202020202020202020206060505050505050505010101010505050505060202020202020202020202020605050505050101010505010105050505050505050505050505050505050505050505050505050101010505010105050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050105050505050505050505050505050505050505050505050505050101010501010105050501010505`, img`
......222222222222222222222......
.....22222222222222222222222.....
.....22222222222222222222222...22
....22.....22222222222.....22..22
....22.....22222222222.....22....
....22...22.222222222222...22....
....22...2..2222222222.2...22....
2...2....2..2222222222.2....2....
2...2....2..222222222..2....2....
....2....2.............2....2....
....2.......................2....
22..2.......................2....
22..2.......................2....
....2......................2.....
....22........22222.......22.....
......22................22.......
.......2................2........
.......22..............22........
2222.....2............2.....222..
22..........................222..
22...............................
.................................
.........................2.......
...................222.222...22..
`, [myTiles.transparency16,myTiles.tile9,myTiles.tile12,myTiles.tile13,myTiles.tile14,sprites.castle.tileGrass1,sprites.builtin.forestTiles5,sprites.swamp.swampTile9,sprites.builtin.brick,sprites.dungeon.floorDark4,sprites.builtin.forestTiles10,sprites.builtin.forestTiles12], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile5":
            case "tile11":return tile11;
            case "myTile6":
            case "tile12":return tile12;
            case "myTile7":
            case "tile13":return tile13;
            case "myTile8":
            case "tile14":return tile14;
            case "myTile9":
            case "tile15":return tile15;
            case "Spiral_0":
            case "tile5":return tile5;
            case "myTile4":
            case "tile9":return tile9;
            case "myTile10":
            case "tile3":return tile3;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
