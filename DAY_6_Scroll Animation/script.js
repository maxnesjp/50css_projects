const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
  // when do we want the content to come in?
  const triggerBottom = (window.innerHeight / 5) * 4
  boxes.forEach((box) => {
    // get the value of the top boundary of each box
    const boxTop = box.getBoundingClientRect().top
    if (boxTop < triggerBottom) {
      box.classList.add('show')
    } else {
      box.classList.remove('show')
    }
  })
}
