Vue.component('message', {
    data(){
        return{
            isVisible: true,
        }
    },
    props: ['title', 'body'],
    template: `
            <article class="message" v-show="isVisible">
                <div class="message-header">
                    <p>{{title}}</p>
                    <button class="delete" aria-label="delete" @click="hideModal"></button>
                </div>
                <div class="message-body">
                    {{body}}
                </div>
            </article>`,
    methods: {
        hideModal() {
            this.isVisible = !this.isVisible;
        }
    }
})

new Vue({
    el: '#root',
})
