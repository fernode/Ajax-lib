function EasyHttp() {
	this.http = new XMLHttpRequest();
}

//GET
EasyHttp.prototype.get = function (url, callback) {
	this.http.open('GET', url, true);

	let self = this;
	this.http.onload = function () {
		if (self.http.status == 200) {
			callback(null, self.http.responseText);
		} else {
			callback("algo esta errado" + self.http.status)
		}
	}

	this.http.send();
}

//POST
EasyHttp.prototype.post = function (url, data, callback) {
	this.http.open("POST", url);
	this.http.setRequestHeader("Content-type", "application/json");

	const self = this;
	this.http.onload = function () {
		if (self.http.status == 200) {
			callback(null, self.http.responseText);
		}
	}

	this.http.send(JSON.stringify(data));
}

//PUT
EasyHttp.prototype.put = function (url, data, callback) {
	this.http.open("PUT", url);
	this.http.setRequestHeader("Content-type", "application/json");

	const self = this;
	this.http.onload = function () {
		if (self.http.status == 200) {
			callback(null, self.http.responseText);
		}
	}

	this.http.send(JSON.stringify(data));
}

//DELETE
EasyHttp.prototype.delete = function (url, callback) {
	this.http.open('DELETE', url, true);

	let self = this;
	this.http.onload = function () {
		if (self.http.status == 200) {
			callback(null, "Deletado com sucesso");
		} else {
			callback("algo esta errado" + self.http.status)
		}
	}

	this.http.send();
}