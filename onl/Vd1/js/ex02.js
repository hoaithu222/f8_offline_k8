// // class

// class Person {
//     name = 'Hoàng An';
//     email = 'Hoangan@gmail.com'
//     getName() {
//         return this.name;
//     }
//     getEmail() {
//         return this.email;
//     }
//     constructor() {
//         console.log("Person constructor")
//     }
// }
// class User extends Person {

//     // phương thức khỏi tạo --> được chạy ngay sau khi đối tượng được khỏi tạo

//     constructor() {
//         super();
//         console.log("User Constructor")
//     }
//     getInfo() {
//         return `${this.name} ${this.email}`;
//     }
// }
// var user = new User();
// console.log(user.getInfo());
// var person = new Person();
// console.log(person);

// // Tạo class kế thừa từ HTMLElement
// class HelloWorld extends HTMLElement {
//     constructor() {
//         super();
//         this.innerHTML = "Học Js không khó";
//     }
// }
// console.dir(HelloWorld);

// // đăng kí helloworld trỏ thành 1 thẻ html

// customElements.define("hello-world", HelloWorld);

// ---> Web component

/* web component

Chia nhỏ các thành phần của trang web thành các thẻ html riêng  biệt để dễ dàng tái sử dụng 
- header 
- footer
- product 
-==> Khi nào cần ?
+ sử dụng ở nhiều nơi 
+ Linh hoạt (Chỉ cần gọi ra là nó chạy )
+ Logic và giao diện phức tạp

-- các bước để định nghĩa component
- Xây dựng class tương ứng(Kế thừa từ HTMLELement)
- Xác định các logic cần có trong component
-Đăng kí html (lưu ý tên thẻ phải có 2 từ và nối nhau bằng gạch ngang)

lifecycle callback 
- VÒng đời khi 1 component được tạo ra đến khi nó bị loại khỏi DOM 
- 3 giai đoạn : phương thức
+Khởi tạo 
+Cập nhật
+Loại bỏ



Khi làm việc với component ==> giải quyết vấn đề css 
component là đóng gói nên viết css  
===> giải quyết Scope Stylesheet ===> SHADOWDOM


*/
// class TodoApp extends HTMLElement {
//     static observedAttributes = ["data-count"];
//     connectedCallback() {
//         // console.log("component được đưa vào dom");

//         this.innerHTML = `
//         <h1>Todo App</h1>
//         <ul>
//            <li>Todo1</li>
//            <li>Todo2</li>
//            <li>Todo3</li>
//            <li>Todo4</li>
//            <li>Todo5</li>
//         </ul>
//         <form>
//         <input type = "text" placeholder = "Name....."/>
//         <button type = "submit">Submit</button>
//         </form>
//         `
//         var input = document.querySelector("button[type = submit]");
//         var ul = document.querySelector("ul");
//         var btn = document.querySelector("click", function (e) {

//             var li = document.createElement("li");
//             li.innerText = input.value;
//             ul.append(li);
//         });
//     }
//     // disconnectedCallback() {
//     //     console.log("component bị loại bỏ");
//     // }
//     // attributeChangedCallback(name, oldValue, newValue) {
//     //     console.log(`Thay đổi thuôc tính ${name}, giá trị cũ ${oldValue},giá trị mới ${newValue}`);
//     // }
// }
/*
class TodoApp extends HTMLElement {
    static get observedAttributes() {
        return ["data-count"];
    }

    connectedCallback() {
        this.render();

        // Lấy các phần tử cần thiết
        const input = this.querySelector("input[type=text]");
        const form = this.querySelector("form");
        const ul = this.querySelector("ul");

        // Thêm sự kiện submit vào form
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            // Lấy giá trị của input
            const value = input.value.trim();

            // Nếu input không rỗng, thêm một mục mới vào danh sách
            if (value) {
                const li = document.createElement("li");
                li.textContent = value;
                ul.appendChild(li);

                // Reset input sau khi thêm
                input.value = "";
            }
        });
    }

    render() {
        this.innerHTML = `
        <h1>Todo App</h1>
        <ul>
          <li>Todo1</li>
          <li>Todo2</li>
          <li>Todo3</li>
          <li>Todo4</li>
          <li>Todo5</li>
        </ul>
        <form>
          <input type="text" placeholder="Name....."/>
          <button type="submit">Submit</button>
        </form>
      `;
    }
}

*/
class TodoApp extends HTMLElement {
  //   static get observedAttributes() {
  //     return ["data-count"];
  //   }
  shadowRoot = this.attachShadow({ mode: "open" });

  connectedCallback() {
    this.render();
    this.addEvent();
  }
  render() {
    this.shadowRoot.innerHTML = `
    <div class= "todo-app">
    <h1>Todo App</h1>
    <ul>
       <li>Todo1</li>
       <li>Todo2</li>
       <li>Todo3</li>
       <li>Todo4</li>
       <li>Todo5</li>
    </ul>
    <form>
    <input type = "text" placeholder = "Name....."/>
    <button type = "submit">Submit</button>
    </form></div>
    <style>
        .todo-app{
        padding:10px;
        background:pink;
        }
    </style>
    
    `;
  }

  addEvent() {
    var _this = this;
    var form = this.shadowRoot.querySelector("form");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      console.log("Submit");
      _this.handleAddTodo(e.target);
    });
  }
  handleAddTodo(event) {
    var nameEl = event.querySelector("input");
    var name = nameEl.value;
    var ul = this.shadowRoot.querySelector("ul");
    var li = document.createElement("li");
    li.innerText = name;
    ul.append(li);
    console.log(name);
    nameEl.value = "";
  }
}

customElements.define("todo-app", TodoApp);
// var btn = document.querySelector(".toggle");
// var todoAppEl = document.querySelector("todo-app");
// btn.addEventListener("click", function () {
//     // todoAppEl.remove();
//     todoAppEl.dataset.count++;
// });
