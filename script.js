checks = 0;
checkImg = "✔";
checkedBoxes = [0,0,0];
step = 0;

function checkProgress() {
  if (step != 1) { //reset if not on checking part
    document.getElementsByClassName("next")[0].style.backgroundColor = "#0B93F4";
    document.getElementsByClassName("next")[0].style.color = "black";
    return;
  }
  if (checks == 0) {
    document.getElementsByClassName("bar")[0].style.width = "1%";
    document.getElementsByClassName("next")[0].style.backgroundColor = "#D1EEFF";
    document.getElementsByClassName("next")[0].style.color = "white";
  } else if (checks == 1) {
    document.getElementsByClassName("bar")[0].style.width = "33%";
    document.getElementsByClassName("next")[0].style.backgroundColor = "#D1EEFF";
    document.getElementsByClassName("next")[0].style.color = "white";
  } else if (checks == 2) {
    document.getElementsByClassName("bar")[0].style.width = "66%";
    document.getElementsByClassName("next")[0].style.backgroundColor = "#D1EEFF";
    document.getElementsByClassName("next")[0].style.color = "white";
  } else if (checks == 3) {
    document.getElementsByClassName("bar")[0].style.width = "100%";
    document.getElementsByClassName("next")[0].style.backgroundColor = "#0B93F4";
    document.getElementsByClassName("next")[0].style.color = "black";
  }
}

function checkBox(i) {
  if (step != 1) { return;}
  if (checkedBoxes[i] == 0) {
    checkedBoxes[i] = 1
    document.getElementsByClassName("check-icon")[i].textContent = checkImg;
    checks += 1;
  } else if (checkedBoxes[i] == 1) {
    checkedBoxes[i] = 0
    document.getElementsByClassName("check-icon")[i].textContent = "";
    checks = checks - 1;
  }
  checkProgress();
}

function uncheckAll() {
  document.getElementsByClassName("check-icon")[0].textContent = "";
  document.getElementsByClassName("check-icon")[1].textContent = "";
  document.getElementsByClassName("check-icon")[2].textContent = "";
}

function next() {
  if (step == 0) {
    checks = 0;
    checkedBoxes = [0,0,0];
    document.getElementsByClassName("next")[0].textContent = "FINISH ORDER →";
    document.getElementsByClassName("back")[0].textContent = "UNSTART ORDER ←";
    document.getElementsByClassName("back")[0].style.backgroundColor = "#75CDFF";
    document.getElementsByClassName("back")[0].style.color = "black";
    step = 1;
  } else if (step == 1 && checks == 3) {
    document.getElementsByClassName("next")[0].textContent = "READY ORDER FOR PICKUP →";
    document.getElementsByClassName("back")[0].textContent = "UNFINISH ORDER ←";
    step = 2;
  }
  checkProgress();
}

function back() {
  if (step == 1) {
    checks = 0;
    checkedBoxes = [0,0,0];
    uncheckAll();
    document.getElementsByClassName("next")[0].textContent = "START ORDER →";
    document.getElementsByClassName("back")[0].textContent = "---";
    document.getElementsByClassName("back")[0].style.backgroundColor = "#D1EEFF";
    document.getElementsByClassName("back")[0].style.color = "white";
    document.getElementsByClassName("bar")[0].style.width = "1%";
    step = 0;
  } else if (step == 2) {
    document.getElementsByClassName("next")[0].textContent = "FINISH ORDER →";
    document.getElementsByClassName("back")[0].textContent = "UNSTART ORDER ←";
    step = 1;
  }
  checkProgress();
}