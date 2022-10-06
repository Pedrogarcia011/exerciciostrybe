window.onload = function(){// Todo codigo esta dentro do onload para que só seja alterada depois que a pagina esteja 100% carregada. Isto não vai alterar em nada apenas para evitar erros.

    let select = document.querySelector('select');// para procurar o select dentro do HTML.
    select.addEventListener('change', function(){// o codigo que esta aqui dentro sera executado sempre que tiver alguma mudança, na seleção da lista.
        let selected = select.selectedOptions[0];
       document.body.style.backgroundColor = selected.value
       
       localStorage.setItem('5.4-backgroundcolor', selected.value)// para acessar o body e mudar a cor.
    })

    let imputfontSize = document.querySelector('input[name= "font-size"]')
    imputfontSize.addEventListener('change', function(){
       let p = document.querySelector('p')
        p.style.fontSize = `${imputfontSize.value}px`;
        
        localStorage.setItem('5.4-fontSize', `${imputfontSize.value}px`)

    })
    let saveback = localStorage.getItem('5.4-backgroundcolor');
    document.body.style.backgroundColor = saveback

   let savefont = localStorage.getItem('5.4-fontSize');
   document.body.style.fontSize = savefont
}

