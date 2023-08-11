const header = document.getElementById('header-fix');
const main = document.getElementById('main-content');
const educationDiv = document.getElementById('education');
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


header.addEventListener("mouseover", function() {
  header.style.opacity = "1"; // Make the header visible
});

header.addEventListener("mouseout", function(event) {
  // Check if the cursor is moving to the dropdown content
  if (event.relatedTarget && event.relatedTarget.closest(".dropdown-content")) {
    return; // Don't hide the header if moving to dropdown content
  }
  
  header.style.opacity = "0"; // Hide the header
});


// add scroll function for header items
const aboutButtons = Array.from(document.getElementsByClassName("href-about"));
const educationButtons = Array.from(document.getElementsByClassName("href-education"));
const projectButtons = Array.from(document.getElementsByClassName("href-project"));
const workButtons = Array.from(document.getElementsByClassName("href-work"));
const homeButtons = Array.from(document.getElementsByClassName("header-home"));
const sharingButtons = Array.from(document.getElementsByClassName("header-sharing"));

homeButtons.forEach(homeButton => {
  homeButton.addEventListener("click", () =>{
    if (window.location.href.includes("index.html")){
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
    else {
      window.location.href = "index.html";
    }
  })
})

sharingButtons.forEach(sharingButton => {
  sharingButton.addEventListener("click",()=>{
    if (window.location.href.includes("sharing.html")){
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
    else {
      window.location.href = "sharing.html";
    }
  })
})

aboutButtons.forEach(aboutButton => {
  aboutButton.addEventListener("click", ()=>{
    if (window.location.href.includes("index.html")){
      const div = document.getElementById("myself");
      div.scrollIntoView({behavior:"smooth"});
    }
    else {
      sessionStorage.setItem("scrollTo", "myself");
      window.location.href = "index.html";
    }
  })
});

educationButtons.forEach(educationButton => {
  educationButton.addEventListener("click", ()=>{
    if (window.location.href.includes("index.html")){
      const div = document.getElementById("education");
      div.scrollIntoView({behavior:"smooth"});
    }
    else {
      sessionStorage.setItem("scrollTo", "education");
      window.location.href = "index.html";
    }
  })
  
})

projectButtons.forEach(projectButton => {
  projectButton.addEventListener("click", ()=>{
    if (window.location.href.includes("index.html")){
      const div = document.getElementById("project");
      div.scrollIntoView({behavior:"smooth"});
    }
    else {
      sessionStorage.setItem("scrollTo", "project");
      window.location.href = "index.html";
    }
  })
})

workButtons.forEach(workButton => {
  workButton.addEventListener("click", ()=>{
    if (window.location.href.includes("index.html")){
      const div = document.getElementById("work");
      div.scrollIntoView({behavior:"smooth"});
    }
    else {
      sessionStorage.setItem("scrollTo", "work");
      window.location.href = "index.html";
    }
  })
})
