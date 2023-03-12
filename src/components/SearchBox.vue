<template>
    <div class="search-engine">
      <div>
        <button
          v-for="category in categories"
          :key="category.id"
          :class="{'active': activeCategory === category.id}"
          @click="selectCategory(category.id)"
        >
          {{ category.name }}
        </button>
      </div>
      <div>
        <div>
            <form :action="searchUrl" method="GET" target="_blank" class="width=100%">
              <input type="text" :name="searchName" v-model="searchText" :placeholder="searchPlaceholder" />
              <button type="submit"><i class="fa fa-search"></i></button>
            </form>
          </div>
        <div>
          <button
            v-for="searchEngine in activeSearchEngines"
            :key="searchEngine.id"
            :class="{'active': activeSearchEngine === searchEngine.id}"
            @click="selectSearchEngine(searchEngine.id)"
          >
            {{ searchEngine.name }}
          </button>
        </div>
       
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name : 'SearchBox',
    data() {
      return {
        categories: [
        { id: 1, name: '常用', searchEngines: [
          { id: 11, name: 'Google', url: 'https://www.google.com/search',placeholder:'google 一下',n:'q'},
          { id: 12, name: 'Bing', url: 'https://www.bing.com/search',placeholder:'bing 两下',n:'q' },
          { id: 13, name: '百度',url:'https://www.baidu.com/s',placeholder:'无奈之举',n:'wd'}
        ] },
        { id: 2, name: '社区', searchEngines: [
          { id: 21, name: 'Github', url: 'https://github.com/search',placeholder:'Github',n:'q' },
          { id: 22, name: 'Stackoverflow', url: 'https://stackoverflow.com/search',placeholder:'Stackoverflow' ,n:'q'},
          { id: 23, name: 'Gitee',url: 'https://search.gitee.com/?skin=rec&type=repository',placeholder:'码云',n:'q'}
        ] },
        { id: 3, name: '生活', searchEngines: [
          { id: 31, name: '知乎', url: 'https://www.zhihu.com/search?type=content',placeholder:'知乎',n:'q' },
          { id: 32, name: '微博', url: 'https://s.weibo.com/weibo',placeholder:'微博' ,n:'q'},
          { id: 33, name: '哔哩哔哩',url:'https://search.bilibili.com/all',placeholder:'B站',n:'keyword'}
        ] }
      ],
        activeCategory: 1,
        activeSearchEngine: 11,
        searchText: ''
      }
    },
    computed: {
      activeSearchEngines() {
        return this.categories.find(c => c.id === this.activeCategory).searchEngines
      },
      searchPlaceholder(){
        const replace =this.activeSearchEngines.find(se => se.id === this.activeSearchEngine)
        return replace.placeholder
      },
      searchName(){
        if (this.activeCategory && this.activeSearchEngine) {
          const searchEngine = this.activeSearchEngines.find(se => se.id === this.activeSearchEngine)
          //const query = encodeURIComponent(this.searchText) 
          return `${searchEngine.n}`
        }
        return 'q'
      },
      searchUrl() {
        if (this.activeCategory && this.activeSearchEngine) {
          const searchEngine = this.activeSearchEngines.find(se => se.id === this.activeSearchEngine)
          //const query = encodeURIComponent(this.searchText) 
          return `${searchEngine.url}`
        }
        return ''
      }
    },
    methods: {
      selectCategory(categoryId) {
        this.activeCategory = categoryId
        this.activeSearchEngine = this.activeSearchEngines[0].id
        //this.searchText = ''
      },
      selectSearchEngine(searchEngineId) {
        this.activeSearchEngine = searchEngineId
      }
    }
  }
  </script>
  
  <style>

  </style>
  