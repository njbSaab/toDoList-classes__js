import { NoteList } from "./NoteList.js";

export class ToDo {
  _currentUser = "todo";
  _users = [];
  _notes = null;
  constructor(container, currentTitle ='list deals', currentKey = 'todo', currentDef= []) {
    this.container = container;

    this.nav = document.createElement("nav");
    this.title = document.createElement("h2");
    this.form = document.createElement("form");
    this.buttonWrapper = document.createElement("div");
    this.input = document.createElement("input");
    this.button = document.createElement("button");
    this.list = document.createElement("div");

    this.container.classList.add("pt-2", "pt-4");
    this.nav.classList.add("mb-5", "btn-group");
    this.form.classList.add("input-group", "mb-3");
    this.input.classList.add("form-control");
    this.input.placeholder = "Enter your new dial";
    this.buttonWrapper.classList.add("input-group-append");
    this.button.classList.add("btn", "btn-primary");
    this.button.textContent = "add deal";
    this.button.disabled = true;

    this.buttonWrapper.append(this.button);
    this.form.append(this.input);
    this.form.append(this.buttonWrapper);
    this.container.append(this.nav);
    this.container.append(this.title);
    this.container.append(this.form);
    this.container.append(this.list);

    this.input.addEventListener("input", () => {
      this.button.disabled = false;
      if (this.input.value.length === 0) {
        this.button.disabled = true;
      }
    });

    this.form.addEventListener("click", (e) => {
      e.preventDefault();

      if (!this.input.value) {
        return;
      }
      if (this._notes) {
        this._notes.add(this.input.value);
      }
      this.button.disabled = true;
      this.input.value = "";
    });

    this.addUser(currentTitle,currentKey,currentTitle)
    
  }
  set currentUser(value) {
    this._currentUser = value;

    let currentUser = null;
    for (const user of this._users) {
      if (user.key === value) {
        currentUser = user;
        user.button.classList.add("active");
      } else {
        user.button.classList.remove("active");
      }
    }
    this.title.textContent = currentUser.title;

    this._notes = new NoteList(this.list, value, currentUser.def);
  }
  get currentUser() {
    return this._currentUser;
  }
  addUser(title, key, def = []) {
    let button = document.createElement("button");
    button.classList.add("btn", "btn-outline-primary");
    button.type = "button";
    button.textContent = title;

    button.addEventListener("click", () => {
      this.currentUser = key;
    });

    this._users.push({
      title: title,
      key: key,
      def: def,
      button: button,
    });

    this.nav.append(button);
  }

  removeUser(ket){
     if(this._users.length <= 1){
        return
     }

     for(let i = 0; i < this._users.length; i++){
        if(this._users[i].key == key){
           this._users[i].button.remove()
           this._users.splice(i, i)
        }
     }

     if(this._currentUser == key){
         this.currentUser = this._users[0].key
     }
  }
}
