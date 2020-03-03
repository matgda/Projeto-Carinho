function postCrianca() {

	var nome = document.getElementById('nome_crianca').value

	var idade = document.getElementById('idade_crianca').value

	var sexo = document.getElementById('sexo_crianca').value

	var carteiraIdentidade = document.getElementById('carteira_identidade').value

	var image = document.getElementById('image_crianca').value

	var post = { nome: nome, idade: idade, sexo: sexo, carteiraIdentidade: carteiraIdentidade, image: image }

	console.log(image);

	var json = JSON.stringify(post)

	const url = "http://localhost:8080/api/aluno"

	fetch(url, {
		method: "POST",
		headers: { 'Content-Type': 'application/json' },
		body: json
	});

	document.getElementById('nome_crianca').value = ''

	document.getElementById('sexo_crianca').value = ''

	document.getElementById('carteira_identidade').value = ''

	document.getElementById('idade_crianca').value = ''
	
}



