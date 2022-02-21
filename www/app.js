const app = new Vue({
    el: '#app',
    data: {
        someString: 'HELLO',
        counter: 0,
    },
    methods: {
        some() {
            console.log('from root');
        }
    },
    mounted() {
        // console.log('root component', this);
    }
});