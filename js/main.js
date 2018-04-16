(() => {
  //this is a fat arrow function
console.log('Starship Trooper Game');
	var canvas = document.querySelector('canvas');
    var ctx = canvas.getContext('2d');
    var bug = document.querySelector('#warrior_bug');
    var guns =  [1, 2, 3];
    //grab the gun images
    var gun = document.querySelector('.gun');

    var laser = document.querySelector('#laser');
    var laserStart = 703;
    var score = 0;
    var playerLives = [1, 2, 3];
    var playerImg = document.querySelector('#livesImg');
    //var resetScreen = document.querySelector('nextLevel');

    var bugPlayer = { x: 90, y: 290, width: 130, height: 70, speed: 10, lives: 3};

function Draw() {
	ctx.clearRect(0, 0, canvas.width, canvas.height); //erasing the canvas

  //drawing the score first
  ctx.fillStyle = 'rgb(101,52,141)';
  ctx.font = '25px Orbitron';
  ctx.fillText(`Score: ${score}`, 450, 40);

  //life icons
  playerLives.forEach((life, index) => {
    ctx.drawImage(playerImg, 10 + (index*36), 10, 30, 30);
  });

  // draw guns
  guns.forEach((currentGun, index) => {
    ctx.drawImage(gun, 850, 70 + (index*170), 130, 70);
  });

  //draw Bug
  ctx.drawImage(bug, bugPlayer.x, bugPlayer.y, bugPlayer.width, bugPlayer.height);

  //draw Laser
	ctx.drawImage (laser, laserStart, 225, 150, 10);
		laserStart-=5;
		if (laserStart < canvas.width) {laserStart = 0}

		window.requestAnimationFrame(Draw);
};

function moveBug(e) {
    e.preventDefault();
    //debugger;
    switch (e.keyCode) {
      //left arrow key
      case 37: 
      console.log('move bug to the left');
      if (bugPlayer.x > 0) {
        bugPlayer.x -=15;
      }
      break;

      //right
        //debugger;
      case 39: 
      console.log('move bug to the right');
      if (bugPlayer.x > canvas.width) {
        bugPlayer.x = 0;
      } else {
        bugPlayer.x +=15;
      }     
      break;

      //up
        //debugger;
      case 38: 
      console.log('move bug up');
      if (bugPlayer.y > 0) {
        bugPlayer.y -=15;
      }
      break;

      //down
        //debugger;
      case 40: 
      console.log('move bug down');
      if (bugPlayer.y > canvas.height) {
        bugPlayer.y = 0; 
        } else {
           bugPlayer.y +=15;
        }
      break;
      }
  }

//function levelUpGame {
  //passes level 1 
//}

  

window.requestAnimationFrame(Draw);

//move bug with keys
window.addEventListener ('keydown', moveBug);

})();


