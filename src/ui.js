class UI {
  constructor() {
    this.contactList = document.querySelector("#contact-list");
    this.nameInput = document.querySelector("#name");
    this.emailInput = document.querySelector("#email");
    this.phoneInput = document.querySelector("#phone");
  }

  showContacts(contacts) {
    let output = "";
    console.log(contacts);

    contacts.forEach(contact => {
      output += `
      <divclass="row">
      <div class="col s12">
      <div class="card">
      <div class="card-content">
      <p class="card-title indigo-text text-darken-4">
      ${contact.name}
      <a class="waves-effect indigo darken-4 btn right">${contact.type}</a>
      </p>
      <p><i class="fas fa-envelope-open"></i> ${contact.email}</p>
      
      <p><i class="fas fa-phone"></i> ${contact.phone}</p>
      <br>
      <p>
      <a class="waves-effect grey darken-4 btn-flat edit" data-id="${contact.id}"><span class="white-text">Edit</span></a>
  <a class="waves-effect red darken-2 btn-flat delete" data-id="${contact.id}"><span class="white-text">Delete</span></a>
      </p>
      </div>
      </div>
      </div>
      </div>`;
    });
    this.contactList.innerHTML = output;
  }

  clearFields() {
    this.nameInput.value = "";
    this.emailInput.value = "";
    this.phoneInput.value = "";
  }
}

export const ui = new UI();
