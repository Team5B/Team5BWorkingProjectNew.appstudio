btnCheckIn.onclick=function(){
  ChangeForm(CheckInPage)
}

btnCheckOut.onclick=function(){
  ChangeForm(CheckOutPage)
}

hmbMenu.onclick=function(s){
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
       }  
   } 
}
  
