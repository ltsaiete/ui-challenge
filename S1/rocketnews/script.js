const Storage = {
	getEmails() {
		return JSON.parse(localStorage.getItem('rocketnews:emails')) || [];
	},
	setEmails(emails) {
		localStorage.setItem('rocketnews:emails', JSON.stringify(emails));
	}
};

const Email = {
	all: Storage.getEmails(),

	add(email) {
		if (this.exists(email)) {
			return;
		}
		this.all.push(email);
		Storage.setEmails(this.all);

		alert('Email salvo com sucesso!');
	},

	exists(email) {
		if (this.all.indexOf(email) >= 0) {
			alert('Email ja existente');
			return true;
		}
		return false;
	}
};

const Form = {
	submit(event) {
		event.preventDefault();
		const email = document.querySelector('#email').value;

		Email.add(email);
	}
};
