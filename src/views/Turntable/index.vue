<template>
  <div class="turn-page">
    <!-- <h2>{{ rewardReslut }}</h2>
    <h3>空格键（space）开始</h3> -->
    <!-- <div class="tabs">
      <div
        class="item"
        :class="{ zhege: idx === active }"
        @click="choose(idx)"
        v-for="(item, idx) in list"
        :key="idx"
      >
        {{ item.label }}
      </div>
    </div>
    <Circle ref="circleDom" />
    <Carouse :banners="banners" />
    <div>{{ test }}</div> -->
    <Test />
  </div>
</template>

<script >
import { computed, ref } from "vue";
import Circle from "../../components/Circle/index.vue";
import Carouse from "../../components/Carousel/index.vue";
import { useTest } from "./test";
import Test from "../test/index.vue";

const DEFAULT_BANNER = [
  () => import("../../assets/img/banners/banner1.jpg"),
  () => import("../../assets/img/banners/banner2.jpg"),
  () => import("../../assets/img/banners/banner3.jpg"),
  () => import("../../assets/img/banners/banner4.jpg"),
  () => import("../../assets/img/banners/banner5.jpg"),
  () => import("../../assets/img/banners/banner6.jpg"),
];

export default {
  components: { Circle, Carouse, Test },
  setup() {
    const circleDom = ref(null);
    const banners = ref(DEFAULT_BANNER);
    const active = ref(0);
    const list = ref([{ label: "江某" }, { label: "廖某" }, { label: "付某" }]);

    const choose = (idx) => {
      active.value = idx;
    };

    const { test } = useTest();

    /**
     * label文字
     */
    const rewardReslut = computed(() => {
      const { reward = [], rewardReslut = null } = circleDom?.value || {};
      const item = reward.find((c) => c.value === rewardReslut) || {};
      return `奖品${item.label || "?"}`;
    });
    return { circleDom, rewardReslut, banners, test, active, choose, list };
  },
};
</script>

<style lang="scss">
.turn-page {
  width: 100%;
  height: 100vh;
  background: linear-gradient(-45deg, #ffa63d, #ff3d77, #338aff, #3cf0c5);
  background-size: 500%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: backMove 10s linear infinite;

  h2,
  h3 {
    padding-bottom: 10px;
    color: rgba($color: #fff, $alpha: 0.8);
    transition: 0.2s;
  }

  h2 {
    &:hover {
      transform: scale(1.2);
    }
  }
}

@keyframes backMove {
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
}

.tabs {
  display: flex;
  justify-content: center;
  gap: 20px;

  .item {
    background: #fff;
    transition: 0.2s;

    &.zhege {
      background: #ff3d77;
    }
  }
}
</style>