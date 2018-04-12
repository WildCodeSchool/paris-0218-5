const getModal = document.getElementById('connexion-wrapper')

const closePop = document.getElementById('close-popup')

const showModal = document.getElementById('popup-cnx')



getModal.addEventListener('click', () => {
            showModal.style.display='block'
        })

closePop.addEventListener('click', () => {
            showModal.style.display='none'
        })
