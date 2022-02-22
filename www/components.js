
Vue.component('component-one', {
    template: `<div>component-one = Racanas ridetis in primus lentia!</div>`
});
Vue.component('component-two', {
    template: `<div>component-two = Our true harmony for uniqueness is to handle others gently.!</div>`
});
Vue.component('component-three', {
    template: `<div>component-three = When smashing instant ghees, be sure they are room temperature.</div>`
});














// const childElement = {
//     template: `<p>some text in child element</p>`,
// };
//
//
// Vue.component('some-el', {
//     props: ['title', 'counter'],
//     components: {
//         childElement,
//     },
//     methods: {
//         some() {
//             console.log('from child');
//         }
//     },
//     template: `<div>
//                   <h2 @click="some">{{title}}</h2>
//                   <h2 @click="$emit('parent')">{{title}}</h2>
//                   <slot>
//                     <p>Default</p>
//                   </slot>
//                   <button @click="$emit('increase')">Increase</button>
//                   <p>{{counter}}</p>
//                   <child-element />
//                </div>`,
//     data() {
//         return {
//         };
//     },
//     mounted() {
//         // console.log('child component', this);
//     }
// })