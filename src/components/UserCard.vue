<template>
    <div class="card mb-3" style="max-width: 540px;">
  <div class="row no-gutters">
    <div class="col-md-4">
      <img :src="user.photo || DEFAULT_PHOTO" :alt="`Photo de ${user.titre}`" class="card-img">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h3 class="card-title">{{user.titre}}</h3>
        <p class="card-text">{{user.description}}</p>
        <p class="card-text-col-3-big"><small class="text-muted">Temps de préparation</small></p>
        <p class="card-text-col-3-big"><small class="text-muted">Nombre de personnes</small></p>
        <p class="card-text-col-3-small"><small class="text-muted">Niveau</small></p>
      </div>
      <div class="card-body">
        <p class="card-text-col-3-big"><small class="text-muted">{{user.tempsPreparation}} min</small></p>
        <p class="card-text-col-3-big"><small class="text-muted">{{user.personnes}}</small></p>
        <p class="card-text-col-3-small"><small class="text-muted">{{user.niveau}}</small></p>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: "UserCard",
  props: {
    user: {
      type: Object
    }
  },
  computed : {
    DEFAULT_PHOTO: function(){
      return "https://s1.qwant.com/thumbr/0x0/2/2/6788a08a24aefe72817478982ee2e6/b_1_q_0_p_0.jpg?u=http%3A%2F%2Fgurucul.com%2Fwp-content%2Fuploads%2F2015%2F01%2Fdefault-user-icon-profile.png&q=0&b=1&p=0&a=1"
    }
  },
  methods: {
    onRemove: function(){
      this.$emit("remove",this.user);
    }
  }
}
</script>
<style scoped>
img{
    width: 100%;
    height: auto;
}
h3, p{
    text-align: left;
}
.card-text-col-3-big{
    width: 40%;
    display: inline-block;
}
.card-text-col-3-small{
    width: 20%;
    display: inline-block;
}
</style>