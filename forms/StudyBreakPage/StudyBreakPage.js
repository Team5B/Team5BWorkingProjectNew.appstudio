hmbStudyBreak.onclick=function(s){
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

btnJoke.onclick=function(){
  let requestJoke = new XMLHttpRequest();
  requestJoke.open("GET", "https://sv443.net/jokeapi/v2/joke/Miscellaneous,Pun,Christmas?blacklistFlags=nsfw,religious,political,racist,sexist&type=twopart");
  requestJoke.send();
  requestJoke.onload = () => {
    console.log(requestJoke);
    if (requestJoke.status == 200) {
      let jokeMessage = ""
      let jokeAPI = JSON.parse(requestJoke.responseText)
      jokeMessage = jokeAPI.setup + "\n \n" + jokeAPI.delivery;
      console.log(`Message = ${jokeMessage}`)
      headJoke.textContent = jokeMessage;
    } else { 
      console.log(`Error ${request.status} ${request.statusText}`)
    }
  }
}
