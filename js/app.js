var app = new Vue({

    el: '#app',

    data: {
      birthday: new Date(2016, 11, 21, 17, 07, 00),
      daysAlive: '',
      weeksAlive: '',
      monthsAlive: '',
      yearsAlive: '',
      secondsAlive: '',
      minutesAlive: '',
      hoursAlive: '',
      title: "Maria Aracelly's Tracker"

    },

    mounted: function() {
      this.calDifference();
    },

    methods: {

      ready() {
        window.setInterval ( () => {
          this.calDifference();
        }, 1000);
      },

      calDifference: function () {
        var now = new Date(Date.now());
        var diff = now - this.birthday;

        this.hoursAlive = Math.floor(diff / 1000 / 60 / 60);
        diff -= this.hoursAlive * 1000 * 60 * 60;
        this.minutesAlive = Math.floor(diff / 1000 / 60);
        diff -= this.minutesAlive * 1000 * 60;
        this.secondsAlive = Math.floor(diff / 1000);
        diff -= this.secondsAlive * 1000;

        this.daysAlive = this.floorNum(this.hoursAlive / 24);
        this.monthsAlive = this.floorNum(this.daysAlive / 30);
        this.yearsAlive = this.floorNum(this.monthsAlive / 12);
        this.weeksAlive = this.floorNum(this.daysAlive / 7);

      },

      floorNum: function(figure, decimals) {
        if (!decimals) decimals = 2;
        var d = Math.pow(10, decimals);
        return (parseInt(figure*d)/d).toFixed(decimals);
      }
    }
})
