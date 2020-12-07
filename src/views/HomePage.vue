<template>
  <div class="home_container">
    <Cover />
    <div class="flower_element">
      <h3 class="section-title">
        <span class="section-title-text">オープニングおめでとう花 </span>
        <a href="https://mrhoa.com/danh-muc/hoa-sinh-nhat-dep/" target=""
          >すべて見る<i class="icon-angle-right"></i
        ></a>
      </h3>
      <ListProduct :listdata="flowers" />
    </div>
    <div class="flower_element">
      <h3 class="section-title">
        <span class="section-title-text">結婚おめでとう花</span>
        <a href="https://mrhoa.com/danh-muc/hoa-sinh-nhat-dep/" target=""
          >すべて見る<i class="icon-angle-right"></i
        ></a>
      </h3>
      <ListProduct :listdata="flowers" />
    </div>
  </div>
</template>

<script>
import Cover from "../components/Cover";
import ListProduct from "../components/ListProduct";
import { FLOWERS } from "../../data";
export default {
  components: {
    Cover,
    ListProduct,
  },
  data() {
    return {
      flowers: FLOWERS,
    };
  },
};
</script>

<style>
</style>