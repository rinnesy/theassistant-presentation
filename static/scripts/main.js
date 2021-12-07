/* Menu */
// variables
let openBtn = document.getElementById('open-menu');
let closeBtn = document.getElementById('close-menu');
let check = document.getElementById('checkmark');
let online = document.getElementById('online-status');
let active = document.getElementById('online-active');
let offline = document.getElementById('offline-status');
let inactive = document.getElementById('offline-active');
var assistantStatus = false;
let calendarBtn = document.getElementById('show-calendar');
let calendar = document.getElementById('calendar');
let idk = document.getElementById('avatar-idk');
let hello = document.getElementById('avatar-wave');
let peace = document.getElementById('avatar-peace');

idk.classList.add("main-avatar");

// toggle the menu open when the open menu icon is selected 
function openMenu () {
    // document.getElementById('mySidenav').style.width = "200px";
    document.getElementById('mySidenav').classList.remove("hide")
    openBtn.classList.add("hide");
    closeBtn.classList.remove("hide");
    closeBtn.classList.add("show");
}

// toggle the menu closed when close menu icon is selected
function closeMenu () {
    // document.getElementById('mySidenav').style.width = "0";
    document.getElementById('mySidenav').classList.add("hide");
    closeBtn.classList.remove("show");
    closeBtn.classList.add("hide");
    openBtn.classList.remove("hide");
}

// toggle status to online
online.addEventListener("click", onlineStatus);

function onlineStatus() {
    assistantStatus = true;
    active.classList.remove("hide");
    offline.classList.remove("hide");
    online.classList.add("hide");
    inactive.classList.add("hide");
    console.log("clicked online");
    console.log(assistantStatus);
    // change main avatar
    hello.classList.add("main-avatar");
    hello.classList.remove("hide");
    peace.classList.add("hide");
}

// toggle status to offline
offline.addEventListener("click", offlineStatus);

function offlineStatus() {
    inactive.classList.remove("hide");
    online.classList.remove("hide");
    offline.classList.add("hide");
    active.classList.add("hide");
    assistantStatus = false;
    console.log("clicked offline");
    console.log(assistantStatus);
    // change main avatar
    hello.classList.remove("main-avatar");
    hello.classList.add("hide");
    peace.classList.remove("hide");
}

// show calendar
calendarBtn.addEventListener("click", showCalendar);

function showCalendar () {
    location.href = "calendar.html";
}

// close calendar

/* end menu functions */