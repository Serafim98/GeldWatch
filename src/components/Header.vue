<template>
  <div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="navbar-item" @click="$emit('ShowHome')">
                Home
              </a>
              <a class="navbar-item">
                About
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>


<script>

export default {
  name: 'Header',
  emits: ['ShowHome']
}
</script>