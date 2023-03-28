<template>
  <div class="circle-wrap" :style="{ transform: `rotate(-${getDeg()}deg)` }">
    <div @click="testFn">{{ test }}</div>
    <!-- <div
      class="reward-item"
      v-for="item in reward"
      :key="item.value"
      :style="rewardRotate(item.value)"
    >
      No.{{ item.value }}
    </div>
    <div
      class="center-circle"
      @click="getResult"
      :style="{ transform: `rotate(${rotating}deg)` }"
    ></div> -->
  </div>
</template>

<script setup>
import { ref, defineExpose, onMounted, computed, watch } from "vue";
import { useTest } from "../../views/Turntable/test";

const { test, testFn } = useTest();

const reward = ref([
  { value: 1, label: "一" },
  { value: 2, label: "二" },
  { value: 3, label: "三" },
  { value: 4, label: "四" },
  { value: 5, label: "五" },
  { value: 6, label: "六" },
  { value: 7, label: "七" },
  { value: 8, label: "八" },
  { value: 9, label: "九" },
  { value: 10, label: "十" },
  { value: 11, label: "十一" },
  { value: 12, label: "十二" },
  { value: 13, label: "十三" },
  { value: 14, label: "十四" },
  { value: 15, label: "十五" },
  { value: 16, label: "十六" },
]);
const rewardReslut = ref(null);
const isRotate = ref(false);
const rotating = ref(0);
let timer = null;

onMounted(() => {
  bindKeyboard();
  rotating.value = getDeg();
});

/**
 * 监听设置当前奖项
 */
watch(rotating, () => {
  // 1.计算当前角度
  const currentRotate = rotating.value % 360;
  // 2. 每一项角度
  const itemDeg = getDeg();
  // 3. 计算归属角度
  const resultDeg = Math.ceil(currentRotate / itemDeg);
  rewardReslut.value = resultDeg;
});

const bindKeyboard = () => {
  document.onkeyup = (e) => {
    if (e.code === "Space") {
      getResult();
    }
  };
};

/**
 * 获取角度
 */
const getDeg = () => {
  return 360 / reward.value.length;
};

/**
 * 单个奖项角度
 */
const rewardRotate = (value) => {
  return { transform: `rotate(${value * getDeg(value)}deg)` };
};

/**
 * 纯随机选项
 */
const getResult = () => {
  if (isRotate.value) return;
  const result = Math.ceil(Math.random() * reward.value.length);
  rewardReslut.value = result;
  rotateAnimation(result);
};

/**
 * 旋转动画
 */
const rotateAnimation = (num) => {
  rewardReslut.value = 0;
  isRotate.value = true;
  clearInterval(timer);
  timer = null;
  let START_ROTATE = 360 * 6;
  const END_ROTATE = num * (360 / reward.value.length);

  timer = setInterval(() => {
    if (START_ROTATE <= END_ROTATE) {
      clearInterval(timer);
      timer = null;
      rewardReslut.value = num;
      isRotate.value = false;
      return;
    }
    START_ROTATE = START_ROTATE - 5;
    rotating.value = START_ROTATE;
  }, 5);
};

defineExpose({ rewardReslut, reward });
</script>

<style lang="scss">
$circleBackgroundColor: rgba(
  $color: #aebaf8,
  $alpha: 0.1,
);
$pointColor: rgba(
  $color: #f6e6bc,
  $alpha: 1,
);

.circle-wrap {
  width: 380px;
  height: 380px;
  background: $circleBackgroundColor;
  color: #fff;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  user-select: none;
  margin-top: 20px;

  .reward-item {
    width: 200px;
    height: 400px;
    position: absolute;
    text-align: center;
    padding-top: 30px;
  }

  .center-circle {
    width: 20px;
    height: 20px;
    background: $pointColor;
    display: flex;
    position: relative;
    border-radius: 50%;
    cursor: pointer;
    z-index: 10;

    &::before {
      content: "";
      border-top: 0px solid transparent;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-bottom: 150px solid $pointColor;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: -130px;
    }
  }
}
</style>