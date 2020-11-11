 btnNext4.onclick=function(){
  ChangeForm(StarbucksPage);
}
btnCheckOutTable.onclick=function(){
  let tableCheckOut = inpTableNumOut.value
  query = "UPDATE `table` SET `open` = 0 WHERE `table_id` = '" + tableCheckOut + "' "
    // Below change from my netID to yours (twice: user and database)    
    
   req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cjg05531&pass=" + pw + "&database=cjg05531&query=" + query)
   if (req.status == 200) { //transit worked.
   results = JSON.parse(req.responseText)
            // names now in results array - load names into the dropdown
  
      lblCheckOutMsg.value = `You have sucessfully checked into table ${tableCheckOut}`
    } else {        
        NSB.MsgBox(`Error, Please try again: ${req.status}`)
    }


}
