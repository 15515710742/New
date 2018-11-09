<template>
        <div class="gedanbutton">
                <!-- 上一页宽高-->
                <a href="#" class="prev">上一页</a>
                <a href="#" class="center selected">1</a>
                <a href="#" class="center">2</a>
                <a href="#" class="center">3</a>
                <a href="#" class="center">4</a>
                <a href="#" class="center">5</a>
                <a href="#" class="center">6</a>
                <a href="#" class="center">7</a>
                <a href="#" class="center">8</a>
                <span class="zdot">...</span>
                <a href="#" class="center">37</a>
                <a href="#" class="next">下一页</a>
            </div>
</template>
<script>
export default {
    name: 'WyCoPages',
    data:function(){
    return{}
  },   
     components: {
  },
    props:["item"]
  }
</script>
<style>
div.gedanbutton{
    margin: 20px 0;
    text-align: center;
    font-size: 12px;
}
div.gedanbutton a.prev{
    color: #cacaca;
    cursor: default;
    padding: 0 20px;
    height: 24px;
    line-height: 24px;
    text-align: left;
    margin: 0 1px 0 2px;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 2px;
    vertical-align: middle;
}
div.gedanbutton a.center{
    height: 22px;
    padding: 0 8px;
    background-color: #fff;
    line-height: 22px;
    margin: 0 1px 0 2px;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 2px;
    vertical-align: middle;
    cursor: pointer;
    color: #333;
    text-align: center;
}
div.gedanbutton a.center:hover{
    border-color: #666;
}
div.gedanbutton a.selected{
    background-color: #A2161B;
    color: #fff;
    cursor: default;
    border: 0;
}
span.zdot{
    text-align: center;
}
div.gedanbutton a.next{
    padding: 0 25px;
    height: 24px;
    line-height: 24px;
    color: #333;
    text-align: left;
    margin: 0 1px 0 2px;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 2px;
    vertical-align: middle;
    cursor: pointer;
}
</style>