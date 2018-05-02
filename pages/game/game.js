//game.js
const app = getApp()
var speed = 1
var speedX, speedY
var idX, idY
speedX = speedY = speed
Page({
  data:{
    offsetLeft:'50px',
    offsetRight:'0px',
    offsetTop:'50px'
  },
  clickLeftBtn: function () {
    clearInterval(idX);
    speedX = -speed;
    // idX = setInterval(function () {
      this.move('H');
    // }, 1)
  },
  clickRightBtn: function () {
    clearInterval(idX);
    speedX = speed;
    // idX = setInterval(function () {
      this.move('H');
    // }, 1)
  },
  clickUpBtn:function(){
    clearInterval(idY);
    speedY = -speed;
    // idY = setInterval(function () {
      this.move('V');
    // }, 1)
  },
  clickDownBtn:function () {
    clearInterval(idY);
    speedY = speed;
    // idY = setInterval(function () {
      this.move('V');
    // }, 1)
  },
  clickStopBtn:function () {
    clearInterval(idX);
    clearInterval(idY);
  },
  move:function (dir) {
    this.setData({
      offsetLeft:this.offsetLeft+1
    })
    // if (ballDiv.offsetLeft < 0) {
    //   ballDiv.style.left = 0;
    //   speedX *= -1;
    // }

    // if (ballDiv.offsetTop < 0) {
    //   ballDiv.style.top = 0;
    //   speedY *= -1;
    // }

    // if (ballDiv.offsetLeft > window.innerWidth - ballDiv.offsetWidth) {
    //   ballDiv.style.left = window.innerWidth - ballDiv.offsetWidth + 'px';
    //   speedX *= -1;
    // }
    // if (ballDiv.offsetTop > window.innerHeight - ballDiv.offsetHeight) {
    //   clearInterval(idX);
    //   clearInterval(idY);
    //   alert('GameOver');
    //   location.reload();
    // }

    // if (true === this.checkCollision(ballDiv, barDiv)) {
    //   ballDiv.style.top = barDiv.offsetTop - ballDiv.offsetHeight + 'px';
    //   speedY *= -1;
    // }

    // var bricks = document.getElementById('brick').getElementsByClassName('col');

    // for (var i = 0; i < bricks.length; i++) {
    //   if (true === this.checkCollision(ballDiv, bricks[i])) {
    //     bricks[i].style.display = 'none';

    //     if (ballDiv.offsetTop < parseInt(bricks[i].style.top)) {
    //       ballDiv.style.top = parseInt(bricks[i].style.top) - ballDiv.offsetHeight + 'px';
    //       // document.getElementsByTagName('audio')[0].play();
    //     } else {
    //       ballDiv.style.top = parseInt(bricks[i].style.top) + ballDiv.offsetHeight + 'px';
    //       // document.getElementsByTagName('audio')[0].play();
    //     }
    //     speedY *= -1;
    //   }
    // }
    // switch (dir) {
    //   case 'H':
    //     ballDiv.style.left = ballDiv.offsetLeft + speedX + 'px';
    //     break;
    //   case 'V':
    //     ballDiv.style.top = ballDiv.offsetTop + speedY + 'px';
    //     break;
    //   default:
    //     break;
    // }
  },
  checkCollision: function (obj1, obj2) {
    var center1 = {
      x: obj1.offsetLeft + obj1.offsetWidth / 2,
      y: obj1.offsetTop + obj1.offsetHeight / 2
    };

    var center2 = {
      x: obj2.offsetLeft + obj2.offsetWidth / 2,
      y: obj2.offsetTop + obj2.offsetHeight / 2
    };

    var offsetX = Math.abs(center2.x - center1.x);
    var offsetY = Math.abs(center2.y - center1.y);


    if ((offsetX < (obj1.offsetWidth + obj2.offsetWidth) / 2) &&
      (offsetY < (obj1.offsetHeight + obj2.offsetHeight) / 2)) {
      return true;
    }
  },
  moveBall:function(ele){
    var e = ele || window.event;
    // var initBall = document.getElementsByClassName('init')[0];
    barDiv.style.left = e.clientX - barDiv.offsetWidth / 2 + 'px';
    if (e.clientX < barDiv.offsetWidth / 2) {
      barDiv.style.left = 0;
    }
    if (e.clientX > window.innerWidth - barDiv.offsetWidth / 2) {
      barDiv.style.left = window.innerWidth - barDiv.offsetWidth + 'px';
    }
    this.setData({
      offsetLeft: barDiv.offsetLeft + (barDiv.offsetWidth - ballDiv.offsetWidth) / 2 + 'px',
      offsetTop: barDiv.offsetTop - ballDiv.offsetHeight + 'px'
    })
      // initBall.style.left = barDiv.offsetLeft + (barDiv.offsetWidth - ballDiv.offsetWidth) / 2 + 'px';
      // initBall.style.top = barDiv.offsetTop - ballDiv.offsetHeight + 'px';

  },
  onLoad:function(){
    for (var i = 2; i < 9; i++) {
      // divRow = document.createElement('div');

      for (var j = 1; j < 20; j++) {
        // divCol = document.createElement('div');

        // divCol.style.top = i * 30 + 'px';
        // divCol.style.left = j * 62 + 'px';
        // divCol.className = 'col';

        // divRow.appendChild(divCol);
      }
      // document.getElementById('brick').appendChild(divRow);
    }
  },
  clickWindow: function () {
    // upBtn.onclick();
    this.clickUpBtn()
    // leftBtn.onclick();
    this.clickLeftBtn()
    // document.getElementsByClassName('init')[0].className = '';
    clickWindow: 'null';
  }
})