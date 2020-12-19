//NAvbar animation links
$('.navbar-nav a, .parallax-text a, #apresentacao a, #marca, .page-footer a').click(function(e){
	e.preventDefault();

		var id = $(this).attr('href')
		if(id.indexOf('/') == 0){
			console.log('Chegou aqui')
			$(location).attr('href', id);
		}else{
			var menuHeight = ($('nav').innerHeight() + 30),
				targetOffset = $(id).offset().top;
	
			$('html, body').animate({
				scrollTop: targetOffset - menuHeight
			}, 720);
		}
});

formulario = document.querySelector('#dados');

formulario.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
	event.preventDefault();
	document.querySelector('#enviar').remove();

	const divForm = document.querySelector('#formulario');
	const p = document.createElement('p');
	p.innerHTML = 'Carregando... Por favor, aguarde!'
	p.className = 'btn btn-primary';
	p.id = 'sendInformation'

	const divCarregando = document.createElement('div');
	divCarregando.className = 'c-loader';
	divCarregando.id = 'c-loader';


	divForm.appendChild(p);
	divForm.appendChild(divCarregando);

	email = document.getElementsByName('email')[0];
	assunto = document.getElementsByName('assunto')[0];
	mensagem = document.getElementsByName('mensagem')[0];

	const data = {
		email: email.value,
		assunto: assunto.value,
		mensagem: mensagem.value,
	}

	email.value = '';
	assunto.value = '';
	mensagem.value = '';

	

	const readyData = JSON.stringify(data)

	const ajax = new XMLHttpRequest();

	ajax.open('POST', '/envia_email');
	ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	ajax.send(readyData)

	ajax.onreadystatechange = function () {
		// O código escrito aqui será executada toda vez em que haja progresso na chamada HTTP.
		// O estado atual pode ser consultado através do `this.readyState`, que retorna um valor entre 0 e 4 (inclusive).
	  
		if (this.readyState == 4) { // Se a chamada HTTP completou
		  if (this.status == 200) { // Se o código da chamada HTTP é 200 (isto é, sucesso)
			divCarregando.remove()

			var response = JSON.parse(this.responseText);
			 // Busca a resposta da chamada

			if(response.enviado == true){
				document.querySelector('#sendInformation').className = 'btn btn-success';
				document.querySelector('#sendInformation').innerHTML = "Enviado com sucesso, agradecemos seu contato!"
			}

			if(response.enviado == false){
				document.querySelector('#sendInformation').className = 'btn btn-danger';
				document.querySelector('#sendInformation').innerHTML = "Houve um erro, tente mais tarde!"
			}
		  };
		};
	};

	


}

if(screen.width < 992){
	document.getElementById("empresa").className = "my-5";
	document.getElementById("formulario").className = "";
}

//MArca button aniamtion


