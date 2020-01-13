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
  const name = document.querySelector("#name");
  const email = document.querySelector("#email");
  const phone = document.querySelector("#phone");
  const type = document.querySelectorAll('input[name="type"]');

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
