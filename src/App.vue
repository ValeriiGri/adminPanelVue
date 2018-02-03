<template>
  <div>

    <header class="masthead">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="/">Vue.js</a>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <router-link tag="li" active-class="active" to="/users">
              <a class="nav-link">
                List of users
              </a>
            </router-link>
            <router-link tag="li" class="nav-item" active-class="active" to="/edit">
              <a class="nav-link">
                Edit user
              </a>
            </router-link>
            <router-link tag="li" class="nav-item" active-class="active" to="/add">
              <a class="nav-link">
                Add user
              </a>
            </router-link>
          </ul>
        </div>
      </nav>
    </header>

    <main role="main" class="container">

      <router-view/>

    </main>

  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
