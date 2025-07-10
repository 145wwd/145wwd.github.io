var posts=["2025/07/10/盲派八字/","2025/07/10/盲派命理中天干与地支的作用关系解析/","2025/07/10/怎么看八字/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };