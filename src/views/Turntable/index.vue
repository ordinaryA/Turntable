<template>
  <div class="turn-page">
    <h2>{{ rewardReslut }}</h2>
    <h3>空格键（space）开始</h3>
    <Circle ref="circleDom" />
  </div>
</template>

<script >
import { computed, ref } from "vue";
import Circle from "../../components/Circle/index.vue";

export default {
  components: { Circle },
  setup() {
    const circleDom = ref(null);

    /**
     * label文字
     */
    const rewardReslut = computed(() => {
      const { reward = [], rewardReslut = null } = circleDom?.value || {};
      const item = reward.find((c) => c.value === rewardReslut) || {};
      return `奖品${item.label || "?"}`;
    });
    return { circleDom, rewardReslut };
  },
};
</script>

<style lang="scss">
.turn-page {
  width: 100%;
  height: 100vh;
  background: linear-gradient(135deg, #f9957f 5%, #f2f5d0);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2,
  h3 {
    padding-bottom: 10px;
    color: rgba($color: #fff, $alpha: 0.8);
  }
}
</style>