
//select all of the net IDs from database 
    //put into an array 
    //if the user name enetered in array - get the index 
    //do the same with the passwords 
      //then check to see if passwords match 
let req = ""
let query = ""
let results = ""
let req2= ""
let query2 = ""
let results2 = ""
let pw = "Bluejay1"
let allUsers = []
let user_id = ""


btnHome.onclick=function(){
  
  let net = inpNetID.value      
  let first = inpFirst.value
  let last = inpLast.value
  
  query = "SELECT `user_id` FROM `user` WHERE `net_id` = '" + net + "' "
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cjg05531&pass=" + pw + "&database=cjg05531&query=" + query)
  
  if (req.status == 200) { //transit worked.
    user_id = JSON.parse(req.responseText)
    console.log(user_id)
    ChangeForm(HomePage)

  } else {
    // transit error
    console.log(`Error: ${req.status}`);
  }
  } 
