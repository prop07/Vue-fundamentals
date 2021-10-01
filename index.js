// check box
const practice = Vue.createApp({
  data() {
    return {
      checked: true,
      checkedNames: [],
      radioItems: "",
      select1: "",
      selected1: [],
      selected2: "A",
      options: [
        { text: "One", value: "A" },
        { text: "Two", value: "B" },
        { text: "Three", value: "C" },
      ],
      number: 0,
      content: "",
    }},
    methods: {
      hello() {
        console.log(this.checked);
      },
  },
}).mount("#practice")

const todo_app = Vue.createApp({
    data() {
      return {
        newTodoText: "",
        todos: [{ id: 1, title: "Do the dishes" }],
        nextTodoId: 4,
      };
    },
    methods: {
      addNewTodo() {
        if (this.newTodoText !== "") {
          this.todos.push({
            id: this.nextTodoId++,
            title: this.newTodoText,
          });
          this.newTodoText = "";
        }
      },
    },
  }).mount("#todoApp");

const components = Vue.createApp({
    data(){
        return{
      posts: [
          { id: 1, title: "My journey with Vue" },
          { id: 2, title: "Blogging with Vue" },
          { id: 3, title: "Why Vue is so fun" },
        ],
    }}
})
  .component("first-element", {
    data() {
      return {
        counter: 0,
      };
    },
    methods: {
      decreaseCount() {
        this.counter--;
      },
    },
    template: `
          <h3>Counter: {{counter}}</h3>
          <button @click='counter++' class='m-2 btn btn-primary'>Increase</button>
          <button @click='decreaseCount' class='m-2 btn btn-primary'>Decrease</button>
      `,
  })
  .component("blog-post", {
      props: ["title"],
      template: `<h4>{{ title }}</h4>`,
  })
  .component("blog-posts", {
    props: ["title"],
    template: `<h4>{{ title }}</h4>`,
  })
  .mount("#components");