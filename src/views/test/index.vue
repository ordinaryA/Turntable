<template>
  <div class="test-wrapper">
    <div class="container">
      <div class="box1" @click="testFn('1')">
        <img src="../../assets/img/banners/banner1.jpg" alt="" />
      </div>
      <div class="box2" @click="testFn('2')">
        <img src="../../assets/img/banners/banner3.jpg" alt="" />
      </div>
      <div class="box3" @click="testFn('3')">
        <img src="../../assets/img/banners/banner4.jpg" alt="" />
      </div>
      <div class="box3" @click="testFn('3')">
        <img src="../../assets/img/banners/banner4.jpg" alt="" />
      </div>
      <div class="box3" @click="testFn('3')">
        <img src="../../assets/img/banners/banner4.jpg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const testFn = (n) => {
      console.log(n);
    };

    // const reg = /\d{4}-\d{2}-\d{2}/
    const reg = /-(?=\d{2})/g;

    const helper = () => {
      const str = "zfasdgfzfadasdczxcaed";
      const result = [...str].reduce(
        (p, c) => (p[c] ? p[c]++ : (p[c] = 1), console.log(455), p),
        {}
      );
    };
    helper();
    return { testFn };
  },
};
</script>

<style scoped lang="scss">
.test-wrapper {
  display: flex;
  justify-content: center;
  .container {
    width: 1200px;
    display: flex;

    .box3,
    .box2,
    .box1 {
      width: 400px;
      height: 500px;

      & > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: 0.2s;
      }

      &:hover {
        img {
          transform: scale(1.1);
        }
      }
    }
    .box1 {
      clip-path: polygon(0 0, 100% 0%, 75% 100%, 0% 100%);
      margin-right: -100px;
    }
    .box2 {
      clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
    }
    .box3 {
      margin-left: -100px;
      clip-path: polygon(25% 0, 100% 0, 100% 100%, 0 100%);
    }
  }
}
</style>