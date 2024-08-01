F8.component("counter-app", {
  data: () => ({
    count: 0,
    title: "Counter App",
  }),
  template: `
      <h1>{{title}}</h1>
      <h2>Đã Đếm: {{count}} lần</h2>
      <button v-on:click="count--">-</button>
      <button v-on:click="count++">+</button>
  `,
});

F8.component("header-component", {
  template: `<h1>HEADER</h1>`,
});
