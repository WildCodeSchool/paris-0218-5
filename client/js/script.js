const getModal = document.getElementById('connexion-wrapper')

const closePop = document.getElementById('closeModal')

const showModal = document.getElementById('id01')



getModal.addEventListener('click', () => {
            showModal.style.display='block'
        })

closePop.addEventListener('click', () => {
            showModal.style.display='none'
        })
