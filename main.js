Vue.component('modal', {
    data(){
        return{
            isVisible: false,
        }
    },
    template:
        `
            <div class="modal is-active">
                <div class="modal-background"></div>
                <div class="modal-content">
                <div class="box">
                    <slot></slot>
                </div>
                </div>
                <button aria-label="close" class="modal-close is-large" @click="$emit('close')"></button>
            </div>
        `,
})

new Vue({
    el: '#root',
    data:{
        showModal:false,
    }
})
