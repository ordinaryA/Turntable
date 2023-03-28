<template>
  <div class="banner-wrap" @click="setCurrentIdx(Math.random())">
    {{ currentIdx }}
  </div>
</template>

<script>
import { computed, reactive, toRefs } from "vue";

export default {
  props: ["banners"],
  setup(props) {
    const state = reactive({
      currentIdx: 0,
    });
    const { currentIdx } = toRefs(state);

    const setCurrentIdx = (num) => {
      currentIdx.value = num;
    };
    computed(() => {});

    return { currentIdx, setCurrentIdx };
  },
};
</script>

<style lang="scss">
.banner-wrap {
  width: 1200px;
  position: relative;
  overflow: hidden;
}
</style>