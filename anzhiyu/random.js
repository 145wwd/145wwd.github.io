var posts=["2025/05/12/八字的富贵贫贱/","2025/05/11/盲派八字精髓：做功与效率/","2025/05/11/盲派八字精髓：宾主和体用/","2025/05/13/联系方式/","2025/05/12/盲派命理六大要诀/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };