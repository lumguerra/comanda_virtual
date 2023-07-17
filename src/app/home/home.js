/* Go to function */

function goToAbout() {
  window.location.href = "about.html";
}
function goToFood() {
    window.location.href = "food.html";  
}

/* scroll function */

function scrollToSection() {
    var selectedDay = document.getElementById("daySelect").value;        
    var sectionElement = document.getElementById(selectedDay);
    sectionElement.scrollIntoView({ behavior: "smooth" });
    var offsetPosition = sectionElement.offsetTop - 75;
    window.scrollTo({
    top: offsetPosition,
    behavior: "smooth"
    });
    }
    
/* pop-up function */

document.getElementById('button-pop-up').addEventListener('click',function() {
  document.querySelector('.popup-bg').style.display= 'flex';
});

document.getElementById('close-pop-up').addEventListener('click',function() {
  document.querySelector('.popup-bg').style.display= 'none';
});

document.getElementById('voltar').addEventListener('click',function() {
  document.querySelector('.popup-bg').style.display= 'none';
});

document.getElementById('adicionar-endereco').addEventListener('click',function(){
  document.querySelector('.popup-adicionar-bg').style.display= 'flex';
  document.querySelector('.popup-bg').style.display= 'none';
})

document.getElementById('close-popup-add').addEventListener('click',function() {
  document.querySelector('.popup-adicionar-bg').style.display= 'none';
  document.querySelector('.popup-bg').style.display= 'flex';
});
document.getElementById('voltar-tela-anterior').addEventListener('click',function() {
  document.querySelector('.popup-adicionar-bg').style.display= 'none';
  document.querySelector('.popup-bg').style.display= 'flex';
})