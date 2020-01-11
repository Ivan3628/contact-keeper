import { ui } from "./ui";
import axios from "axios";

//Get contacts on DOM load

const getContacts = () => {
  axios
    .get("http://localhost:3000/contacts")
    .then(data => ui.showContacts(data))
    .catch(err => console.log(err));
};

document.addEventListener("DOMContentLoaded", getContacts);
