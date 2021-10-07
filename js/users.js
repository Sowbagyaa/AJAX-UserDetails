
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
    
    let table="<thead><tr><th>id</th><th>name</th><th>username</th><th>email</th><th>city</th><th>Phone</th><th>Company</th><th>Website</th></tr></thead>";
    for (let i = 0; i < json.length; i++) { 
      table += "<tr ><td>" +json[i]["id"]+"</td><td>" +json[i]["name"] +"</td><td>" +json[i]["username"]+
      "</td><td>" +json[i]["email"]+"</td><td>" +json[i]["address"]["city"]+"</td><td>" +json[i]["phone"]+
      "</td><td>" +json[i]["company"]["name"]+"</td><td>" +json[i]["website"]+"</td></tr>";
    }
    
    

    var result = document.getElementById("demo");
    if(result.style.display == "block"){
        document.getElementById("demo").style.display = "none";
        document.getElementById("search-bar").style.display = "none";
        document.getElementById("userDetailsButton").innerHTML = "Get User Details";
    }
    else{
        document.getElementById("demo").style.display = "block";
    document.getElementById("demo").innerHTML = table;
    document.getElementById("search-bar").style.display = "block";
    document.getElementById("userDetailsButton").innerHTML = "Close Details";
    }
    
  }

  (function(document) {
    'use strict';

    var TableFilter = (function(myArray) {
        var search_input;

        function _onInputSearch(e) {
            search_input = e.target;
            var tables = document.getElementsByClassName(search_input.getAttribute('data-table'));
            myArray.forEach.call(tables, function(table) {
                myArray.forEach.call(table.tBodies, function(tbody) {
                    myArray.forEach.call(tbody.rows, function(row) {
                        var text_content = row.textContent.toLowerCase();
                        var search_val = search_input.value.toLowerCase();
                        row.style.display = text_content.indexOf(search_val) > -1 ? '' : 'none';
                    });
                });
            });
        }

        return {
            init: function() {
                var inputs = document.getElementsByClassName('search-input');
                myArray.forEach.call(inputs, function(input) {
                    input.oninput = _onInputSearch;
                });
            }
        };
    })(Array.prototype);

    document.addEventListener('readystatechange', function() {
        if (document.readyState === 'complete') {
            TableFilter.init();
        }
    });

})(document);

