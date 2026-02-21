var posts=["2026/02/21/大六壬的妙用/","2026/02/21/盲派八字命理/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };