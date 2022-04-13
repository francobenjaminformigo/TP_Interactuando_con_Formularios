window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');
    
    let inputTitle = document.querySelector('#title');
    let inputRating = document.querySelector('#rating');
    let inputAwards = document.querySelector('#awards');
    let inputDate = document.querySelector('#release_date');
    let inputLength = document.querySelector('#length');
    let inputGenre = document.querySelector('#genre_id');
    
    function randomColor() {
        return '#' + ('00000' + (Math.random() * 16777216 << 0).toString(16)).substr(-6);
    }

    //Evento onmouseover para cambiar color
    titulo.addEventListener('mouseover', () => {
        titulo.style.color = randomColor()
    })

    //Definimos estadoSecreto
    let estadoSecreto = 0;

    

    //Creamos el evento con toda su lógica
    inputTitle.addEventListener('keyup', (e) => {
        switch(estadoSecreto){
            case 0:
                e.key == 's' ? estadoSecreto++ : (estadoSecreto = 0);
                break;
            case 1:
                e.key == 'e' ? estadoSecreto++ : (estadoSecreto = 0);
                break;
            case 2:
                e.key == 'c' ? estadoSecreto++ : (estadoSecreto = 0);
                break;
            case 3:
                e.key == 'r' ? estadoSecreto++ : (estadoSecreto = 0);
                break;
            case 4:
                e.key == 'e' ? estadoSecreto++ : (estadoSecreto = 0);
                break;
            case 5:
                e.key == 't' ? estadoSecreto++ : (estadoSecreto = 0);
                break;
            case 6:
                e.key == 'o' ? alert('Secreto Mágico') : (estadoSecreto = 0);
                break;
            default:
                break;
        }
        console.log(e.key, estadoSecreto)
    })

    /* ----------Validaciones de Formulario---------- */

    let form = document.querySelector('form');
    

    inputTitle.addEventListener('blur', (e) => {
        if(e.target.length < 1){
            inputTitle.classList.add('is-invalid');
        }else{
            inputTitle.classList.add('is-valid');
            inputTitle.classList.remove('is-invalid');
        }
    })

    inputRating.addEventListener('blur', (e) => {
        if(!inputRating.value.trim()){
            inputRating.classList.add('is-invalid');
        }else{
            inputRating.classList.remove('is-invalid');
            inputRating.classList.add('is-valid');
        }
    })

    form.addEventListener('submit', (e) => {
        let errors = [];

        

        if(inputTitle.value == ""){
            errors.push('El campo titulo es requerido');
            inputTitle.classList.add('is-invalid');
        }else{
            inputTitle.classList.add('is-valid');
            inputTitle.classList.remove('is-invalid');
        }

        if(inputRating.value <= 0 || inputRating.value > 10.0){
            errors.push('El campo calificación no puede ser menor a 0 ni mayor a 10');
            inputRating.classList.add('is-invalid');
        }else{
            inputRating.classList.add('is-valid');
            inputRating.classList.remove('is-invalid');
        }

        if(inputAwards.value <= 0 || inputAwards.value > 10){
            errors.push('El campo premios no puede ser menor a 0 ni mayor a 10');
            inputAwards.classList.add('is-invalid');
        }else{
            inputAwards.classList.add('is-valid');
            inputAwards.classList.remove('is-invalid')
        }

        if(inputDate.value == ""){
            errors.push('El campo fecha de creación es requerido');
            inputDate.classList.add('is-invalid');
        }else{
            inputDate.classList.add('is-valid');
            inputDate.classList.remove('is-invalid');
        }

        if(inputLength.value < 60 || inputLength.value > 360){
            errors.push('El campo duración no puede ser menor a 60 o mayor a 360 minutos');
            inputLength.classList.add('is-invalid');
        }else{
            inputLength.classList.add('is-valid');
            inputLength.classList.remove('is-invalid');
        }

        if(inputGenre.value == ""){
            errors.push('El campo genero es requerido');
            inputGenre.classList.add('is-invalid');
        }else{
            inputGenre.classList.add('is-valid');
            inputGenre.classList.remove('is-invalid');
        }


        if(errors.length > 0){
            e.preventDefault();
            let ulErrors = document.querySelector('.errores');
            ulErrors.classList.add('alert-warning');
            ulErrors.innerHTML = "";
            errors.forEach((error) => {
                ulErrors.innerHTML += `<li>  ${error} </li>`
            })
        }else{
            alert('La validacion fué exitosa');
            form.submit();
        }
    })

}