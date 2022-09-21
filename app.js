// https://www.omnicalculator.com/health/qtc

// calculators not working

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const QTcRadio = document.getElementById('QTcRadio');
const QTintervalRadio = document.getElementById('QTintervalRadio');
const heartrateRadio = document.getElementById('heartrateRadio');
const RRintervalRadio = document.getElementById('RRintervalRadio');

let QTc;
let QTinterval = v1;
let heartrate = v2;
let RRinterval = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

QTcRadio.addEventListener('click', function() {
  variable1.textContent = 'QT interval';
  variable2.textContent = 'Heart rate';
  variable3.textContent = 'RR interval';
  QTinterval = v1;
  heartrate = v2;
  RRinterval = v3;
  result.textContent = '';
});

QTintervalRadio.addEventListener('click', function() {
  variable1.textContent = 'QTc';
  variable2.textContent = 'Heart rate';
  variable3.textContent = 'RR interval';
  QTc = v1;
  heartrate = v2;
  RRinterval = v3;
  result.textContent = '';
});

heartrateRadio.addEventListener('click', function() {
  variable1.textContent = 'QTc';
  variable2.textContent = 'QT interval';
  variable3.textContent = 'RR interval';
  QTc = v1;
  QTinterval = v2;
  RRinterval = v3;
  result.textContent = '';
});

RRintervalRadio.addEventListener('click', function() {
  variable1.textContent = 'QTc';
  variable2.textContent = 'QT interval';
  variable3.textContent = 'Heart rate';
  QTc = v1;
  QTinterval = v2;
  heartrate = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(QTcRadio.checked)
    result.textContent = `QTc = ${computeQTc().toFixed(2)}`;

  else if(QTintervalRadio.checked)
    result.textContent = `QT interval = ${computeQTinterval().toFixed(2)}`;

  else if(heartrateRadio.checked)
    result.textContent = `Heart rate = ${computeheartrate().toFixed(2)}`;

  else if(RRintervalRadio.checked)
    result.textContent = `RR interval = ${computeRRinterval().toFixed(2)}`;
})

// calculation

//  QTc = QT + 0.154(1-RR)

function computeQTc() {
  return Number(QTinterval.value) + 0.154 * (1 - Number(RRinterval.value))
}

function computeQTinterval() {
  return (Number(QTc.value) * Number(RRinterval.value)) + Number(heartrate.value);
}

function computeheartrate() {
  return Number(QTinterval.value) - (Number(QTc.value) * Number(RRinterval.value));
}

function computeRRinterval() {
  return (Number(QTinterval.value) - Number(heartrate.value)) / Number(QTc.value);
}