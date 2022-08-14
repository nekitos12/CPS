const openPopupList = document.querySelectorAll('.popup-open');

for (let i=0; i<openPopupList.length;i++){
  let open = openPopupList[i];
  for (let name of open.classList) {
    if (name.startsWith('btn__')){
      const subnamePopup = name.slice(5)
      const namePopup = `.popup-${subnamePopup}`
      open.addEventListener('click', () => showPopup(namePopup))

      const close = document.querySelector(namePopup).querySelector('.btn__close')

      close.addEventListener('click', () => document.querySelector(namePopup).classList.add('hidden'))
    }
  }
}
// close.addEventListener('click', closePopup)

function showPopup (cpopup) {
  const currentPopup = document.querySelector(cpopup)
  currentPopup.classList.remove('hidden')
  currentPopup.addEventListener('click', (e) => {
    if (!e.target.closest('.popup-area')){
      closePopup(currentPopup)
    }
  })
}

function closePopup (cpopup){
  cpopup.classList.add('hidden')
}


