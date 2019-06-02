window.onload = () => {
    //add event listener to prevent the default behavior
    const mouseOnlyNumberInputField = document.getElementById("el");
    mouseOnlyNumberInputField.addEventListener("keypress", (event) => {
      event.preventDefault();
    });
  }

new Vue({
    el: '#app',
    data: {
        json: [],
        sortBy: 'rank',
        orderBy: 'asc',
        size: 5,
        countPage: 0,
        currentPage: 1
    },
    created: function () {
    fetch("data.json")
        .then(r => r.json())
        .then(json => {
        this.json=json;
        this.countPage = Math.ceil(json.length / this.size); //мат сейл округляет до верхней границы
        });
    },

    methods: {
        sort: function(name) {
            if(name == this.sortBy){
                if(this.orderBy == 'asc'){
                    this.orderBy = 'desc';
                }
                else{
                    this.orderBy = 'asc';
                }
            }
            this.sortBy = name; //если другой столбец выбран 
        },
        resize: function() {
            size=document.getElementById("quantity");
        }
    },

    computed: {
        sortedData: function(){
            return this.json.sort((a,b) => { //анонимная ф-я; a,b объекты сравнения
                let k = 1;
                if(this.orderBy == 'desc'){ //вкл режим деск -> сравнение в обратном порядке
                    k = -1;
                }

                if(a[this.sortBy] < b[this.sortBy]){
                    k *= -1;
                    return k;
                }
                if(a[this.sortBy] > b[this.sortBy]){
                    k *= 1;
                    return k;
                }
                return 0; //два значения одинаковы
            }).filter((row, index) => {
                let start = (this.currentPage - 1) * this.size;
                let end = this.currentPage * this.size;
                if(index >= start && index < end){
                    return true;
                }
            });
        }
    }

});