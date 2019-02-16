const http = new EasyHttp();

// http.get('https://jsonplaceholder.typicode.com/posts', function (err, posts) {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log(posts);
// 	}
// });


//POST
const data = {
	title: "Post de teste",
	body: "Aqui estamos fazendo um teste porque sim"
}

/*
http.post('https://jsonplaceholder.typicode.com/posts', data, function (err, conteudo) {
	if (err) {
		console.log(err);
	} else {
		console.log(conteudo);
	}
}) */


//PUT
/* http.put("https://jsonplaceholder.typicode.com/posts/1", data, function (err, data) {
	if (err) {
		console.log(err);
	} else {
		console.log(data);
	}
}) */

//DELETE
http.delete('https://jsonplaceholder.typicode.com/posts/1', function (err, posts) {
	if (err) {
		console.log(err);
	} else {
		console.log(posts);
	}
});