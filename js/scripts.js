


function printComment() {
  //store user input
  var userInput = document.getElementById("userInput").value;

  //verify userInput is stored
  // console.log(userInput);

  // create variable to write comment for on click event
  document.getElementById('comment').innerHTML = userInput;

  //have button trigger onclick event that writes the comment
  // document.getElementById('myButton').onclick = addComment;

}
