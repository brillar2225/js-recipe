// eslint-disable-next-line no-unused-vars
const atm = new Vue({
  el: "#container",
  data: {
    inputValue: "",
    condition: 0,
    items: [],
    noclick: true,
  },
  methods: {
    deposit: function() {
      this.condition += Number(this.inputValue)
      this.items.push({
        date: new Date(),
        type: "入金",
        money: this.inputValue,
      })
      this.checkMethod()
    },
    withdraw: function() {
      this.condition -= Number(this.inputValue)
      this.items.push({
        date: new Date(),
        type: "出金",
        money: this.inputValue,
      })
      this.checkMethod()
    },
    checkMethod: function() {
      if (this.counting == true) {
        this.noclick = true
      } else {
        this.noclick = false
      }
    },
  },

  computed: {
    counting: function() {
      return this.inputValue > this.condition
    },
  },
})
