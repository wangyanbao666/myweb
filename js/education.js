document.addEventListener('click', (event) => {
    let target = event.target;
    while (target!==null && target.classList!==undefined && !target.classList.contains('col-2-education')){
        target = target.parentNode;
    }
    if (target!==null && target.classList!==undefined ) {
        target.classList.toggle("show-child");
    }
})
