
// Choose a random color (I was hoping I could loop it, so everytime I clicked the button the color would change).
// I would also like the color that was chosen to be displayed on the button (will do this next)

let btn = document.getElementById('btn')
let txt = document.getElementById('text')

const colors = ['red', 'yellow', 'blue', 'brown', 'orange', 'green', 'violet', 'black', 'indigo', 'gray', 'olive', 'slateblue', 'gold', 'lightblue'];

//  const randomColor - choose a random color from the colors array

// const bgColor - created a variable to handle the array of colors

// used the addEventListener instead of onclick .. then put all the code inside the colorChange function

btn.addEventListener("click", colorChange => {
  const randomColor = Math.floor(Math.random() * colors.length);
  const bgColor = colors[randomColor];
  document.write(bgColor)
 document.body.style.backgroundColor = bgColor;
 btn.textContent = bgColor;
});