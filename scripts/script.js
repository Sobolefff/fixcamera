const fixButton = document.querySelectorAll('.button');
function buttonChange(evt){
    evt.target.closest('.button__text').textContent = 'Круто, спасибо за доверие!';
  }
fixButton.forEach(item => item.addEventListener('click', buttonChange));