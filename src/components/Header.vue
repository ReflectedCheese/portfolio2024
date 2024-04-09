<template>
  <nav>
    <div class="header">
      <router-link to="/">
        <img src="/sw.svg" class="logo" />
      </router-link>
      <div class="menu">
        <a href="/" class="work">work</a>
        <a href="/about" class="about">about</a>
      </div>
      <div class="links">
        <a href="/contact">contact</a>
      </div>
    </div>
    <div class="backdrop"></div>
  </nav>
</template>

<style scoped>
nav {
  position: fixed;
  top: 3%;
  left: 0;
  width: 100%;
  height: 4rem;
  padding: 0 2rem;
  box-sizing: border-box;
  z-index: 1;
}

.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 2rem;
  z-index: 5;
  
}

.logo {
  padding-left: 1rem;
  top: 0;
  left: 0;
  width: 50px;
  margin-top: 10px;
  z-index: 2;
}

.links{
  padding-right: 1rem;
}

.menu {
  justify-content: flex-end;
  display: flex;
  flex-wrap: nowrap;
  border: 2px solid rgba(14, 13, 13, 0.153);
  padding: 5px;
  border-radius: 40px;
  z-index: 1;
  top: 0;
  opacity: 1;
  background: rgba(225, 225, 225, 0.05);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);

  inset: -1rem 0;
}
</style>
