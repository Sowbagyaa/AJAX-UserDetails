
document.getElementById("userDetailsButton").addEventListener("click",function getUserDetails() {
    
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      const json = JSON.parse(this.responseText);
      displayResponse(json);
    }
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/users");
    xhttp.send();
    
  });
  
  function displayResponse(json) {
    
    let table="<tr><th>id</th><th>name</th><th>username</th><th>email</th><th>city</th><th>Phone</th><th>Company</th><th>Website</th></tr>";
    for (let i = 0; i < json.length; i++) { 
      table += "<tr ><td>" +json[i]["id"]+"</td><td>" +json[i]["name"] +"</td><td>" +json[i]["username"]+
      "</td><td>" +json[i]["email"]+"</td><td>" +json[i]["address"]["city"]+"</td><td>" +json[i]["phone"]+
      "</td><td>" +json[i]["company"]["name"]+"</td><td>" +json[i]["website"]+"</td></tr>";
    }
    
    

    var result = document.getElementById("demo");
    if(result.style.display == "block"){
        document.getElementById("demo").style.display = "none";
        document.getElementById("userDetailsButton").innerHTML = "Get User Details";
    }
    else{
        document.getElementById("demo").style.display = "block";
    document.getElementById("demo").innerHTML = table;
    document.getElementById("userDetailsButton").innerHTML = "Close Details";
    }
    
  }

  const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
searchButton.addEventListener('click', () => {
  const inputValue = searchInput.value;
  alert(inputValue);
});