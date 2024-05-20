<template>
    <section class="container">
      <div class="hero-big-text">CREATIVE</div>
      <div class="hero-text">DESIGN AGENCY</div>
      <div class="hero-sub-text">Webdesign, Branding & Graphic Design</div>

      <div class="scroll-animation">
        <img
          class="light"
          src="/src/images/arrow-dark.svg"
          width="24"
          height="24"
          alt="whitemode"
          id="chevron"
        />
        <img
          class="dark"
          src="/src/images/arrow-white.svg"
          width="24"
          height="24"
          alt="darkmode"
          id="chevron"
        />
      </div>
    </section>
    <section class="service-cards">
      <div class="services">
        <div class="cards">Custom Design Approach</div>
        <div class="cards">User Experience Focus</div>
        <div class="cards">Mobile Friendly</div>
      </div>
    </section>
    <div class="cursor"></div>
</template>

<script>
document.addEventListener("mousemove", (e) => {
  const cursor = document.querySelector(".cursor");
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
});
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
}

section {
  position: relative;
  display: grid;
  place-items: center;
}

.service-cards {
  margin-top: 250px;
  justify-content: center;
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
}
.services {
  display: flex;
}

.cards {
  width: 300px;
  height: 300px;
  border: 2px solid var(--text-secondary-color);
  padding: 5px;
  border-radius: 40px;
  margin: 20px;
}
.container {
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  margin-top: 230px;
  width: 90vw;
  left: 20px;
}

.hero-big-text {
  font-size: 122px;
  font-weight: 900;
  letter-spacing: -2px;
  line-height: 0.8;
  background: linear-gradient(to left, #1be0e7, #e811da);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
}
.hero-text {
  font-size: 75px;
  font-weight: 500;
  letter-spacing: -2px;
  background: linear-gradient(to left, #1be0e7, #e811da);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
}
.hero-sub-text {
  display: flex;
  font-weight: 300;
  font-size: 15px;
}

@keyframes smooth-appear {
  to {
    bottom: 20px;
    opacity: 1;
  }
}
#chevron {
  position: fixed;
  bottom: 50%;
  opacity: 0;
  left: 50%;
  transform: translateX(-50%);
  animation: smooth-appear 3s ease forwards;
  animation-iteration-count: infinite;
}
</style>

<scrip></scrip>
