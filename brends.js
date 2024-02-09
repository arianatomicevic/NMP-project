const brends = ["ArmaniPrive", "Versace", "GucciHome", "Hermes"];

generateSelect = (array, elementId, selectClasses, optionClasses) => {
  var myParent = document.getElementById(elementId);

  var selectList = document.createElement("select");

  if (selectClasses.length > 0) {
    selectClasses.forEach((x) => {
      selectList.classList.add(x);
    });
  }

  myParent.appendChild(selectList);

  array.map((x) => {
    var option = document.createElement("option");

    if (optionClasses.length > 0) {
      optionClasses.forEach((x) => {
        option.classList.add(x);
      });
    }

    option.value = x;
    option.text = x;
    selectList.appendChild(option);
  });
};

var video = document.getElementById("designvideo");
var btn = document.getElementById("myBtn");
var playPause = () => (video.paused ? play() : pause());
var play = function () {
  video.play();
  btn.innerHTML = "Pause";
};
var pause = function () {
  video.pause();
  btn.innerHTML = "Play";
};

function showTime() {
  var today = new Date();
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  var time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = document.getElementById("date");
  dateTime.innerHTML = "Date: " + date + " " + time;
}
window.setTimeout(showTime, 50);
