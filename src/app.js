import { ui } from "./ui";
import axios from "axios";

//Get contacts on DOM load

const getContacts = () => {
  axios({
    method: "get",
    url: "http://localhost:3000/contacts"
  })
    .then(response => ui.showContacts(response.data))
    .catch(err => console.log(err));
};

document.addEventListener("DOMContentLoaded", getContacts);

//Submit contact

const addContact = e => {
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const phone = document.querySelector("#phone").value;
  const type = document.querySelector('input[name="type"]').value;

  const data = {
    name: name,
    email: email,
    phone: phone,
    type: type
  };

  axios
    .post("http://localhost:3000/contacts", data)
    .then(response => {
      ui.clearFields();
      getContacts();
    })
    .catch(err => console.log(err));

  e.preventDefault();
};
document.querySelector("#contact-form").addEventListener("submit", addContact);

//Delete contact

const deleteContact = e => {
  if (e.target.parentElement.classList.contains("delete")) {
    const id = e.target.parentElement.dataset.id;
    axios
      .delete(`http://localhost:3000/contacts/${id}`)
      .then(response => getContacts());
  }
};

document
  .querySelector("#contact-list")
  .addEventListener("click", deleteContact);

//Edit contact

const editContact = e => {
  if (e.target.parentElement.classList.contains("edit")) {
    const id = e.target.parentElement.dataset.id;
    const name =
      e.target.parentElement.parentElement.previousElementSibling
        .previousElementSibling.previousElementSibling.previousElementSibling
        .textContent;
    const email =
      e.target.parentElement.parentElement.previousElementSibling
        .previousElementSibling.previousElementSibling.textContent;
    const phone =
      e.target.parentElement.parentElement.previousElementSibling
        .previousElementSibling.textContent;
    const type =
      e.target.parentElement.parentElement.previousElementSibling
        .previousElementSibling.previousElementSibling.previousElementSibling
        .children[0].textContent;

    const data = {
      id: id,
      name: name,
      email: email,
      phone: phone,
      type: type
    };

    ui.fillForm(data);
  }
  e.preventDefault();
};

document.querySelector("#contact-list").addEventListener("click", editContact);
