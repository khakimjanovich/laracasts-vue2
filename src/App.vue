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
    for (let field in this.originalData) {
      this[field] = '';
    }
    this.errors.clear()
  }

  data() {
    let data = {}

    for (let property in this.originalData) {
      data[property] = this[property]
    }

    return data;
  }

  onSuccess(data) {
    alert('Created')
    this.reset()
  }

  onFail(errors) {
    this.errors.record(errors)
  }

  submit(method, uri) {
    return new Promise((resolve, reject) => {
      axios[method](uri, this.data())
        .then(response => {
          this.onSuccess(response.data);
          resolve(response.data);
        })
        .catch(error => {
          this.onFail(error.response.data);
          reject(error.response.data);
        })

    })
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
    if (field) {
      delete this.errors[field]
      return;
    }
    this.errors = {}
  }
}

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
