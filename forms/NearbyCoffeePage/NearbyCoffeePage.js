// use your own url copied from Postman
let requestURL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyCE-pjULPU_Gp5Qf0qL39tVsdJBX55J0cY&location=41.265340,-95.943070&type=cafe&radius=1000"

function onXHRLoad() {
    let message = ""
    let apiData = JSON.parse(this.responseText)
    for (i = 0; i <= apiData.results.length - 1; i++) {
        console.log(`${apiData.results[i].name}`)
        message = message + apiData.results[i].name + "\n"
        message = message + apiData.results[i].vicinity + "\n" +"\n"
    }
    txtCloseCoffee.value = message
    // if want to add to database call a function here that does that
    // addToDatabase()
}

function callAPI(URL) {
    var xhttp = new XMLHttpRequest();
    
    // if you need cors (you'll get a cors error if you don't have it and you need it)
    // use this code to add the cors code to your url 
    xhttp.open('GET', 'https://cors-anywhere.herokuapp.com/' + URL)
    

    // make the API request
    xhttp.addEventListener('load', onXHRLoad)
    xhttp.send()
}

NearbyCoffeePage.onshow=function(){
  callAPI(requestURL)
}
