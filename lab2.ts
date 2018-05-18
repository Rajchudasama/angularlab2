
//enums declaration
enum days {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thrusday,
    Friday,
    Saturday
}

enum months {
    January,
    Febuary,
    March,
    April,
    May,
    June,
    July,
    August,
    September,
    October,
    November,
    December
}
//html elements
let pTodayDate = document.getElementById("p--today-date");
let btnclick = document.getElementById("button--birthday");
let getFormDate =<HTMLInputElement>document.getElementById("input--date-picker");
let DisplayBirthdate = document.getElementById("p--birthday-message");

//anynomous function on click event
btnclick.onclick = function(){
    let ubirthday:string = getFormDate.value;
    let userBday:Date = new Date(ubirthday);
    DisplayBirthdate.innerHTML = makeDateString(userBday);

}


 


// function to making date string
function makeDateString(inputDate:Date):string{
    if( (inputDate.getDate()===today.getDate()) && (inputDate.getMonth()===today.getMonth()) ){
        return `Happy BirthDay!`;
    }

    let currentYearBirthday = new Date();
    currentYearBirthday.setDate(inputDate.getDate());
    currentYearBirthday.setMonth(inputDate.getMonth());
    currentYearBirthday.setFullYear(today.getFullYear());
    return `your birthday is ${days[currentYearBirthday.getDay()]} ${months[currentYearBirthday.getMonth()]} ${currentYearBirthday.getDate()}, ${currentYearBirthday.getFullYear()}`

}

//current date
let today:Date = new Date();
//display date using string template
pTodayDate.innerHTML = `Today is ${days[today.getDay()]} ${months[today.getMonth()]} ${today.getDate()}, ${today.getFullYear()}`;



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