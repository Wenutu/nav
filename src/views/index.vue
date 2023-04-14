<template>
    <div class="page-container">
        <div class="sidebar-menu toggle-others fixed">
            <div class="sidebar-menu-inner">
                <header class="logo-env">
                    <!-- logo -->
                    <!--
                    <div class="logo">
                        <a href="#" class="logo-expanded">
                        <img src="../assets/images/logo.png" width="100%" alt="" />
                        </a>
                        <a href="#" class="logo-collapsed">
                        <img
                            src="../assets/images/logo_small.png"
                            width="40"
                            alt=""
                        />
                        </a>
                    </div>
                    -->
                    <div class="mobile-menu-toggle visible-xs">
                        <a href="#" data-toggle="user-info-menu">
                            <i class="linecons-cog"></i>
                        </a>
                        <a href="#" data-toggle="mobile-menu">
                            <i class="fa-bars"></i>
                        </a>
                    </div>
                    <div class="site">
                        <div class="btn-group">
                            <button type="button" class="btn btn-primary btn-lg dropdown-toggle" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                                <i :class="this.site.icon">&nbsp;&nbsp;{{ this.site.name }}&nbsp;&nbsp;</i>
                                <span class="badge">{{ this.site.count }}</span></button>
                            <ul class="dropdown-menu">
                                <li :class="{ active: siteItem.key === site.key }" v-for="siteItem in siteList"
                                    :key="siteItem.key">
                                    <a :href="siteItem.nav">
                                        <i :class="siteItem.icon">&nbsp;&nbsp;{{ siteItem.name }}</i>
                                        <span class="badge">{{ siteItem.count }}</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </header>

                <!--
                <ul class="nav nav-pills" role="tablist">
                    <li :class="{ active: siteItem.key === site.key }" v-for="siteItem in siteList" :key="siteItem.key">
                        <a :href="siteItem.nav">
                            <i :class="siteItem.icon">&nbsp;&nbsp;{{ siteItem.name }}</i>
                            <span class="badge">{{ siteItem.count }}</span>
                        </a>
                    </li>
                </ul>
                -->
                

                <!-- 目录栏 -->
                <ul id="main-menu" class="main-menu">
                    <li v-for="(menu, idx) in items" :key="idx">
                        <!-- 二级导航路由 json 的 call-->
                        <!--
                        <a v-if="menu.call" :href="menu.call" class="smooth">
                            <i :class="menu.icon"></i>
                            <span class="title">{{ transName(menu) }}</span>
                            <span v-show="menu.is_hot" class="label label-pink pull-right hidden-collapsed">Hot</span>
                        </a>-->
                        <a :href="'#' + transName(menu)" class="smooth">
                            <i :class="menu.icon"></i>
                            <span class="title">{{ transName(menu) }}</span>
                            <span v-show="menu.is_hot" class="label label-pink pull-right hidden-collapsed">Hot</span>
                        </a>

                        <ul v-if="menu.children">
                            <li v-for="(submenu, idx) in menu.children" :key="idx">
                                <a :href="'#' + transName(submenu)" class="smooth">
                                    <span class="title">{{ transName(submenu) }}</span>
                                    <span v-show="submenu.is_hot"
                                        class="label label-pink pull-right hidden-collapsed">Hot</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        <!-- 主栏 -->
        <div class="main-content">
            <nav class="navbar user-info-navbar" role="navigation">
                <ul class="user-info-menu left-links list-inline list-unstyled">
                    <!--
                    <li class="hidden-sm hidden-xs">
                        <a href="#" data-toggle="sidebar"><i class="fa-bars"></i></a>
                    </li>
                    -->
                    <li class="dropdown hover-line language-switcher">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                            <img :src="lang.flag" /> {{ lang.name }}
                        </a>
                        <!-- 切换语言 -->
                        <ul class="dropdown-menu languages">
                            <li :class="{ active: langItem.key === lang.key }" v-for="langItem in langList"
                                :key="langItem.key">
                                <a href="#" @click="lang = langItem">
                                    <img :src="langItem.flag" /> {{ langItem.name }}
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>

                <!-- 友链提交 站点分享 -->
                <ul class="user-info-menu right-links list-inline list-unstyled">
                    <li class="hidden-sm hidden-xs">
                        <a v-if="lang.key === 'zh'" href="https://github.com/Wenutu/nav/issues" target="_blank">
                            <i class="fa-github"></i> 站点提交
                        </a>
                        <a v-else href="https://github.com/Wenutu/nav/issues" target="_blank">
                            <i class="fa-github"></i> Submit
                        </a>
                    </li>
                </ul>
            </nav>

            <!--搜索-->
            <SearchBox />

            <!-- 主体内容 -->
            <div v-for="(item, idx) in items" :key="idx">
                <div v-if="item.web">
                    <WebItem :item="item" :transName="transName" />
                </div>
                <div v-else v-for="(subItem, idx) in item.children" :key="idx">
                    <WebItem :item="subItem" :transName="transName" />
                </div>
            </div>

            <!-- 悬浮按钮 -->
            <!--
            <button class="scroll-to-top" @click="scrollToTop"><i class="fa-solid fa-chevron-up"></i></button>
            <button class="scroll-to-bottom" @click="scrollToBottom"><i class="fa-solid fa-chevron-down"></i></button>
            -->
            <!-- 页脚 -->
            <Footer />

        </div>
    </div>
</template>

<script>
// components
import WebItem from "../components/WebItem.vue";
import Footer from "../components/Footer.vue";
import SearchBox from "../components/SearchBox.vue";
// data  add sites-data
import MainData from "../assets/main.json";
import CodeData from "../assets/code.json";
import ResearchData from "../assets/research.json";
//import axios from 'axios'
export default {
    name: "Index",
    props: {
        sites: String
    },
    components: {
        WebItem,
        Footer,
        SearchBox
    },
    data() {
        return {
            items: [],
            lang: {},
            site: {},
            langList: [{
                key: "zh",
                name: "简体中文",
                flag: "./assets/images/flags/flag-cn.png",
            },
            {
                key: "en",
                name: "English",
                flag: "./assets/images/flags/flag-us.png",
            },
            ],
            siteList: [{
                key: "main",
                name: "主导航",
                icon: "fa-solid fa-house",
                nav: "/",
                count: 38
            },
            {
                key: "code",
                name: "编程必备",
                icon: "fa-solid fa-code",
                nav: "/code",
                count: 19
            },
            {
                key: "research",
                name: "科研必备",
                icon: "fa-solid fa-bookmark",
                nav: "/research",
                count: 19
            },

            ]
        };
    },
    created() {
        // 获取数据
        /*
        axios.get('https://api.wenutu.top/nav/'+this.sites)
            .then(res => {
                this.items=res.data
            })
        */
        // 默认中文
        this.lang = this.langList[0];
        // 选择站点
        switch (this.sites) {
            case "main":
                this.items = MainData;
                this.site = this.siteList[0];
                break;
            case "code":
                this.items = CodeData;
                this.site = this.siteList[1];
                break;
            case "research":
                this.items = ResearchData;
                this.site = this.siteList[2];
                break;
            default:
                this.items = MainData
        }
    },
    methods: {
        transName(webItem) {
            return this.lang.key === "en" ? webItem.en_name : webItem.name;
        },
        scrollToTop() {
            window.scrollTo(0, 0); // 将页面滚动到顶部
        },
        scrollToBottom() {
            window.scrollTo(0, document.body.scrollHeight); // 将页面滚动到底部
        }
    },
};
</script>

<style>

.site {
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
}
</style>
