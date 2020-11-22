btnCheckInTable.onclick=function(){
  let tableCheckIn = inpTableNumIn.value
  query = "UPDATE `table` SET `open` = 1 WHERE `table_id` = '" + tableCheckIn + "' "
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cjg05531&pass=" + pw + "&database=cjg05531&query=" + query)
  
  query2 = "INSERT INTO `user_table` (user_id, table_id, date, time) VALUES ('" + user_id + "', '" + tableCheckIn + "', CURDATE(), CURTIME())"
  req2 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cjg05531&pass=" + pw + "&database=cjg05531&query=" + query2)

   if (req.status == 200) { //transit worked.
        if (req.responseText == 500) {   // means the update succeeded
                lblCheckInMsg.value = `You have sucessfully checked into table ${tableCheckIn}`
                // reset controls to original state
              
         } else {
                lblCheckInMsg.value = `There was a problem with the table.`
} 
} else {        
       console.log(`Error`)
    }


}

hmbCheckIn.onclick=function(s){
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
