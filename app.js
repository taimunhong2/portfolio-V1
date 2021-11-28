
function sendEmail() {
    console.log("going to send")
  var tempParams = {
    from_name: document.getElementById("name").value,
    to_name: "Mun Hong",
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  }
  
  emailjs.send('service_uzft0dr', 'template_9jy2yd5', tempParams).then(function (res) {
    console.log("success", res.status)
    if (res.status != 200) {
      alert("Fail to send!")
    }
    else {
      alert("message sent!")
    }
    }
    )
}

//  For mobile version hamburger
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const mainNav = document.getElementsByClassName('main-nav')[0]
toggleButton.addEventListener('click', () => {
  mainNav.classList.toggle('active')
})










