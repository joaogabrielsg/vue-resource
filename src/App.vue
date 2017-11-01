<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>HTTP</h1>

        <div class="form-group">
          <label>Username</label>
          <input type="text" class="form-control" v-model="user.username">
        </div>

        <div class="form-group">
          <label>Mail</label>
          <input type="text" class="form-control" v-model="user.email">
        </div>

        <button class="btn btn-primary" @click="submit">Submit</button>
        <hr>
        <input type="text" class="form control" v-model="node">

        <button class="btn btn-primary" @click="fetchData">Get Data</button>

        <hr>

        <ul class="list-group">
          <li class="list-group-item" v-for="user in users">{{ user.username }} / {{ user.email }}</li>
        </ul>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: '',
        email: ''
      },
      users: [],
      resource: {},
      node: 'data'
    };
  },
  methods: {
    submit() {
      // this.$http.post('data.json', this.user).then(response => {
      //   console.log(response);
      // }, error => {
      //   console.log(error);
      // });
      this.resource.saveAlt(this.user);
    },

    fetchData() {
      // this.$http.get('data.json').then(response => {
      //   return response.json();
      // }).then(data => {
      //   const resultArray = [];
      //   for (let key in data) {
      //     resultArray.push(data[key]);
      //     console.log(data[key]);
      //   }
      //   this.users = resultArray;
      // });
      this.resource.getData({node: this.node}).then(data => {
        const resultArray = [];
        for (let key in data) {
          resultArray.push(data[key]);
          console.log(data[key]);
        }
        this.users = resultArray;
      });
    }
  },
  created(){
    const customAction = {
      saveAlt: {method: 'POST', url: this.node + '.json'},
      getData: {method: 'GET'}
    }
    this.resource = this.$resource('{node}.json', {}, customAction);
    console.log(customAction.saveAlt)
  }
}
</script>

<style>

</style>
