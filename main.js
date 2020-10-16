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
    let bikeModels = document.getElementsByClassName('name');
    
    for(let i = 0; i < bikeModels.length; i++) {
      const currentName = bikeModels[i].textContent.toLowerCase();
  
      if (currentName.includes(searchQuery)) {
        bikeModels[i].style.display = "inline-block";
    } else {
        bikeModels[i].style.display = "none";
    }
  }

});
