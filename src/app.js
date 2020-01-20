import { ui } from "./ui";
import axios from "axios";

//Get contacts on DOM load

const getContacts = () => {
  axios
    .get("http://localhost:3000/contacts")
    .then(response => ui.showContacts(response.data))
    .catch(err => console.log(err));
};

document.addEventListener("DOMContentLoaded", getContacts);

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
        .children[0].textContent;
    const email =
      e.target.parentElement.parentElement.previousElementSibling
        .previousElementSibling.previousElementSibling.textContent;
    const phone =
      e.target.parentElement.parentElement.previousElementSibling
        .previousElementSibling.textContent;
    const type =
      e.target.parentElement.parentElement.previousElementSibling
        .previousElementSibling.previousElementSibling.previousElementSibling
        .children[1].textContent;

    const data = {
      id: id,
      name: name,
      email: email,
      phone: phone,
      type: type
    };

    ui.fillForm(data);
    ui.showCancelButton();
    ui.showSubmitButton();

    console.log(data);
  }
  e.preventDefault();
};

document.querySelector("#contact-list").addEventListener("click", editContact);

//Abort edit

const abortEdit = () => {
  ui.clearFields();
  ui.removeCancelButton();
};

document.querySelector("#cancel-button").addEventListener("click", abortEdit);

//Submit contact

const submitContact = e => {
  const id = document.querySelector("#id").value;
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const phone = document.querySelector("#phone").value;
  const type = document.querySelector('input[name="type"]').value;
  const submitButton = document.querySelector("#submit-button");

  const data = {
    name: name,
    email: email,
    phone: phone,
    type: type
  };

  if (submitButton.classList.contains("update")) {
    axios
      .put(`http://localhost:3000/contacts/${id}`, data)
      .then(response => {
        getContacts();
        ui.clearFields();
        ui.removeCancelButton();
        ui.removeSubmitButton();
      })
      .catch(err => console.log(err));
  } else {
    axios
      .post("http://localhost:3000/contacts", data)
      .then(response => {
        getContacts();
        ui.clearFields();
      })
      .catch(err => console.log(err));
  }
  e.preventDefault();
};

document
  .querySelector("#submit-button")
  .addEventListener("click", submitContact);

//Filter contacts

const filterContacts = e => {
  getContacts();

  //Get filter value
  const text = e.target.value.toLowerCase();

  //Get contacts
  document.querySelectorAll(".contact-row").forEach(contact => {
    const contactName =
      contact.children[0].children[0].children[0].children[0].children[0]
        .children[0].textContent;

    if (contactName.toLowerCase().indexOf(text) != -1) {
      contact.style.display = block;
    } else {
      contact.style.display = none;
    }
  });
};

document.querySelector("#filter").addEventListener("keyup", filterContacts);
