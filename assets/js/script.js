const buttonChat = document.querySelector('.chatbox')
const emailTx = document.querySelector('.email-tx')

buttonChat.addEventListener('click', ()=>{
    document.getElementById('chatbox-body').style.display =  'flex'
    document.getElementById('chatbox-body').onclick = e => {
        if(e.target.className.indexOf('chatbox-class') !== -1){
          document.getElementById('chatbox-body').style.display = 'none'
        }
      }
      document.getElementById('chatbox-body').style.opacity = '0'
      setTimeout(() => {
        document.getElementById('chatbox-body').style.opacity = '1'
      },300)


})

emailTx.addEventListener('click',()=>{
  document.getElementById('chatbox-body').style.display =  'flex'
  document.getElementById('chatbox-body').onclick = e => {
      if(e.target.className.indexOf('chatbox-class') !== -1){
        document.getElementById('chatbox-body').style.display = 'none'
      }
    }
    document.getElementById('chatbox-body').style.opacity = '0'
    setTimeout(() => {
      document.getElementById('chatbox-body').style.opacity = '1'
    },300)
})
