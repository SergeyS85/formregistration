(function(){ 
	        'use strict';

	var h1            = document.querySelector('h1');
	var formContainer = document.querySelector('.form_container');
	var close         = document.querySelector('.close');
	var eye           = document.querySelector('.show_password');
	var password      = document.querySelector('.password');
  var login         = document.querySelector('.username');
  var passwordAjax  = document.querySelector('.password');
  
	function startEvent(){
		h1.addEventListener('click',function(e){
      formContainer.classList.remove('form_hide');
	  })
	  close.addEventListener('click',function(){
		  formContainer.classList.add('form_hide');
	  })
	  eye.onclick = function(){
			eye.classList.toggle('hide_password_eye')
			if(password.getAttribute('type') == 'password') password.setAttribute('type','text');
			else{
				password.setAttribute('type','password')
			}
	  }
	} //startEvent

	function formCheck(){
		formContainer.addEventListener('input',function(event){
			if(event.target.value.length > 12){
				event.target.style.border = '2px solid red'
			}
			else{
				event.target.style.border = null;
			}
		})
	} //formCheck

	startEvent()
	formCheck()

   // /////////////////////////////////////////////////////
	// ajax sending
	
	var send_btn     = document.querySelector('.send_btn');
  var done         = document.querySelector('.done');
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200 ){
			done.innerHTML = this.responseText;	
	  }
  }
	send_btn.addEventListener('click',function(){
		let body = new FormData()
    body.append('login',login.value);
    body.append('pass',passwordAjax.value);
		xhr.open('POST','http://formregistration/php/index.php');
		xhr.send(body)
	}) // ajax sending /////////////////////////////////////////////////

	
})()


