var modal = document.getElementById("modal");

var close = document
  .getElementById("closeBtn")
  .addEventListener("click", function () {
    modal.style.display = "none";
    document.getElementById("overlay").style.display = "block";
  });

var accept = document
  .getElementById("acceptBtn")
  .addEventListener("click", function () {
    document.getElementById("modal").style.display = "none";
    document.getElementById("overlay").style.display = "block";
  });

  document.getElementById("usernameInput").addEventListener("keyup", function(event) {
    let searchQuery = event.target.value.toLowerCase();
    let allNamesDOMCollection = document.getElementsByClassName('name');
    
    for(let i = 0; i < allNamesDOMCollection.length; i++) {
      const currentName = allNamesDOMCollection[i].textContent.toLowerCase();
  
      if (currentName.includes(searchQuery)) {
        allNamesDOMCollection[i].style.display = "inline-block";
    } else {
        allNamesDOMCollection[i].style.display = "none";
    }
  }

});
