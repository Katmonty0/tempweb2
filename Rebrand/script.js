const searchForm = document.querySelector('.search-form');
const searchBtn = document.querySelector('#search-btn');
const navbar = document.querySelector('.navbar')



searchBtn.addEventListener('click', ()=>{
    searchForm.classList.toggle('active');
    document.addEventListener('click', (e)=>{
        if(!e.composedPath().includes(searchBtn) && !e.composedPath().includes(searchForm) ){
            searchForm.classList.remove('active');
        }
    })
})
