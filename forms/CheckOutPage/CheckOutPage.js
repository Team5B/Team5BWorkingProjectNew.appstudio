btnCheckOutTable.onclick=function(){
  let tableCheckOut = inpTableNumOut.value
  query = "UPDATE `table` SET `open` = 0 WHERE `table_id` = '" + tableCheckOut + "' "
    // Below change from my netID to yours (twice: user and database)    
    
   req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cjg05531&pass=" + pw + "&database=cjg05531&query=" + query)
   if (req.status == 200) { //transit worked.
   results = JSON.parse(req.responseText)
  
      lblCheckOutMsg.value = `You have sucessfully checked into table ${tableCheckOut}`
    } else {        
        NSB.MsgBox(`Error, Please try again: ${req.status}`)
    }


}

hmbCheckOut.onclick=function(s){
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
