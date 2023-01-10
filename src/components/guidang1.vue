<template>
  <div>
    <div id="aa">
      <div id="mask">
        <h2>
          <slot name="title"></slot>
        </h2>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#mask{
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 1;
  background: rgba(0, 0, 0, .7);
  transition: opacity 1s;
}
h2{
  text-align: center;
  line-height: 200px;
  color: white;
  opacity: 1;
  transition: opacity 1s;
}
#aa{
    position: relative;
    margin-bottom: 10px;
    width: 300px;
    height: 200px;
    border-radius: 5px;
    border: 1px solid black;
    transition:all .5s
}
#aa:hover{
    transform: scale(1.05);
    transition:all .5s
}
#aa:hover h2,#aa:hover #mask{
  opacity: 0;
  transition: all 1s;
}
img{
  width: 100%;
  height: 100%;
}
</style>