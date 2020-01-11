class UI {
  constructor() {
    this.contactList = document.querySelector("#contact-list");
  }

  showContacts(contacts) {
    let output = "";

    contacts.forEach(contact => {
      output += `
      <divclass="row">
      <div class="col s12">
      <div class="card">
      <div class="card-content">
      <p>
      <span class="card-title indigo-text text-darken-4">${contact.name}></span>
      </p>
      </div>
      </div>
      </div>
      </div>
      
      `;
    });
    this.contactList.innerHTML = output;
  }
}

export const ui = new UI();
