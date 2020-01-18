class UI {
  constructor() {
    this.contactList = document.querySelector("#contact-list");
    this.idInput = document.querySelector("#id");
    this.nameInput = document.querySelector("#name");
    this.emailInput = document.querySelector("#email");
    this.phoneInput = document.querySelector("#phone");
    this.radioInput = document.querySelector('input[name="type"]');
    this.contactForm = document.querySelector("#contact-form");
    this.cancelButton = document.querySelector("#cancel-button");
    this.submitButton = document.querySelector("#submit-button");
  }

  showContacts(contacts) {
    let output = "";

    contacts.forEach(contact => {
      output += `
      <divclass="row">
      <div class="col s12">
      <div class="card">
      <div class="card-content">
      <p class="card-title indigo-text text-darken-4"><span>${contact.name}</span>
      
      <a class="waves-effect indigo darken-4 btn right"> ${contact.type}</a>
      
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
    this.contactForm.reset();
  }

  fillForm(data) {
    this.idInput.value = data.id;
    this.nameInput.value = data.name;
    this.emailInput.value = data.email;
    this.phoneInput.value = data.phone;
    this.radioInput.value = data.type;
  }

  showCancelButton() {
    this.cancelButton.style.display = "block";
  }

  removeCancelButton() {
    this.cancelButton.style.display = "none";
  }

  updateButton() {
    this.submitButton.className = "btn btn-block green darken-2 update";
  }

  removeUpdateButton() {
    this.submitButton.className = "btn btn-block indigo darken-4";
  }
}

export const ui = new UI();
