<template>
  <nav>
    <div class="header">
      <router-link to="/">
        <img src="/sw.svg" class="logo" />
      </router-link>
      <div class="menu">
        <a href="/">
            <button>work</button>
        </a>
        <a href="/about">
            <button>about</button>
        </a>
      </div>
      <div class="links">
        <p>contact</p>
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
}

.header {
  display: flex;
  flex-direction: row;
  justify-content:space-between;
  align-items: center;
  width: 100%;
  gap: 2rem;
  z-index: 5;
}

.logo {
  top: 0;
  left: 0;
  width: 50px;
  margin-top: 10px;
  z-index: 2;
}
.menu {
  justify-content: flex-end;
  display: flex;
  flex-wrap: nowrap;
  border: 2px solid rgba(225, 225, 225, 0.05);
  padding: 5px;
  border-radius: 40px;
  height: 100%;
  z-index: 1;
  top: 0;
  opacity: 1;
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);

  background: rgba(225, 225, 225, 0.05);


  inset: -1rem 0;
}

</style>
