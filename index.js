// Your code here
const dodger = document.getElementById("dodger");
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
  function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left + 1}px`;
    }
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  });
  const moveDodger= document.getElementById('dodger');
  // function  moveDodgerRight() {
  //   const left = dodger.style.left.replace
  //    left= parseInt(left);

  //    moveDodgerRight()

  //    let newPosition = dodger.style.left
  //    newPosition = parseInt(newPosition)
     
  //    if(right<360){
  //       dodger.style.left= `${left}`;
  //   }
  // }
  
//   document.addEventListener("keydown"), function (e) {
//     if (e.key === "Arrow") {
//       moveDodgerleft();
//     }
// }
