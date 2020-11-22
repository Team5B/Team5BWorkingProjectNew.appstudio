let todayNew = new Date();
let requestNew = new XMLHttpRequest();
requestNew.open("GET", "https://www.googleapis.com/calendar/v3/calendars/vvdn268sb4c3c7b4l3064sdkec@group.calendar.google.com/events?key=AIzaSyAj4gfPnymoPa0-rl75eJIoKwxKvpuiRRM");
requestNew.send();
requestNew.onload = () => {
  console.log(requestNew);
  if (requestNew.status == 200) {
    let tabMessage = ""
    let eventAPI = JSON.parse(requestNew.responseText)
    allEvents = eventAPI
    for (i = 0; i <= eventAPI.items.length - 1; i++) {
        // console.log(`${eventAPI.items[i].summary}`)
        // console.log(eventAPI.items[i].start.dateTime.slice(0,10))
        let dateToday = todayNew.getFullYear()+'-'+(todayNew.getMonth()+1)+'-'+todayNew.getDate();
        if (eventAPI.items[i].start.dateTime.slice(0,10) >= dateToday) {
          tabMessage = tabMessage + "<tr><td><a href=\"" + eventAPI.items[i].htmlLink + "\">" + eventAPI.items[i].summary + "</td><td>" + eventAPI.items[i].description + "</td><td>" + eventAPI.items[i].location + "</td><td>" + eventAPI.items[i].start.dateTime.slice(0,10) + "</td><td>" + eventAPI.items[i].start.dateTime.slice(11,16) + "</td></tr>"
          fullMessage = "<html><head><style>table, th, td { border: 1px solid black; border-collapse: collapse; padding: 1rem; } </style></head><body><table style=\"width:100%\"><tr><th>Event</th><th>Description</th><th>Location</th><th>Date</th><th>Time</th></tr>" + tabMessage + "</table></body></html>"
          htmlCall.innerHTML = fullMessage;
          console.log(`Table code: ${fullMessage}`)
        } else { 
          console.log(`${eventAPI.items[i].summary} is not this week.`)
        }
    }
    // console.log(`Message = ${fullMessage}`)
    // allEvents = tabMessage
  } else { 
    console.log(`Error ${requestNew.status} ${requestNew.statusText}`)
  }
}

hmbCalendar.onclick=function(s){
     if (typeof(s) == "object") { // do nothing - they just clicked on the control
       return
    } else {
       switch(s) {
            case "Table Status":
                ChangeForm(OpenTablesPage)
                break
            case "Calendar":
                ChangeForm(CalendarPage)
                break
            case "Study Break":
                ChangeForm(StudyBreakPage)
                break
            case "Nearby Coffee Shops":
                ChangeForm(NearbyCoffeePage)
                break
            case "Starbucks":
                window.open("https://www.starbucks.com/")
                break
            case "Home":
                ChangeForm(HomePage)
                break
       }  
   } 
  
}
