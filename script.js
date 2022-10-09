

var currentDay = document.querySelector('#currentDay');
var container = document.querySelector('.container');

var elements = $('.container');

console.log(elements)

//getItem and setItem

localStorage.setItem('9', 'description');

console.log(localStorage.getItem('9'))


// Moment show date
var curTime = moment()


// Set the day's date
currentDay.innerHTML = curTime.format('dddd, MMMM Do');
console.log('current date', currentDay.innerHTML);


for (var setTime = moment().hour('09').minute('00');
  setTime <= moment().hour('17').minute('00');
  setTime.add(1, 'h')) {


  console.log(setTime.format('HH:mm'))
  console.log('just the hour:', setTime.hour());


  // set past present and future
  var className = '';
  if (setTime.hour() < curTime.hour()) {

    console.log(setTime + '<' + curTime)
    className = 'past';
  } else if (setTime.hour() == curTime.hour()) {
    className = 'present';
  }
  else {
    className = 'future'
  }


  var row = '<div class="row">' +
    '<div class="col-1 hour">' +
    setTime.format('ha') +
    '</div>' +
    '<div class= "col-10 description ' + className + '">' +
    'description' +
    '</div>' +
    ' <div class="col-1 saveBtn">' +
    '<i class="fa fa-save"></i>' +
    '</div>' +
    '</div>';

  container.innerHTML = container.innerHTML + row
}
activateDescription()

function activateChoices() {

  var buttons = choicesul.querySelectorAll("button");
  console.log("button", buttons);
  buttons.forEach((button) => {
    console.log("button check", button)
    button.addEventListener("click", buttonsQ)
  })
}


function activateDescription() {
  var evtDescList = document.querySelectorAll('.description');
  console.log('desciption content', evtDescList);
  evtDescList.forEach((evtDesc) => {
    console.log('.description', evtDesc)
    evtDesc.addEventListener('click', onClickDescription)
  })
}

function onClickDescription(evt) {
  console.log('onclick', evt)
  var desc = prompt('Please enter your description')
  console.log('eventDetails', desc)
  console.log('Element', evt.srcElement)
  evt.srcElement.innerHTML = desc
}

/*

  attach an event to the save button
  get the description on the same row as this button
  work up from src element
  go and target the description

*/


/*
// Event listener to save to local stroage
$(".saveBtn").click(function () {

  description.preventDefault();

  var formValue = $(this).siblings(".form-control").val();

  console.log("This worked");

  var listItem = $(this).parent().data("hour");

  localStorage.setItem(listItem, formValue);
});
*/


