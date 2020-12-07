<template>
  <div class="container">
    {{ currentFlower }}
    <h1 class="my-4">
      Page Heading
      <small>Secondary Text</small>
    </h1>

    <div class="row detail_container">
      <div class="detail_img">
        <img
          class="img"
          :src="require('../assets/' + currentFlower.image)"
          alt=""
        />
      </div>

      <div class="col-md-4 ">
        <h3 class="my-3 detail_name">{{ currentFlower.name }}</h3>
        <div class="pl-5">
          <h4 class="my-3">売る場所</h4>
          <ul>
            <li>名前: {{ currentFlower.shopname }}</li>
            <li>住所: {{ currentFlower.shopplace }}</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="detail_comment">
        <p>口コミ</p>
        <textarea class="form-control w-75" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>

    <h3 class="my-4">類似商品</h3>

    
    <ListProduct :listdata="listFlower" />
  </div>
</template>

<script>
import { FLOWERS } from "../../data";
import ListProduct from '../components/ListProduct'
export default {
    components: {
        ListProduct
    },
  data() {
    return {
        listFlower: FLOWERS,
      currentFlower: "",
    };
  },
  mounted() {
    for (let i = 0; i < FLOWERS.length; i++) {
      if ((FLOWERS[i].id = this.$route.params.id)) {
        this.currentFlower = FLOWERS[i];
        break;
      }
    }
  },
};
</script>

<style>
</style>