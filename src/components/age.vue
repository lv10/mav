<template>

    <div class="age">
        {{ ready() }}
        <div class="Row">
            <span>{{ dob.toDateString() }} at {{ dob.toLocaleTimeString() }}</span>
        </div>

        <div class="Row">
            <div class="Column">
                <div class="Row">
                    {{ years }}
                </div>
                <div class="Row">
                    Years
                </div>
            </div>
            <div class="Column">
                <div class="Row">
                    {{ months }}
                </div>
                <div class="Row">
                    Months
                </div>
            </div>
            <div class="Column">
                <div class="Row">
                    {{ weeks }}
                </div>
                <div class="Row">
                    Weeks
                </div>
            </div>
            <div class="Column">
                <div class="Row">
                    {{ days }}
                </div>
                <div class="Row">
                    Days
                </div>
            </div>
                <div class="Row">
            </div>
        </div>

        <div class="Row">
            <div class="Column">
                <div class="Row">
                    {{ hours }}
                </div>
                <div class="Row">
                    Hours
                </div>
            </div>
            <div class="Column">
                <div class="Row">
                    {{ minutes }}
                </div>
                <div class="Row">
                    Minutes
                </div>
            </div>
            <div class="Column">
                <div class="Row">
                    {{ seconds }}
                </div>
                <div class="Row">
                    Seconds
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'age',

        data () {
            return {
                dob: new Date(2016, 11, 21, 17, 7, 0),
                days: '',
                weeks: '',
                months: '',
                years: '',
                seconds: '',
                minutes: '',
                hours: ''
            }
        },

        methods: {
            ready() {
                window.setInterval ( () => {
                    this.calDifference();
                }, 1000);
            },

            calDifference: function () {
                var now = new Date(Date.now());
                var diff = now - this.dob;

                this.hours = Math.floor(diff/1000/60/60);
                diff -= this.hours * 1000 * 60 * 60;
                this.minutes = Math.floor(diff / 1000 / 60);
                diff -= this.minutes * 1000 * 60;
                this.seconds = Math.floor(diff / 1000);
                diff -= this.seconds * 1000;

                this.days = this.floorNum(this.hours / 24);
                this.months = this.floorNum(this.days / 30);
                this.years = this.floorNum(this.months / 12);
                this.weeks = this.floorNum(this.days / 7);
            },

            floorNum: function (figure, decimals) {
                if(!decimals) decimals = 2;
                var d = Math.pow(10, decimals);
                return (parseInt(figure*d)/d.toFixed(decimals));
            }
        }
    }

</script>

<style scoped>
    .Row {
        display: table;
        width: 100%;
        table-layout: fixed;
        border-spacing: 10px;
    }

    .Column {
        display: table-cell;
        background-color: #f9f9f9;
        font-color: black;
    }

</style>
