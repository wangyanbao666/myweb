const header = document.getElementById('header-fix');
const main = document.getElementById('main-content');
const scrollThreshold = 80; // Adjust this threshold to control when the header appears
let scrollBool = true;
let cursorBool = false;

window.addEventListener('scroll', () => {
  if (window.scrollY >= scrollThreshold) {
    scrollBool = false;
    // header.style.display = "flex";
    if (!cursorBool){
        header.style.opacity = '0';
    }
    else {
        header.style.opacity = '1';
    }
  } else {
    scrollBool = true;
    // header.style.display = "none";
    header.style.opacity = '0';
  }
});

window.addEventListener('mousemove', (event) => {
    const mouseY = event.clientY;
    // Check if the mouse is near the top of the screen (e.g., within a threshold of 50 pixels)
    if (mouseY <= scrollThreshold) {
        cursorBool = true;
        if (!scrollBool){
            header.style.opacity = '1';
        }
    } else {
        cursorBool = false;
        if (!scrollBool){
            header.style.opacity = '0';
        }

    }
  });
