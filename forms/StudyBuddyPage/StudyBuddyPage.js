//having the user write the first and last name of friend and it will then tell them the table number 
//create varibles for the input of first and last name 
let SBFirstName = inpFirstNameSB.value
let SBLastName = inpLastNameSB.value

btnFindSB.onclick=function(){                                                                                                                                                       
    query = "SELECT * FROM `table` t JOIN `user_table` ut ON t.table_id = ut.table_id JOIN `user` u ON u.user_id = ut.user_id WHERE `open` = 1 AND `first_name` = '" + SBFirstName + "'" //AND `last_name = '" + SBLastName + "'"
    //query = "SELECT * FROM `table` t  JOIN `user_table` ut ON t.table_id = ut.table_id JOIN `user` u ON u.user_id = ut.user_id WHERE open = 1 AND `first_name` = 'Jim'"
    // Below change from my netID to yours (twice: user and database) 
    //let tableNum = `table_id`
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cjg05531&pass=" + pw + "&database=cjg05531&query=" + query)

      if (req.status == 200) { //transit worked.
          results = JSON.parse(req.responseText)
          console.log(results)
          //lblSBTable.value = `Your study buddy is at ${tableNum}`
    } else {        
        NSB.MsgBox(`Error try again: ${req.status}`)
    } 
}

