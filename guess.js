var App = {
  data: function () {
    return {
      message: null,
      answer: 69,
      guess: null,
      right: "Great job!",
      tooLow: "Oops, too low!",
      tooHigh: "Too High!!",
    };
  },
  methods: {
    submitGuess() {
      if (this.guess < this.answer) {
        this.message = this.tooLow;
      } else if (this.guess > this.answer) {
        this.message = this.tooHigh;
      } else if ((this.guess = this.answer)) {
        this.message = this.right;
      }
    },
  },
};

Vue.createApp(App).mount("#app");
