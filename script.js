var seconds = 0;
var timerId;
var pauseSecond;

function plusSecond() {
	seconds++;
  document.getElementById("timer").innerHTML = "Time elapsed: "+ seconds +"s";
}

function updateTime() {
	timerId = setInterval(plusSecond,1000);
  document.getElementById("start").disabled = true;
}

function stopTime() {
  clearInterval(timerId);
  document.getElementById("timer").innerHTML = "Stop Watch"; 
  document.getElementById("start").disabled = false;
  seconds = 0;
}

function pauseTime() {
  console.log("pause implemented");
  var pauseSecond = seconds;
  clearInterval(timerId);
  document.getElementById("timer").innerHTML = "Time elapsed: "+ pauseSecond +"s";
  document.getElementById("start").disabled = false;
}
