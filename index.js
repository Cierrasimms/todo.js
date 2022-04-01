var App = {
  data: function () {
    return {
      message: "Pewpewpew",
      name: "Cierra",
      message2: "PewPew",
    };
  },
  methods: {
    changeColor: function () {
      const box = document.querySelector("#box");
      const red = Math.floor(Math.random() * 256 + 1);
      const green = Math.floor(Math.random() * 256 + 1);
      const blue = Math.floor(Math.random() * 256 + 1);

      box.style.background = "rgb(" + red + ", " + green + ", " + blue + ")";
    },
  },
};

Vue.createApp(App).mount("#app");
