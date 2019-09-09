<template>
    <div class="index">
        <h2>你好</h2>
        <p>尊敬的 <span>用户</span>，欢迎来到视频学习！！！{{msg}}</p>
        <ul>
            <li v-for="items in lists"><a href="#">
                <img :src="items.srcUrl" :alt="items.title">
                <div class="con">
                    <h3>{{items.title}}</h3>
                    <p>2371学习</p>
                    <p>简介：{{items.proBor}}</p>
                    <span>免费课程</span>
                </div>
            </a></li>
        </ul>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "Index",
        data(){
            return{
                msg:'哈哈哈',
                // 方法1加载图片
                // lists:[
                //     {"id": 1, "title": "JS课程", "dengji": 0, "srcUrl": require("../assets/img/css.jpg"), "proBor": "视频介绍：JS是一门前端必修课程！！！"},
                //     {"id": 2, "title": "Html课程", "dengji": 1, "srcUrl":require( "../assets/img/css.jpg"), "proBor": "视频介绍：CSS是一门前端必修课程！！！"},
                //     {"id": 3, "title": "CSS课程", "dengji": 2, "srcUrl": require("../assets/img/css.jpg"), "proBor": "视频介绍：JQ是一门前端必修课程！！！"},
                //     {"id": 4, "title": "H5课程", "dengji": 1, "srcUrl": require("../assets/img/css.jpg"), "proBor": "视频介绍：ES6是一门前端必修课程！！！"},
                //     {"id": 5, "title": "C3课程", "dengji": 0, "srcUrl": require("../assets/img/css.jpg"), "proBor": "视频介绍：Vue是一门前端必修课程！！！"},
                // ],
                lists:''
            }
        },
        // 方法2加载图片：
        created() {
            axios.get('/data/data.json').then((res)=>{
                console.log(res.data)
                this.lists = res.data.data
            })
        }
    }
</script>

<style type="text/less">
    *{
        margin: 0;
        padding: 0;
    }
    .fs{
        font-size: 12px;
        color: #333333;
    }
    a{
        text-decoration: none;
        font-size: 12px;
        color: #333333;
    }
    ul{
        list-style: none;
    }
    .index{
        width: 400px;
        background: #f5f5f5;
        padding: 5px;
        box-sizing: border-box;
    }
    .index>h2{
        font-weight: 300;
        text-align: left;
        color: aquamarine;
        padding: 5px;
        box-sizing: border-box;
    }
    .index>p{
        width: 100%;
        font-size: 12px;
        color: #333333;
        text-align: left;
        padding: 5px;
        box-sizing: border-box;
    }
    .index>p>span{
        color: #ff5500;
    }
    ul{
        width: 100%;
        padding: 5px;
        box-sizing: border-box;
    }
    li{
        width: 100%;
    }
    ul>li>a{
        width: 100%;
        display: inline-block;
    }
    ul>li>a>img{
        display: inline-block;
        float: left;
        width: 150px;
        border-radius: 10px;
        padding: 5px;
        box-sizing: border-box;
    }
    .con{
        width: 230px;
        float: left;
        padding: 5px;
        box-sizing: border-box;
        text-align: left;
    }
    .con>h3{
        width: 100%;
        padding: 0 0 5px 0;
        box-sizing: border-box;
    }
    .con>p{
        width: 100%;
        font-size: 10px;
        color: #888888;
        text-align: left;
    }
    .con>p:nth-child(3){
        overflow:hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .con>span{
        font-size: 12px;
        color: #555555;
    }
</style>
