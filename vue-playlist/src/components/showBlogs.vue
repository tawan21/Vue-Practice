<template>
  <div id="show-blogs">
    <h1>All Blogs</h1>
    <input type="text" v-model="search" placeholder="Search blogs" />
    <div class="single-blog" v-for="blog in filteredBlogs">
      <router-link :to="'/blog/' + blog.id">
        <h2>{{ blog.title | to - upper }}</h2>
      </router-link>
      <article>{{ blog.content | snippet }}</article>
    </div>
  </div>
</template>

<script>
import searchMixin from '../mixins/searchMixin';

export default {
  data() {
    return {
      blogs: [],
      search: ''
    }
  },
  methods: {

  },
  created() {
    this.$http.get('https://vue2-b5389-default-rtdb.firebaseio.com/posts.json').then(data => {
      return data.json();
    }).then(data => {
      var blogsArr = [];
      for (let key in data) {
        data[key].id = key;
        blogsArr.push(data[key]);
      }
      this.blogs = blogsArr;
    });
  },
  computed: {

  },
  filters: {
    toUpper(value) {
      return value.toUpperCase();
    }
  },
  mixins: [searchMixin]
}
</script>

<style>
#show-blogs {
  max-width: 800px;
  margin: 0 auto;
}

.single-blog {
  padding: 5px 20px 20px 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #fee;
}
</style>