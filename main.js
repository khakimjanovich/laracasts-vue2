Vue.component('task-list', {
    template: `
            <div>
                <task v-for="task in tasks">
                    {{ task.description }} {{ task.completed }}
                </task>
            </div>`,
    data() {
        return {
            tasks: [{description: 'Go to the store', completed: false}, {
                description: 'Go to the bank', completed: false
            }, {description: 'Go to the home', completed: false},]
        }
    }
})

Vue.component('task', {
    template: '<li><slot></slot></li>'
})

new Vue({
    el: '#root',
})
