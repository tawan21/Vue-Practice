<template>
  <div id="show-blogs">
    <h1>All Blogs</h1>
    <input type="text" v-model="search" placeholder="Search blogs" />
    <div class="single-blog" v-for="blog in filteredBlogs">
      <h2>{{ blog.title | to-upper }}</h2>
      <article>{{ blog.body | snippet }}</article>
    </div>
  </div>
</template>

<script>
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
    this.$http.get('https://jsonplaceholder.typicode.com/posts').then(data => {
      this.blogs = data.body.slice(0, 10);
    })
  }, 
  computed: {
    filteredBlogs: function() {
      return this.blogs.filter(blog => {
        return blog.title.match(this.search);
      });
    }
  }
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