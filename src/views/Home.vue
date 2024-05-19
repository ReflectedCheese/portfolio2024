<template>
  <section class="container">
    <div class="hero-text">HI,</div>
    <div class="hero-text">I'M SIMONE WILLEMSE</div>
    <div class="hero-sub-text">A Graphic Designer & Front-end Developer</div>
    <div class="hero-sub-text">I like creating stuff</div>
    <div class="scroll-animation">
      <img
        class="light"
        src="/src/images/arrow-dark.svg"
        width="24"
        height="24"
        alt="whitemode" id="chevron"
      />
      <img
        class="dark"
        src="/src/images/arrow-white.svg"
        width="24"
        height="24"
        alt="darkmode" id="chevron"
      />
    </div>
  </section>
</template>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
}

section {
  position: relative;
  display: grid;
  place-items: left;
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

.hero-text {
  font-size: 75px;
  font-weight: 900;
  letter-spacing: -3px;
  background: linear-gradient(to left, #1be0e7, #e811da);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
}
.hero-sub-text {
  display: flex;
  font-weight: 300;
  font-size: 25px;
}

@keyframes smooth-appear {
  to{
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
