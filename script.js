const buttons = document.querySelectorAll('button')
const sections = document.querySelectorAll('.main-content')
const formData = document.querySelectorAll('.form-input')
const contactForm = document.getElementById('contactForm')

const defaultPage = 3

let currentSection = sections[defaultPage]

currentSection.hidden = false
buttons[defaultPage].classList.add('active')

buttons.forEach((button, i) => {
  button.addEventListener(('click'),a => {
    currentSection.hidden = true
    currentSection = sections[i]
    removeActiveClasses()
    button.classList.add('active')
    currentSection.hidden = false
  })
})

function removeActiveClasses() {
  buttons.forEach(button => {
    button.classList.remove('active');
  })
}

// Contact Form
const submitForm = (e) => {
  e.preventDefault()
  const toSend =
  `**Name:** ${formData[0].value}
**Email:** ${formData[1].value}
**Phone:** ${formData[2].value}
**Request:** ${formData[3].value}`
  
  const request = new XMLHttpRequest()
  
  // test-room
  //request.open("POST", "https://discord.com/api/webhooks/902655050361479338/HvBalaSY3w2OWxtk4c7fyxhczl30RS-USvRHbvkZSWObo-j82cSEJpLxRT9HkzuudIZu")
  // discord notification
  request.open("POST", "https://discord.com/api/webhooks/902587515385544764/tuq_mGGLQaUAjnS7QH_5S2aUDIgekOUXJjAvrmJOvf14kfgclTW3oH6CRxYCIdcz2G24")
  request.setRequestHeader('Content-type', 'application/json')
  
  const params = {
    username: "New Contact Request",
    content: toSend
  }
  request.send(JSON.stringify(params))
  contactForm.reset()
}