<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <!--  -->
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Class Room </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn>Login</v-btn>
      <v-btn>User</v-btn>
      <v-btn @click="logout">Logout</v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>


<script>
// import router from './router'
import { mapActions } from 'vuex'

  export default{
    data(){
      return {
        drawer: false,
        isAuthenticated: false
      }
    },

    methods: {
      ...mapActions("user",['logout', 'init'])
    },
    mounted(){

      this.init()

    }
  }
</script>
