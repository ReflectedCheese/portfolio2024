<script>
// const activePage = window.location.pathname;
// const navLinks = document.querySelectorAll("nav a").forEach((link) => {
//   if (link.href.includes(`${activePage}`)) {
//     link.classList.add("active");
//   }
// });
// const pathName = window.location.pathname;
// const pageName = pathName.split("/").pop();

// if (pathName === "/") {
//   document.querySelector(".work").classList.add("activeLink");
// }
// alert(pageName)
//background: linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #212121;
</script>

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
  z-index: 1;
  top: 0;
  opacity: 1;
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);

  background: rgba(225, 225, 225, 0.05);

  inset: -1rem 0;
}
</style>
