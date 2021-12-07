let calendarShow = 1;

/* create the calendar */ 
function settingDate(date, day) {
    date = new Date(date);
    date.setDate(day);
    date.setHours(23);
    return date;
}
function getDatesBetween(date1,date2) {
    let range1 = new Date(date1);
    let range2 = new Date(date2);
    date1 = settingDate(date1, 31);
    date2 = settingDate(date2, 31);
    let temp;
    let dates = [];
     
    // get end date of each month
    while (date1 <= date2) {
        if(date1.getDate() != 31){
            temp = settingDate(date1,0);
            if(temp >= range1 && temp <= range2) dates.push(temp);
            date1 = settingDate(date1,31);
        } else {
            temp = new Date(date1);
            if(temp >= range1 && temp <= range2) dates.push(temp);
            date1.setMonth(date1.getMonth() + 1);
        }
    }
    console.log(dates);
    // buttons to navigate between calendars
    let content = "<div class ='calendarBtns'><button id='calendarPrev' onclick='callprev()' disabled>Prev</button> | <button id='calendarNext' onclick='callnext()'>Next</button></div>";
    
    // weekdays
    let weekDays = [
        {shortDay:"Mon", fullDay: "Monday"},
        {shortDay:"Tue", fullDay: "Tuesday"},
        {shortDay:"Wed", fullDay: "Wednesday"},
        {shortDay:"Thu", fullDay: "Thursday"},
        {shortDay:"Fri", fullDay: "Friday"},
        {shortDay:"Sat", fullDay: "Saturday"},
        {shortDay:"Sun", fullDay: "Sunday"}
    ];
    
    // months in the calendar
    let LastDate, firstDate;
    for (let i=0; i<dates.length; i++){
        LastDate = dates[i];
        firstDate = new Date(dates[i].getFullYear(),dates[i].getMonth(), 1);
        content += "<div id='calendarTable_" + (i+1) + "' class='calendarDiv'>";
        content += 
        "<h2>" + 
        firstDate.toString().split(" ")[1] + 
        "-" + 
        firstDate.getFullYear() + 
        "</h2>";
        content += "<table class='calendarTable'>";
        content += "<thead >";
        // making columns for the weekdays
        weekDays.map(item=>{
            content += "<th>" + item.fullDay + "</th>";
        })
        content += "</thead>";
        content += "<tbody >";
        let j=1;
        let displayNum, idMonth;
        // getting the days of the month in each row
        while(j <= LastDate.getDate()) {
            content += "<tr>";
            for (let k = 0; k < 7; k++) {
                displayNum = j < 10 ? "0" + j : j;
                // matching the first date of the month with the correct weekday
                if(j == 1) {
                    if(firstDate.toString().split(" ")[0] == weekDays[k].shortDay) {
                        content += "<td>" + displayNum + "</td>";
                        j++;
                    } else {
                        content += "<td></td>";
                    }
                } else if (j > LastDate.getDate()) {
                    content += "<td></td>";
                } else {
                    content += "<td>" + displayNum + "</td>";
                    j++;
                }
            };
            content += "</tr>";
        }
        content += "</tbody >";
        content += "</th>";
        content += "</table>";
        content += "</div>";
    }
    return content;
}

// change between calendars when prev & next button is pressed
function callnext () {
    let alltable = document.getElementsByClassName("calendarDiv");
    document.getElementById('calendarPrev').disabled = false;
    calendarShow++;
    if (calendarShow <= alltable.length) {
        for (let i=0; i <alltable.length; i++) {
            alltable[i].style.display ="none";
        }
    }
    document.getElementById('calendarTable_' + calendarShow).style.display = "block";
    if (calendarShow == alltable.length) {
        document.getElementById('calendarNext').disabled = true;
    }
}
function callprev () {
    let alltable = document.getElementsByClassName("calendarDiv");
    document.getElementById('calendarNext').disabled = false;
    calendarShow--;
    if (calendarShow >= 1) {
        for (let i=0; i <alltable.length; i++) {
            alltable[i].style.display ="none";
        }
    }
    document.getElementById('calendarTable_' + calendarShow).style.display = "block";
    if (calendarShow == 1) {
        document.getElementById('calendarPrev').disabled = true;
    }
}

// add calendar event when the date is clicked
// let theCalendar = document.getElementById('calendar');
// theCalendar.addEventListener("click", chooseDate(e));

// function chooseDate(e) {
//     let chosenDate = e.target.id;
//     console.log(chosenDate);
// }

// exit calendar
let exit = document.getElementById('exit-icon');
function returnHome () {
    location.href = "main.html";
}

// set range of calendar
let content = getDatesBetween("2021/12/01","2022/12/31");
document.getElementById("calendar").innerHTML = content;

