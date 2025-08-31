const messages = [
  {
    message: 'Welcome, Go get some coffee!'
  },
  {
    message: 'Mainly focus on high quality products'
  },
  {
    message: 'Love making luxury designs'
  },
  {
    message: 'よ<br>う<br>こ<br>そ<br>。'
  }
]

const goodbyes = [
  {
    message: 'Gracias'
  },
  {
    message: 'Thanks you'
  },
  {
    message: 'Merci'
  },
  {
    message: 'Grazie'
  },
  {
    message: 'ありがとう'
  },
  {
    message: 'Obrigado'
  },
]


$(document).ready(function() {
  const animationText = () => {
    messages.forEach((msg, index) => {
      if (index) {
        setTimeout(() => {
          $('.welcome-component > h2').remove();
          $('.welcome-component').html('<h2>'+msg.message+'</h2>');
        }, index* 8* 1000);
      } else {
        setTimeout(() => {
          $('.welcome-component').html('<h2>'+msg.message+'</h2>');
        }, 1000);
      }
    })
  }

  const animationGoodbyes = () => {
    goodbyes.forEach((msg, index) => {
      if (index) {
        setTimeout(() => {
          $('.goodbye-component > h2').remove();
          $('.goodbye-component').html('<h2>'+msg.message+'</h2>');
        }, index* 8* 700);
      } else {
        setTimeout(() => {
          $('.goodbye-component').html('<h2>'+msg.message+'</h2>');
        }, 700);
      }
    })
  }

  animationText()
  setInterval(animationText, 4*10000)

  animationGoodbyes()
  setInterval(animationGoodbyes, 4*9000)
  
  $('#about').on("mousemove", function(e){
    const content = document.querySelector('#cube-container');

    content.style.left = 200 + e.pageX/2 + 'px';
    content.style.top = e.pageY/4 + 'px';
  })
})
