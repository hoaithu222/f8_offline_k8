/*
const template = `<p>Hello F8</p>
<h2>Khóa học fullstack F8</h2>`;
console.log(template);
const templateEl = document.createElement("template");
templateEl.innerHTML = template;

const templateNode = templateEl.content.cloneNode(true);

templateNode.children[0].style.color = "red";

document.body.append(templateNode);


customElements.define(
  "hello-world",
  class extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.innerText = `Hello F8`;
    }
  }
);



class F8 { 
  static component(name) {
    console.log(this);
    console.log(name);
  }
}

F8.component("hello-world");



const data = {
  count: 0,
  title: "F8",
};

Object.keys(data).forEach((key) => {
  window[key] = data[key];
});
count++;
console.log(count);
console.log(title);

--> thay thế sử dụng replace
const html = `<h1>{{title}}</h1>
<h2>Đã đếm: {{count}} lần</h2>`;
var results = html.match(/{{.+?}}/g);

if (results) {
  results.forEach((result) => {
    const variableResult = result.match(/{{(.+?)}}/);
    console.log(variableResult);
  });
}


*/
