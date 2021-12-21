const api_url = 'https://jsonkeeper.com/b/WTPZ';
let mydata = "No Details";
let app = Vue.createApp({
    data: function () {
        return {
            movies: [],
            inList: true
        };
    },
    methods: {
        async getData() {
            await fetch(api_url).then(resp => resp.json()).then(fdata => {
                console.log("fdata below: ", fdata);
                mydata = fdata;
                console.log("mydata ", mydata);
            });
        },
        async printData() {
            await this.getData();
            this.movies = mydata;
            console.log("movies ",this.movies);
        },
        getRoundrating(rating) {
            return rating.toFixed(1);
        },
        switchView() {
            this.inList = !(this.inList);
        }
    },
    beforeMount() {
        this.printData();
    }

}).mount("#app");