class F8 {
  static component(tag, componentDefinition) {
    customElements.define(
      tag,
      class extends HTMLElement {
        constructor() {
          super();
          if (componentDefinition.data) {
            this.data = componentDefinition.data();
          } else {
            this.data = {};
          }
          this.template = componentDefinition.template;
        }

        connectedCallback() {
          this.render();
          this.addEventListeners();
        }

        render() {
          if (!this.shadowRoot) {
            this.attachShadow({ mode: "open" });
          }
          this.shadowRoot.innerHTML = this.replaceTemplate(
            this.template,
            this.data
          );
        }

        replaceTemplate(template, data) {
          return template.replace(/{{(.+?)}}/g, (match, p1) => {
            const key = p1.trim();
            return key in data ? data[key] : match;
          });
        }

        addEventListeners() {
          const shadowRoot = this.shadowRoot;
          const buttons = shadowRoot.querySelectorAll("[v-on\\:click]");
          buttons.forEach((button) => {
            const method = button.getAttribute("v-on:click").trim();
            button.removeAttribute("v-on:click");
            button.addEventListener("click", () => {
              this.updateData(method);
            });
          });
        }

        updateData(method) {
          if (method === "count++") {
            this.data.count++;
          } else if (method === "count--") {
            if (this.data.count > 0) {
              this.data.count--;
            }
          }
          this.render();
          this.addEventListeners();
        }
      }
    );
  }
}
