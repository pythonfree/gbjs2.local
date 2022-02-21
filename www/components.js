const childElement = {
    template: `<p>some text in child element</p>`,
};


Vue.component('some-el', {
    props: ['title', 'counter'],
    components: {
        childElement,
    },
    methods: {
        some() {
            console.log('from child');
        }
    },
    template: `<div> 
                  <h2 @click="some">{{title}}</h2>
                  <h2 @click="$emit('parent')">{{title}}</h2>
                  <button @click="counter++">Increase</button>
                  <p>{{counter}}</p>
                  <child-element />
               </div>`,
    data() {
        return {
        };
    },
    mounted() {
        // console.log('child component', this);
    }
})