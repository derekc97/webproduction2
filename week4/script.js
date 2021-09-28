document.title = "My Mediocre Media Player";

var darkMode = "yes";

function showMusic() {
  var musicVid = document.getElementById("musicVideo");
  var ambienceVid = document.getElementById("ambienceVideo");
  var lofiVid = document.getElementById("lofiVideo");
  if (musicVid.style.display !== "block") {
    musicVid.style.display = "block";
  } else {
    musicVid.style.display = "none";
  }

  if (ambienceVid.style.display = "block") {
    ambienceVid.style.display = "none";
  } else {
    ambienceVid.style.display = "block";
  }

  if (lofiVid.style.display = "block") {
    lofiVid.style.display = "none";
  } else {
    lofiVid.style.display = "block";
  }
}

function showAmbience() {
  var musicVid = document.getElementById("musicVideo");
  var ambienceVid = document.getElementById("ambienceVideo");
  var lofiVid = document.getElementById("lofiVideo");
  if (ambienceVid.style.display !== "block") {
    ambienceVid.style.display = "block";
  } else {
    ambienceVid.style.display = "none";
  }

  if (musicVid.style.display = "block") {
    musicVid.style.display = "none";
  } else {
    musicVid.style.display = "block";
  }

  if (lofiVid.style.display = "block") {
    lofiVid.style.display = "none";
  } else {
    lofiVid.style.display = "block";
  }
}

function showLofi() {
  var musicVid = document.getElementById("musicVideo");
  var ambienceVid = document.getElementById("ambienceVideo");
  var lofiVid = document.getElementById("lofiVideo");
  if (lofiVid.style.display !== "block") {
    lofiVid.style.display = "block";
  } else {
    lofiVid.style.display = "none";
  }

  if (musicVid.style.display = "block") {
    musicVid.style.display = "none";
  } else {
    musicVid.style.display = "block";
  }

  if (ambienceVid.style.display = "block") {
    ambienceVid.style.display = "none";
  } else {
    ambienceVid.style.display = "block";
  }
}

function lightMode() {
    if (darkMode == "yes") {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      darkMode = "no";
      document.getElementById("light").innerHTML = "dark mode";
    } else if (darkMode) {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      darkMode = "yes";
      document.getElementById("light").innerHTML = "light mode";
    }
}
