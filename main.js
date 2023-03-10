let n =1;
getPage.onclick =()=>{
  const request = new XMLHttpRequest()
  request.open('GET',`/page${n+1}.json`);
  request.onreadystatechange = ()=>{
    if(request.readyState === 4 && request.status === 200){
      const array = JSON.parse(request.response)
      array.forEach(item => {
        const li = document.createElement('li')
        li.textContent = item.id;



        xxx.appendChild(li)
      });
      n+=1;
    }
  };
  request.send();
};




getJSON.onclick = ()=>{
    //创建
    const request = new XMLHttpRequest();
    //调用
    request.open("get","/5.json");
    //监听
    request.onreadystatechange = () =>{
        if(request.readyState === 4 && request.status === 200){
            console.log(typeof request.response)
            console.log(request.response)
            const object = JSON.parse(request.response)
            console.log(typeof object)
            console.log(object)
            // myName.textContent = object.Name
        }
    };
    //调用
    request.send();
};




getXML.onclick=()=>{
    const request = new XMLHttpRequest();
    request.open('GET','/4.xml')
    request.onreadystatechange = () =>{
        if (request.readyState === 4 && request.status === 200){
            const dom = request.responseXML;
            const text = dom.getElementsByTagName('warning')[0].textContent
            console.log(text)
        }
    };
    request.send()
};



getHTML.onclick = () => {
    //创建
    const request = new XMLHttpRequest();
    //调用
    request.open("GET", "/3.html");
  
    //监听
    request.onload = () => {
      console.log('成功了');
  
      //创建style标签
      const div = document.createElement('div');
      //填写style内容
      div.innerHTML = request.response;
      //插到头部
      document.body.appendChild(div);
    };
    request.onerror = () => {
      console.log('失败了');
    };
  
    //发送
    request.send();
  };

getJS.onclick = () => {
    //创建
    const request = new XMLHttpRequest();
    //调用
    request.open('GET', '/js2.js');
  
    //监听
    request.onload = () => {
      console.log('成功了');
  
      //创建style标签
      const js = document.createElement('js');
      //填写style内容
      js.innerHTML = request.response;
      //插到头部
      document.body.appendChild(js);
    };
    request.onerror = () => {
      console.log('失败了');
    };
  
    //发送
    request.send();
  };

getCSS.onclick = () => {
    //创建
    const request = new XMLHttpRequest()
    //调用
    request.open('GET', '/style.css');
    request.onreadystatechange = () =>{
        console.log(request.readyState)
        if(request.readyState === 4){
            console.log('下载完成')
            if(request.status>=200 && request.status<300){
                const style = document.createElement("style")

                style.innerHTML = request.response;
    
                document.head.appendChild(style);
            }else{
                alert('加载 CSS 失败')
            }
        // //创建style标签
        // const style = document.createElement('style')
        // //填写style内容
        // style.innerHTML = request.response
        // //插到头部
        // document.head.appendChild(style)
        }                
    };
    //发送
    request.send()
}