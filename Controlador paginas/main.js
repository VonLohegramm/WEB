function mudar(qtd)
{
	//Pega a URL atual
	var url = document.location.href;
	//Pega a posição onde se encontra a substring 'page-'
	var aux = url.indexOf("page-");

	if(aux == -1)
	{
		url = url + "page-1";
		var aux = url.indexOf("page-");
	}

	//Pegamos apenas a substring 'page-' + '?'(? é o numero)
	var aux2 = url.substring(aux, url.lenght);

	//Encontramos o numero da pagina
	var num = aux2.replace(/[^0-9]/g, '');
	//Converte a string para inteiro
	num  = parseInt(num);
	num = num + qtd;

	//Aqui criamos a string da proxima paina
	var stringFinal = url.replace(aux2, "page-" + num);

	if(qtd == 1)
	{
		//Pegamos o texto do botão 'Proximo'
		var a = document.getElementsByClassName('pageNav-jump pageNav-jump--next')[0];

		//Caso exista exista o botão, pularemos para proxima pagina
		if(a.innerText != "")
		{
			window.location = stringFinal;
		}	
	}
	else if(qtd == -1)
	{
		//Pegamos o texto do botão 'Proximo'
		var a = document.getElementsByClassName('pageNav-jump pageNav-jump--prev')[0];

		//Caso exista exista o botão, pularemos para proxima pagina
		if(a.innerText != "")
		{
			window.location = stringFinal;
		}
	}


}

document.querySelector('body').addEventListener('keydown', function(event){
		if(event.keyCode == 39)
			mudar(1);
		if(event.keyCode == 37)
			mudar(-1);
	});