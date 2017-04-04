<template>

    <div class="growth">
        <div class="Row">
            <div class="Column">
                <div class="Row">{{ weights[weights.length-1].measurement }}</div>
                <div class="Row">Last Weight</div>
                <div class="Row">
                    <form v-on:submit="addNewWeight">
                        <input type="text" v-model="newWeight.measurement" placeholder="Enter New Weight">
                        <input type="text" v-model="newWeight.age" placeholder="Enter Age">
                        <input type="submit" value="Submit">
                    </form>
                </div>
            </div>
            <div class="Column">
                <div class="Row" v-for="weight in weights">
                    {{ weight.measurement }} pounds at {{ weight.age }}
                    <button v-on:click="deleteRecord(weight, 'w')">X</button>
                </div>
            </div>
        </div>

        <div class="Row">
            <div class="Column">
                <div class="Row">{{ heights[heights.length-1].measurement }}</div>
                <div class="Row">Last Height</div>
                <div class="Row">
                    <form v-on:submit="addNewHeight">
                        <input type="text" v-model="newHeight.measurement" placeholder="Enter New Weight">
                        <input type="text" v-model="newHeight.age" placeholder="Enter Age">
                        <input type="submit" value="Submit">
                    </form>
                </div>

            </div>
            <div class="Column">
                <div class="Row" v-for="height in heights">
                    {{ height.measurement }} pounds at {{ height.age }}
                    <button v-on:click="deleteRecord(height, 'h')">X</button>
                </div>
            </div>
        </div>


    </div>

</template>

<script>
    export default {
        name: 'growth',

        data () {
            return {
                weights: [
                    {measurement: "8.9 Oz", age: "1 day"},
                    {measurement: "8.1 Oz", age: "3 days"},
                    {measurement: "9.7 Oz", age: "15 days"},
                    {measurement: "10.7 Oz", age: "7 weeks"}
                ],
                heights: [
                    {measurement: "17 Inches", age: "1 day"},
                    {measurement: "19 Inches", age: "1 month"},
                    {measurement: "23 Inches", age: "2 months"},
                    {measurement: "26 Inches", age: "4 months"}
                ],
                newWeight: {},
                newHeight: {}
            }
        },

        methods: {
            addNewWeight: function (e) {
                this.weights.push({
                    measurement: this.newWeight.measurement,
                    age: this.newWeight.age
                });
                e.preventDefault();
            },

            addNewHeight: function (e) {
                this.heights.push({
                    measurement: this.newHeight.measurement,
                    age: this.newHeight.age
                });
                e.preventDefault();
            },

            deleteRecord: function (record, recordType) {
                if ( recordType === 'w' ) {
                    this.weights.splice(this.weights.indexOf(record), 1);
                } else {
                    this.heights.splice(this.heights.indexOf(record), 1);
                }
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
