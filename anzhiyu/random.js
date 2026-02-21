var posts=["2026/02/21/大六壬的妙用/","2026/02/13/这是一篇新的博文/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };