<template>
  <div id="ChildRouteOne">
    <p style="color: bisque">子路由1</p>
  </div>
</template>

<script>
  export default {
    name: 'ChildRouteOne',
    data() {
      return {

      }
    },
    methods: {
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .active{
    color: #42b983;
    font-size: 20px;
    font-weight: bold;
  }
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
