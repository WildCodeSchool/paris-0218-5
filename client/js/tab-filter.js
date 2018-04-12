window.addEventListener("load", () =>{
    const itemsFilter = document.getElementsByClassName('item-filter')

    for(let item of itemsFilter){
        item.addEventListener("click", (e) => {
            for(item of itemsFilter){
                if(item.classList.contains('active')){
                    item.classList.remove('active')
                }
            }
            const that = e.currentTarget
            that.classList.add('active')
        })
    }
})