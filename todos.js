// * global Vue *

var App = {
  data: function () {
    return {
      message: "Do this shit!",
      todos: [],
    };
  },
  mounted: function () {
    this.loadToDos();
  },
  methods: {
    loadToDos: function () {
      axios.get("https://jsonplaceholder.typicode.com/todos").then((response) => {
        console.log(response.data);
        this.todos = response.data;
      });
    },
    addToDos: function () {
      axios
        .post("https://jsonplaceholder.typicode.com/todos", {
          userId: 1,
          title: "eat",
          completed: false,
        })
        .then((response) => {
          console.log(response.data);
          this.todos.push(response.data);
        });
    },
  },
};

Vue.createApp(App).mount("#app");
