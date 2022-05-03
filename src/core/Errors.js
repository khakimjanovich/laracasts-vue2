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

export default Errors
