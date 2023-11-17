const input=document.getElementById('input')
const btn=document.getElementById('btn')
const list=document.getElementById('list')

btn.addEventListener('click',()=>{
    const li=document.createElement('li')
    const p=document.createElement('p')
    const iconDiv=document.createElement('div')
    const check=document.createElement('i')
    const trash=document.createElement('i')

    li.classList.add('d-flex','justify-content-between','align-items-center')
    p.classList.add('fs-4')
    iconDiv.classList.add('d-flex','gap-3')
    check.classList.add('fa-solid','fa-check','fa-xl')
    trash.classList.add('fa-solid','fa-trash','fa-xl')

    

    const todo=input.value.trim()


    if(input.value !=''){
    p.textContent=todo
    li.appendChild(p)
    iconDiv.appendChild(check)
    iconDiv.appendChild(trash)
    li.appendChild(iconDiv)
    list.appendChild(li)

    check.addEventListener('click',function(){
     let yazi=this.parentElement.previousElementSibling
    // console.log(this.parentElement.parentElement.firstChild) fa iconu geliyor
        yazi.classList.toggle('text-secondary')
        yazi.classList.toggle('text-decoration-line-through')
    })

    trash.addEventListener('click', function(){
        let sil=this.parentElement.parentElement
        sil.remove()
    })
    input.value=''
    }else{
        alert('lütfen boş bırakmayınız')
    }
})

