//enums declaration
var days;
(function (days) {
    days[days["Sunday"] = 0] = "Sunday";
    days[days["Monday"] = 1] = "Monday";
    days[days["Tuesday"] = 2] = "Tuesday";
    days[days["Wednesday"] = 3] = "Wednesday";
    days[days["Thrusday"] = 4] = "Thrusday";
    days[days["Friday"] = 5] = "Friday";
    days[days["Saturday"] = 6] = "Saturday";
})(days || (days = {}));
var months;
(function (months) {
    months[months["January"] = 0] = "January";
    months[months["Febuary"] = 1] = "Febuary";
    months[months["March"] = 2] = "March";
    months[months["April"] = 3] = "April";
    months[months["May"] = 4] = "May";
    months[months["June"] = 5] = "June";
    months[months["July"] = 6] = "July";
    months[months["August"] = 7] = "August";
    months[months["September"] = 8] = "September";
    months[months["October"] = 9] = "October";
    months[months["November"] = 10] = "November";
    months[months["December"] = 11] = "December";
})(months || (months = {}));
//html elements
var pTodayDate = document.getElementById("p--today-date");
var btnclick = document.getElementById("button--birthday");
var getFormDate = document.getElementById("input--date-picker");
var DisplayBirthdate = document.getElementById("p--birthday-message");
//anynomous function on click event
btnclick.onclick = function () {
    var ubirthday = getFormDate.value;
    var userBday = new Date(ubirthday);
    DisplayBirthdate.innerHTML = makeDateString(userBday);
};
// function to making date string
function makeDateString(inputDate) {
    if ((inputDate.getDate() === today.getDate()) && (inputDate.getMonth() === today.getMonth())) {
        return "Happy BirthDay!";
    }
    var currentYearBirthday = new Date();
    currentYearBirthday.setDate(inputDate.getDate());
    currentYearBirthday.setMonth(inputDate.getMonth());
    currentYearBirthday.setFullYear(today.getFullYear());
    return "your birthday is " + days[currentYearBirthday.getDay()] + " " + months[currentYearBirthday.getMonth()] + " " + currentYearBirthday.getDate() + ", " + currentYearBirthday.getFullYear();
}
//current date
var today = new Date();
//display date using string template
pTodayDate.innerHTML = "Today is " + days[today.getDay()] + " " + months[today.getMonth()] + " " + today.getDate() + ", " + today.getFullYear();
/*function getBirthdate():void {
    //form inputs
    let getFormDate =<HTMLInputElement>document.getElementById("input--date-picker");
    let DisplayBirthdate = document.getElementById("p--birthday-message");
    //current date
    let currentdate = new Date();
    //birth date
    let birthDate:Date = new Date(getFormDate.value)
    // constructing current year birth date
    let currentBirthdate:Date = new Date(currentdate.getFullYear(),birthDate.getMonth(),birthDate.getDate());
    //displaying birthdate
    DisplayBirthdate.innerHTML = `Your BirthDate is ${days[currentBirthdate.getDay()]} ${months[currentBirthdate.getMonth()]} ${currentBirthdate.getDate()}, ${currentBirthdate.getFullYear()}`;
    console.log(currentBirthdate);

}*/ 
