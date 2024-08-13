var title = document.querySelector(".title");
HTMLElement.prototype.css = function (style) {
  Object.assign(this.style, style);
};
title.css({
  color: "red",
  background: "yellow",
  fontSize: "2rem",
});

// Web Component --> phải đặt 2 từ và phải có ngăn cách dấu gạch ngang

// Bước 1:Khởi tạo class kế thừa từ HTMLElement

class HelloWorld extends HTMLElement {
  static observedAttributes = ["color", "size"];
  constructor() {
    super();
    this.innerHTML = `<h1>Học lập trình không khó</h1>`;
  }
  connectedCallback() {
    console.log("connectedCallback");
    this.innerHTML = `<h1>Học lập trình không khó <button>Click me</button> </h1>`;
    var btn = this.querySelector("button");
    var _this = this;
    btn.addEventListener("click", function () {
      _this.setAttribute("color", "red");
      _this.setAttribute("size", "M");
    });
  }
  disconnectedCallback() {
    console.log(" disconnectedCallback");
  }
  attributeChangedCallback(name, oldValue, newValue) {
    console.log("attributesChangedCallback", name, oldValue, newValue);
  }
}
// Bước 2:Đăng kí component
customElements.define("hello-world", HelloWorld);

var btn = document.querySelector(".btn");
var root = document.querySelector("#root");
var isShow = false;
var helloWorldEl = document.createElement("hello-world");

btn.addEventListener("click", function () {
  helloWorldEl.innerText = "Hello";
  root.append(helloWorldEl);
  if (!isShow) {
    root.append(helloWorldEl);
    isShow = true;
  } else {
    helloWorldEl.remove();
    isShow = false;
  }
});

class TodoApp extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
    this.loadStyle();
    this.change();
    this.addTodo();
  }

  loadStyle() {
    const style = document.createElement("style");
    style.textContent = `
      .todo-app {
        border: 1px solid red;
        padding: 20px;
      }
      .light-btn, .dark-btn {
        margin: 5px;
      }
      input, button {
        margin: 5px;
      }
    `;
    this.shadow.append(style);
  }

  change() {
    const todoApp = this.shadow.querySelector(".todo-app");
    const lightBtn = this.shadow.querySelector(".light-btn");
    const darkBtn = this.shadow.querySelector(".dark-btn");

    lightBtn.addEventListener("click", () => {
      todoApp.style.background = "#fff";
      todoApp.style.color = "#000";
    });

    darkBtn.addEventListener("click", () => {
      todoApp.style.background = "#000";
      todoApp.style.color = "#fff";
    });
  }

  addTodo() {
    const inputEl = this.shadow.querySelector("input");
    const ul = this.shadow.querySelector("ul");
    const addEl = this.shadow.querySelector("button.add");

    addEl.addEventListener("click", () => {
      const value = inputEl.value;
      if (!value) {
        alert("Vui lòng nhập giá trị.");
        return;
      }

      const li = document.createElement("li");
      li.textContent = value;
      ul.appendChild(li);
      inputEl.value = "";
    });
  }

  render() {
    this.shadow.innerHTML = `
      <div class="todo-app">
        <h1>Todo App</h1>
        <div>
          <input type="text" placeholder="Enter your todo" />
          <ul>
            <li>Todo 1</li>
            <li>Todo 2</li>
            <li>Todo 3</li>
          </ul>
          <button class="add">Add</button>
        </div>
        <button class="light-btn">Light Theme</button>
        <button class="dark-btn">Dark Theme</button>
      </div>
    `;
  }
}

customElements.define("todo-app", TodoApp);

// // tạo shadowRoot --> đóng gói

// var boxEl = document.querySelector(".box");
// var shadowRoot = boxEl.attachShadow({ mode: "open" });
// shadowRoot.innerHTML = `<h1>Học lập trình không khó </h1>`;
// var style = document.createElement("style");
// style.textContent = `h1{
// color:red;}`;
// shadowRoot.append(style);

// từ boxEl thay đổi text h1
// var h1 = boxEl.shadowRoot.querySelector("h1");
// console.log(h1);

// khi element đã được attachShadow ---> Không loại bỏ shadow , không attach lại được nữa

// Buổi sau : Template, Slot,,Custom 1 thư viện
