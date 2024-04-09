<template>
  <section class="container">
    <div class="hero-text">HI, </div>
    <div class="hero-text">I'M SIMONE WILLEMSE </div>
    <div class="hero-sub-text">
      A Graphic Designer & Front-end Developer
    </div><br/>That likes creating stuff
  </section>
</template>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
}

section {
  display: grid;
  place-items: left;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: left;
  margin-top: 150px;
  padding: 100px;
  border: 3px solid  rgba(14, 13, 13, 0.153);
  background: rgba(225, 225, 225, 0.05);
  border-radius: 50px;
  backdrop-filter: blur(3px);
 
}

.hero-text {
  font-size: 50px;
  font-weight: 700;
}
.hero-sub-text {
  display: flex;

  font-size: 20px;
  
}
</style>
