function handleSubmit(event) {
  event.preventDefault();
  const email = document.querySelector("#email").value;
  const emails = JSON.parse(localStorage.getItem("rocketnews:emails")) || [];

  if (emails.indexOf(email) >= 0) {
    alert("Email ja existente");
    return 0;
  }
  emails.push(email);
  console.log(emails);

  localStorage.setItem("rocketnews:emails", JSON.stringify(emails));

  alert("Email salvo com sucesso!");
}
