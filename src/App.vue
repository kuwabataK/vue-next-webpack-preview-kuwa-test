<template>
  <img src="./logo.png" />
  <h1>Hello Vue 3!</h1>
  <button @click="inc">Clicked {{ state.count }} times.</button>
  <span> カウントの２倍の数は: {{doubleCnt}} </span>
</template>

<script>
import { useAppSetUp } from "./SetUps";

export default {
  setup() {
    const { state, inc, doubleCnt } = useAppSetUp();
    return { state, inc, doubleCnt };
  },
};
</script>

<style scoped>
img {
  width: 200px;
}
h1 {
  font-family: Arial, Helvetica, sans-serif;
}
</style>
