let allBuildings = []
let allTables = []


OpenTablesPage.onshow=function(){
    query = "SELECT * FROM `building`"
    // Below change from my netID to yours (twice: user and database)    
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cjg05531&pass=" + pw + "&database=cjg05531&query=" + query)

      if (req.status == 200) { //transit worked.
            results = JSON.parse(req.responseText)
            // names now in results array - load names into the dropdown
            drpBuildings.clear()
            allBuildings = results
            for (i = 0; i <= results.length - 1; i++)
                drpBuildings.addItem(results[i][1])
            
    } else {        
        NSB.MsgBox(`Error: ${req.status}`)
    } 
}

drpBuildings.onclick=function(c){
  if (typeof(c) == "object"){  // means control clicked but no selection made yet
      return                     // do nothing
    } else {
      drpBuildings.value = c
      if (drpBuildings.value == "Harper Center"){
      query = "SELECT * FROM `table` WHERE open = 0 AND building_id = 1"
    // Below change from my netID to yours (twice: user and database)    
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cjg05531&pass=" + pw + "&database=cjg05531&query=" + query)

      if (req.status == 200) { //transit worked.
            results = JSON.parse(req.responseText)
            // names now in results array - load names into the dropdown
            drpTables.clear()
            allTables = results
            for (i = 0; i <= results.length - 1; i++)
                drpTables.addItem(results[i])
            
    } else {        
        NSB.MsgBox(`Error: ${req.status}`)
    } 
      
      }
      
      if (drpBuildings.value == "Skutt Student Center"){
      query = "SELECT * FROM `table` WHERE open = 0 AND building_id = 2"
    // Below change from my netID to yours (twice: user and database)    
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cjg05531&pass=" + pw + "&database=cjg05531&query=" + query)

      if (req.status == 200) { //transit worked.
            results = JSON.parse(req.responseText)
            // names now in results array - load names into the dropdown
            drpTables.clear()
            allTables = results
            for (i = 0; i <= results.length - 1; i++)
                drpTables.addItem(results[i])
            
    } else {        
        NSB.MsgBox(`Error: ${req.status}`)
    } 
      
      }
    

}
}

hmbOpenTables.onclick=function(s){
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
