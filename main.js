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
    console.log(allNamesDOMCollection[0].textContent);
});
