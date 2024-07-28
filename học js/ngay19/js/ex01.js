var F8 = {
  create: function (name, callback) {
    class Component extends HTMLElement {
      constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.attributesCallback = {
          "v-length": "applyAttributesLength",
        };
        this.data = {};
      }
      connectedCallback() {
        this.shadowRoot.innerHTML = callback.call(this.shadowRoot);
        this.applyAttributes(this.shadowRoot);
      }
      applyAttributes(parentEl) {
        var elementList = parentEl.children;
        if (elementList.length) {
          Array.from(elementList).forEach(function (element) {
            const attributesList = element.attributes;
            for (var i = 0; i < attributesList.length; i++) {
              var attributesName = attributesList[i].name;
              var attributesValue = attributesList[i].value;
              var callbackName = this.attributesCallback[attributesName];
              if (callbackName) {
                this[callbackName].call(this, element, attributesValue);
              }
              if (attributesName === "v-data") {
                var dataObj = new Function(`return ${attributesValue}`).call();
                if (
                  typeof dataObj === "object" &&
                  !Array.isArray(dataObj) &&
                  dataObj !== null
                ) {
                  Object.assign(this.data, dataObj);
                }
              }
              if (attributesName === "v-text" && attributesValue) {
                element.innerText = this.data[attributesValue] ?? "";
              }
              if (attributesName.startsWith("v-on:")) {
                const eventName = attributesName.replace("v-on:", "");
                element.addEventListener(
                  eventName,
                  function (e) {
                    var argumentNameList = ["event"];
                    var argumentValueList = [e];
                    Object.keys(this.data).forEach(
                      function (key) {
                        argumentNameList.push(key);
                        argumentValueList.push(this.data[key]);
                      }.bind(this)
                    );
                    var func = new Function(
                      ...argumentNameList,
                      attributesValue
                    );
                    func.apply(this, argumentValueList);
                  }.bind(this)
                );
              }
            }
            // Đệ quy
            if (element.children.length) {
              this.applyAttributes(element);
            }
          }, this);
        }
      }
      applyAttributesLength(element, value) {
        var nextElement = element.nextSibling;
        var parentEl = element.parentNode;
        for (var i = 0; i < value; i++) {
          var newElement = element.cloneNode(true);
          if (!nextElement) {
            parentEl.append(newElement);
          } else {
            parentEl.insertBefore(newElement, nextElement);
          }
        }
        element.remove();
      }
    }
    customElements.define(name, Component);
  },
};

var HelloWorld = F8.create("hello-world", function () {
  return `
    <div v-data="{count:0,title:'Học Js không khó'}">
      <h1>Hello World <span v-text="count"></span></h1>
      <br>
      <h2 v-text="title"></h2>
      <button v-on:click="this.data.count++; this.querySelector('span').innerText = this.data.count">Click me</button>
      <p>Hello</p>
      <ul>
        <li v-length="5">Item</li>
      </ul>
      <h2 v-length="2">Hello</h2>
    </div>
  `;
});

//Buổi sau :Custom Event, new Event Event()
