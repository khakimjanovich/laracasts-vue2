<template>
  <div id="app" class="container">
    <div class="card mt-4 p-6">
      <form action="#" @submit.prevent="onSubmit" @keydown="form.errors.clear($event.target.name)">
        <div class="field">
          <label class="label">Project title:</label>
          <div class="control">
            <input class="input {'is-danger':form.errors.has('title')}"
                   type="text"
                   name="title"
                   v-model="form.title"
                   placeholder="Enter project name"
            >
          </div>
          <p class="help is-danger"
             v-text="form.errors.get('title')"
             v-if="form.errors.has('title')"
          >
          </p>
        </div>
        <div class="field">
          <label class="label">Project description:</label>
          <div class="control">
            <input class="input {'is-danger':form.errors.has('body')}"
                   type="text"
                    name="body"
                   v-model="form.body"
                   placeholder="Enter project name"
            >
          </div>
          <p class="help is-danger"
             v-text="form.errors.get('body')"
             v-if="form.errors.has('body')"
          >
          </p>
        </div>
        <div class="field is-grouped">
          <div class="control">
            <button class="button is-link" :disabled="form.errors.any()">Submit</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>


export default {

  data() {
    return {
      form: new Form({
        title: '',
        body: '',
      }),
    }
  },

  methods: {
    onSubmit() {
      this.form.submit('post', 'https://jsonplaceholder.typicode.com/posts')
        .then(data => alert('Creating from the template'))
        .catch(error => console.log(error))
    },
  }
}
</script>
