(() => {
  //this is a fat arrow function
console.log('Starship Trooper Game');
})();

window.onload = function() {
    var canvas = document.querySelector("canvas");
    var ctx = canvas.getContext("2d");
    var img = document.querySelector("#warrior_bug");
   ctx.drawImage(img, 10, 10);
};

window.onload = function() {
    var canvas = document.querySelector("canvas");
    var ctx = canvas.getContext("2d");
    var img = document.querySelector(".gun");
   ctx.drawImage(img, 10, 10);
};

