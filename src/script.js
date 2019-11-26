document.addEventListener('DOMContentLoaded', function() {
  window.onscroll = function() {
    if (window.pageYOffset > 25) {
      document.body.classList.add("sticky");
    } else {
      document.body.classList.remove("sticky");
    }
  };

  var c1 = document.getElementById("c1");
  var ctx1 = c1.getContext('2d');
  ctx1.beginPath();
  ctx1.moveTo(120, 20);
  ctx1.lineTo(20, 50);
  ctx1.lineTo(150, 120);
  ctx1.lineTo(120, 20);
  ctx1.strokeStyle = "magenta";
  ctx1.stroke();

  var c2 = document.getElementById('c2');
  var ctx2 = c2.getContext('2d');
  ctx2.beginPath();
  for(var i=0; i<5; i++) {
    ctx2.rect(10+i*30, 10+i*10, 50, 50);
  }
  ctx2.strokeStyle = 'magenta';
  ctx2.stroke();

  var c3 = document.getElementById("c3");
  var ctx3 = c3.getContext('2d');
  ctx3.beginPath();
  ctx3.strokeStyle = 'magenta';
  ctx3.arc(75, 75, 50, 0, 2*Math.PI, false);
  ctx3.moveTo(110, 75);
  ctx3.arc(75, 75, 35, 0, Math.PI, false);
  ctx3.moveTo(65, 65);
  ctx3.arc(60, 65, 5, 0, 2*Math.PI, false);
  ctx3.moveTo(95, 65);
  ctx3.arc(90, 65, 5, 0, 2*Math.PI, false);
  ctx3.stroke();

  var c4 = document.getElementById("c4");
  var ctx4 = c4.getContext('2d');
  ctx4.strokeStyle = 'blue';
  for(var i=0; i<4; i++) {
    ctx4.font = (10 + i*10) + "px forte";
    ctx4.strokeText("Jaeyoung's Multimedia", 10, 30+i*50);
  }
  ctx4.font = 'italic 50px forte';
  ctx4.strokeStyle = 'magenta';
  ctx4.lineWidth = 3;
  ctx4.textAlign = 'left';
  ctx4.strokeText("Jaeyoung's Multimedia", 50, 250);
  ctx4.fillStyle = 'green';
  ctx4.textAlign = 'right';
  ctx4.fillText("Jaeyoung's Multimedia", 690, 300);

  var c5 = document.getElementById("c5");
  var ctx5 = c5.getContext('2d');
  ctx5.beginPath();
  ctx5.moveTo(75, 40);
  ctx5.bezierCurveTo(75, 37, 70, 25, 50, 25);
  ctx5.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
  ctx5.bezierCurveTo(20, 80, 40, 102, 75, 120);
  ctx5.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
  ctx5.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
  ctx5.bezierCurveTo(85, 25, 75, 37, 75, 40);
  ctx5.fillStyle = 'red';
  ctx5.fill();

  var c6 = document.getElementById('c6');
  var ctx6 = c6.getContext('2d');
  var img6 = new Image();
  img6.onload = function() {
    ctx6.drawImage(img6, 0, 0, c6.width, c6.height);
  }
  img6.src = 'images/olaf.jpg';
});