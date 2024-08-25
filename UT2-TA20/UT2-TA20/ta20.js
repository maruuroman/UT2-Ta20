const imagen = document.getElementById("miImagen");

imagen.addEventListener("mouseover", function() {
    imagen.src = "https://i.pinimg.com/564x/de/5b/3c/de5b3cef727c6c7e7b3ea70850125311.jpg"; 
});

imagen.addEventListener("mouseout", function() {
    imagen.src = "https://i.pinimg.com/564x/a0/88/d8/a088d8f903f701ced975a83c9b461a58.jpg";
});