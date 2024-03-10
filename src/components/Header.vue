<template>
  <nav>
    <div class="header">
      <router-link to="/">
        <img src="/sw.svg" class="logo" />
      </router-link>
      <div class="menu">
        <p>about</p>
        <p>projects</p>
        <p>contact</p>
      </div>
    </div>
    <div class="backdrop"></div>
  </nav>
</template>

<style>
.logo {
  top: 0;
  width: 50px;
  margin-top: 10px;
}
nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 6rem;
  padding: 0 2rem;
  box-sizing: border-box;
}

.header {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 2rem;
  z-index: 5;
}

.backdrop {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
  top: 0;
  opacity: 1;
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);

  background: rgba(225, 225, 225, 0.05);

  mask-image: linear-gradient(
    rgb(0, 0, 0) 50%,
    rgba(0, 0, 0, 0.8) 70%,
    rgba(0, 0, 0, 0) 100%
  );

  -webkit-mask-image: linear-gradient(
    rgb(0, 0, 0) 50%,
    rgba(0, 0, 0, 0.8) 70%,
    rgba(0, 0, 0, 0) 100%
  );
  inset: -1rem 0;
}
.menu {
  justify-content: flex-end;
  display: flex;
  flex-wrap: nowrap;
}
p {
  margin-right: 20px;
  color: white;
}
</style>
