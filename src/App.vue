<template>
  <div id="app" class="container">
    <div class="card mt-4 p-6">
      <form action="#" @submit.prevent="onSubmit" @keydown="form.errors.clear($event.target.name)">
        <div class="field">
          <label class="label">Project name:</label>
          <div class="control">
            <input class="input is-danger"
                   type="text"
                   name="name"
                   v-model="form.name"
                   placeholder="Enter project name"
                   required
            >
          </div>
          <p class="help is-danger"
             v-text="form.errors.get('name')"
             v-if="form.errors.has('name')"
          >
          </p>
        </div>
        <div class="field">
          <label class="label">Project description:</label>
          <div class="control">
            <input class="input is-danger"
                   type="text"
                   name="description"
                   v-model="form.description"
                   placeholder="Enter project name"
                   required
            >
          </div>
          <p class="help is-danger"
             v-text="form.errors.get('description')"
             v-if="form.errors.has('description')"
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
import axios from "axios";

class Form {
  constructor(data) {
    this.originalData = data;
    for (let field in data) {
      this[field] = data[field];
    }
    this.errors = new Errors()
  }

  reset() {
    for (let field in this.originalData()) {
      this[field] = '';
    }
  }

  data() {
    let data = Object.assign({}, this)
    delete data.originalData;
    delete data.errors;
    return data;
  }

  onSuccess(response) {
    alert(response.data.message)
    this.errors.clear()
    this.reset()
  }

  onFail(error) {
    this.errors.record(error.response.data)
  }

  submit(method, uri) {
    axios[method](uri, this.data())
      .then(this.onSuccess.bind(this))
      .catch(this.onFail.bind(this))
  }
}

class Errors {
  constructor() {
    this.errors = {}
  }

  get(field) {
    if (this.errors[field]) {
      return this.errors[field][0]
    }
  }

  has(field) {
    return this.errors.hasOwnProperty(field)
  }

  any() {
    return !!Object.keys(this.errors).length;
  }

  record(errors) {
    this.errors = errors
  }

  clear(field) {
    if (field) delete this.errors[field]
    else this.errors = {}
  }
}

export default {

  data() {
    return {
      form: new Form({
        name: '',
        description: '',
      }),
    }
  },

  methods: {
    onSubmit() {
      this.form.submit('post', '/projects/store')
    },
  }
}
</script>
