<template>
  <nav>
    <div class="header">
      <router-link to="/">
        <img class="light" src="/src/images/sw-light.svg" id="logo" />
        <img class="dark" src="/src/images/sw-dark.svg" id="logo" />
        <div class="dark-mode-toggle">
          <button
            class="icon"
            onclick="document.body.classList.toggle('dark-mode')"
          >
            <img
              class="light"
              src="/src/images/sun-light.svg"
              width="24"
              height="24"
              alt="lightmode"
            />
            <img
              class="dark"
              src="/src/images/moon-dark.svg"
              width="24"
              height="24"
              alt="darkmode"
            />
          </button>
        </div>
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

button.icon {
  background-color: transparent;
  border: none;
  padding: 1 0 1 0rem;
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

#logo {
  padding: 30px;
  top: 0;
  left: 5rem;
  width: 50px;
  margin-top: 10px;
  z-index: 2;
}

.links {
  padding: 1 0 1 0rem;
}

.menu {
  justify-content: flex-end;
  display: flex;
  flex-wrap: nowrap;
  border: 2px solid var(--text-secondary-color);
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
