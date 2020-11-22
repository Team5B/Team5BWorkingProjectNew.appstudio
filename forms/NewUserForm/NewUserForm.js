//One that works!!
// Code look at later 
btnCreateUser.onclick=function(){
  
  let username1 = net_id.value
  let first_name1 = first_name.value
  let last_name1 = last_name.value

  query = "INSERT INTO user (net_id, first_name, last_name) VALUES ('" + username1 + "', '" + first_name1 + "', '" + last_name1 + "')"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cjg05531&pass=" + pw + "&database=cjg05531&query=" + query)

  
 
  if (req.status == 200) { //transit worked.
    results = JSON.parse(req.responseText)
    lblAdded.value = `You have sucessfully been added, please log in!`
  } else {
    // transit error
    lblAdded.value = `There was an error adding you to the database`
    console.log(`Error: ${req.status}`);
  }
  }
  
  /*
  let newUserAdd = ""
  for (i = 0; i <= results.length - 1; i++)
  newUserAdd  = newUserAdd  + results[i] + "\n"

  txtRemaining.value = customersAdd

*/


btnGoHome.onclick=function(){
  ChangeForm(LoginPage)
}
