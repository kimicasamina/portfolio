const burgerBtn = document.querySelector('.hamburger')
const closeBtn = document.querySelector('.close-btn')
const menu = document.querySelector('.mobile-menu')
const closeBtnContainer = document.querySelector('.close-btn-container')
const aside = document.querySelector('.aside')
burgerBtn.addEventListener('click', displayAside)
closeBtn.addEventListener('click', hideAside)
function displayAside(){
  if (aside.style.display == 'none'){
    aside.style.display = 'flex'
    aside.style.width = '100vw'
    aside.style.minHeight = '100vh'
    aside.style.float = 'none'
    aside.style.flexDirection = 'column'
    // display close button
    closeBtn.style.display = 'flex'
    // closeBtn.style.zIndex = '-1999'
    
  } else {
    aside.style.display = 'none'
  }
}

function hideAside(){
  if (aside.style.display == 'none'){
    aside.style.display = 'flex'
    closeBtnContainer.style.display = 'flex'
    
  } else {
    aside.style.display = 'none'
  }
}