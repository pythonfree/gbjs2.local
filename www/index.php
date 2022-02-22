<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
<div id="app">

    <div>
        <button v-for="tab in tabs" :key="tab" @click="currentTab = tab">{{tab}}</button>
    </div>
    <component :is="currentComponent"></component>




<!--        <some-el @parent="some" :title="someString" :counter="counter" @increase="increase">-->
<!--            <div>I'm injected as slot</div>-->
<!--        </some-el>-->
<!--        <some-el @parent="some" :title="someString" :counter="counter" @increase="increase"></some-el>-->
<!--        <some-el @parent="some" :title="someString" :counter="counter" @increase="increase"></some-el>-->

</div>

<script src="vue.js"></script>
<!--<script src="https://cdn.jsdelivr.net/npm/vue@2.6.14"></script>-->
<script src="components.js?<?= rand(0, PHP_INT_MAX); ?>"></script>
<script src="app.js?<?= rand(0, PHP_INT_MAX); ?>"></script>
</body>
</html>