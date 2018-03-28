(() => {
  //this is a fat arrow function
console.log('Starship Trooper Game');
	var canvas = document.querySelector("canvas");
    var ctx = canvas.getContext("2d");
    var img = document.querySelector("#warrior_bug");
    var gun = document.querySelector(".gun");
    var img2 = document.querySelectorAll(".gun");
    var startPoint = 10;
    var laser = document.querySelector("#laser");
    var laserStart = 703;

function Draw() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
   	ctx.drawImage(img, startPoint, 200, 130, 70);
   	//img2.forEach((gun) => {ctx.drawImage(gun 470, 200, 130, 70)});
	ctx.drawImage (gun, 850, 200, 130, 70);
	 startPoint+=4;
	   if (startPoint > canvas.width) {startPoint = 0}
	   window.requestAnimationFrame(Draw);
	ctx.drawImage (laser, laserStart, 225, 150, 10);
		laserStart+=5;
		if (laserStart > canvas.width) {laserStart = 0}
		window.requestAnimationFrame(Draw);
};

window.requestAnimationFrame(Draw);

})();


