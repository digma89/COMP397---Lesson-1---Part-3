/// <reference path="typings/easeljs/easeljs.d.ts" />


var stage: createjs.Stage;
var canvas = document.getElementById("canvas");


function init() {
    stage = new createjs.Stage(canvas);
    createjs.Ticker.setFPS(60);
    createjs.Ticker.on("tick", gameLoop);

    main();
}

function gameLoop() {

    stage.update();
}

function main() {
    console.log("Game is running");

    var helloText: createjs.Text = new createjs.Text("Hello world!", "40px Consolas", "#000000");

    helloText.x = 30;
    helloText.y = 200;

    stage.addChild(helloText);
}

/*
//anonymous function 
var init = function () {
}
*/