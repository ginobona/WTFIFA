

//This is the bribeResult function that fires when
//Submit button is clicked.

var bribeResult = document.getElementById("tada");

bribeResult.addEventListener("click", function(e){
  e.preventDefault();
  console.log("Hello World");
});
