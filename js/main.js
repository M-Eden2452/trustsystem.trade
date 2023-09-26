
//Анимация после скрола 

const animItems =  document.querySelectorAll("._anim-items")

  if(animItems.length > 0 ){
    window.addEventListener('scroll', animOnScroll); 
    function animOnScroll() {
      for (let index = 0; index < animItems.length; index++) {
        const animItem = animItems[index];
        const animItemHeight = animItem.offsetHeight;
        const animItemOffset = offset(animItem).top;
        const animStart = 4;

        let animItemPoint = window.innerHeight - animItemHeight / animStart;
        if (animItemHeight > window.innerHeight) {
           animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }
           if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
              animItem.classList.add('_anim-active');
           } else {
            if(animItem.classList.contains('_anim-no-hide')) {
              animItem.classList.remove('_anim-active');
           }
        }
    } 
}
  function offset(el) {
      const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return {top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }   
    animOnScroll(() => {
        animOnScroll();
    }, 300); 

}







// Validation
// document.addEventListener('DOMContentLoaded', function (){ 
//     const form = document.getElementById('form');
//     form.addEventListener('submit', formSend);

//     async function formSend(e) {
//         e.preventDefault();

//         let error = formValidate(form);

//         let formData = new FormData(form);

//         if (error === 0) {
//             form.classList.add('_sending');
//             let response = await fetch('sendmail.php', { 
//                 method: 'POST', 
//                 body: formData
//         });
//         if (response.ok) {
//             let result = await response.json(); 
//             alert(result.message);
//             form.reset();
//             form.classList.remove('_sending');
//         } else {
//             form.classList.remove('_sending');
//         }
//         } else {
            
//         } 
//     }


//     function formValidate(form) {
//         let error = 0;
//         let formReq = document.querySelectorAll('._req');

//         for (let index = 0; index < formReq.length; index++) {
//             const input = formReq[index];
//             formRemoveError(input);

//             if (input.classList.contains('_phone')){
//                 if (phoneTest(input)) {
//                     formAddError(input);
//                     error++; 
//                 }
//             } 
        
//             else{
//                 if (input.value === '') {
//                     formAddError(input);
//                     error++
//                 }
//             }
//         }
//         return error;
//     }  

    
//     function formAddError(input) {
//         input.parentElement.classList.add('_error');
//         input.classList.add('_error');
//     }

//     function formRemoveError(input) {
//         input.parentElement.classList.remove('_error');
//         input.classList.remove('_error');    
//     }

//     function phoneTest(input) {
//         return /\+\d{1}\(\d{3}\)\d{3}-\d{4}/g.test(input.value);
//     }
    
// });


function validation() {
    let sendform = document.getElementById("form");
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;

    let pattern = "/^(\w|\.)+@(\w\.)?\w+\.[A-z]{2,}/" ;

if (phone.match(pattern)) {
    sendform.classList.add("phone-valid");
    sendform.classList.remove("phone-invalid");
  
}else {
    sendform.classList.remove("phone-valid");
    sendform.classList.add("phone-invalid");
}
if (phone == "") {
    sendform.classList.add("phone-invalid");
    sendform.classList.remove("phone-valid");
}

let patternName = "/^[\w.]{3,}/]";

if (name.match(patternName)) {
    sendform.classList.add("name-valid");
    sendform.classList.remove("name-invalid");
}else {
    sendform.classList.remove("name-valid");
    sendform.classList.add("name-invalid");
}
if (name == "") {
    sendform.classList.add("name-invalid");
    sendform.classList.remove("name-valid");
    
}
let patternEmail = "@";

if (email.match(patternEmail)) {
    sendform.classList.add("email-valid");
    sendform.classList.remove("email-invalid");
}else {
    sendform.classList.remove("email-valid");
    sendform.classList.add("email-invalid");
}
if (email == "") {
    sendform.classList.add("email-invalid");
    sendform.classList.remove("email-valid");
    
}


}


// Отправка заявки 
// $(document).ready(function() {
// 	$('#form').submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
// 		if (document.form.name.value == '' || document.form.phone.value == '' ) {
// 			valid = false;
// 			return valid;
// 		}
// 		$.ajax({
// 			type: "POST",
// 			url: "mail/mail.php",
// 			data: $(this).serialize()
// 		}).done(function() {
// 			$('.js-overlay-thank-you').fadeIn();
// 			$(this).find('input').val('');
// 			$('#form').trigger('reset');
// 		});
// 		return false;
// 	});
// });

// // Закрыть попап «спасибо»
// $('.js-close-thank-you').click(function() { // по клику на крестик
// 	$('.js-overlay-thank-you').fadeOut();
// });

// $(document).mouseup(function (e) { // по клику вне попапа
// 	var popup = $('.popup');
// 	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
// 		$('.js-overlay-thank-you').fadeOut();
// 	}
// });

// // Маска ввода номера телефона (плагин maskedinput)
// $(function($){
// 	$('[name="phone"]').mask("+7(999) 999-9999");
// });



// // Кнопка «Наверх/Вниз»
// var lastScrollPosition = 0; 

// $('#scroll-up').click( function(){
// 	if ( $(document).scrollTop() > 0 ) {
// 		$('body').animate({scrollTop:0},1000);
// 		lastScrollPosition = $(document).scrollTop();
// 	} else {
// 		$('body').animate({scrollTop:lastScrollPosition},1000);
// 	}	
// });

// $(document).scroll( function() {
// 	if ( $(document).scrollTop() > 0 ) {
// 		$('#scroll-up').fadeIn();
// 		$('#scroll-up').text('Наверх');
// 	} else {
// 		$('#scroll-up').text('Вниз');
// 	}
// });

