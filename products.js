/* global Vue, axios */

var App = {
  data: function () {
    return {
      message: "Products available",
      products: [],
    };
  },
  methods: {
    loadProducts: function () {
      axios.get("http://localhost:3000/products").then((response) => {
        console.log(response.data);
        this.products = response.data;
      });
    },
    addProducts: function () {
      axios
        .post("http://localhost:3000/products", {
          name: "Pewpewpew",
          description: "it pews",
          price: "200",
        })
        .then((response) => {
          console.log(response.data);
          this.products.push(response.data);
        });
    

Vue.createApp(App).mount("#app");
