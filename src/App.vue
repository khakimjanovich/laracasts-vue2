<template>
  <div id="app" class="container">
    <div class="card mt-4 p-6">
      <form action="#" @submit.prevent="onSubmit" @keydown="errors.clear($event.target.name)">
        <div class="field">
          <label class="label">Project name:</label>
          <div class="control">
            <input class="input is-danger"
                   type="text"
                   name="name"
                   v-model="name"
                   placeholder="Enter project name"
                   required
            >
          </div>
          <p class="help is-danger"
             v-text="errors.get('name')"
             v-if="errors.has('name')"
          >
          </p>
        </div>
        <div class="field">
          <label class="label">Project description:</label>
          <div class="control">
            <input class="input is-danger"
                   type="text"
                   name="description"
                   v-model="description"
                   placeholder="Enter project name"
                   required
            >
          </div>
          <p class="help is-danger"
             v-text="errors.get('description')"
             v-if="errors.has('description')"
          >
          </p>
        </div>
        <div class="field is-grouped">
          <div class="control">
            <button class="button is-link" :disabled="errors.any()">Submit</button>
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
      name: '',
      description: '',
      errors: new Error()
    }
  },

  methods: {
    onSubmit() {
      this.$http.post('/projects/store', {
        name: this.name,
        description: this.description
      }).then(response => this.onSuccess(response))
        .catch(error => this.errors.record(error.response.data))
    },

    onSuccess(response) {
      alert(response.data.message)
      this.name = ''
      this.description = ''
    }
  }
}
</script>
