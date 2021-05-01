const buttons = document.querySelectorAll('.faq-toggle')

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    //   toggle 'active' class to the parent container (faq container)
    button.parentNode.classList.toggle('active')
  })
})
