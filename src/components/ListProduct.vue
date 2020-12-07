<template>
  <div class="card--list">
    <div
      v-for="(item, index) in listdata.slice(0, 4)"
      :key="index"
      class="card"
      style="width: 14rem; height: 27rem"
      @click="goDetailPage(item.id)"
    >
    <div class="img-hover-zoom">
      <img
        class="card-img-top"
        :src="require('../assets/' + item.image)"
        alt="Card image cap"
      />
    </div>
      
      <div class="card-body">
        <p class="card-text flower_name">
          {{ item.name }}
        </p>
        <div>
          <b-form-rating
            v-model="item.rating"
            variant="warning"
            readonly
          ></b-form-rating>
        </div>
        <p class="card-text flower_price">
          {{
            item.price.toLocaleString("ja", {
              style: "currency",
              currency: "JPY",
            })
          }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    listdata: Array,
  },
  methods: {
    goDetailPage(id) {
      this.$router.push(`/flower/${id}`)
      console.log("AAAA")
    }
  }
};
</script>

<style>
</style>