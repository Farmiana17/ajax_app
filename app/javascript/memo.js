const buildHTML = (XHR) => {
  const item = XHR.response.post;
  const html = `
    <div class="post">
      <div class="post-date">
        投稿日時：${item.created_at}
      </div>
      <div class="post-content">
        ${item.content}
      </div>
    </div>`;
  return html;
};

function post (){
  const submit = document.getElementById("submit");
  //<%= form.submit '投稿する' , id: "submit" %>を取得//
  submit.addEventListener("click", (e) => {
    //e(イベントオブジェクト）に、「投稿ボタンをクリックした」という情報を持たせる//
    e.preventDefault();
    //e(「投稿ボタンをクリックした」という現象)を無効化する//
    const form = document.getElementById("form");
    //<%= form_with url: "/posts", method: :post, id: "form" do |form| %>をID「form」に格納//
    const formData = new FormData(form);
    //FormDataを新規作成し、変数「formData」に対して//
    //<%= form_with url: "/posts", method: :post, id: "form" do |form| %>を取得//
    const XHR = new XMLHttpRequest();
    //XHR(XMLHttpRequest)オブジェクトを新規作成する//
    XHR.open("POST", "/posts", true);
    //open()メソッドを使用  ※HTTPメソッドは「POST」、パスは「/post」、非同期通信である(true)//
    XHR.responseType = "json";
    //responseTypeプロパティにより、レスポンスをJSON形式で返すように指定//
    XHR.send(formData);
    //send()メソッドを使用  *「formData」をサーバーに送信//
    XHR.onload = () => {
    //onloadプロパティで、レスポンスの受信をが成功したときの処理を設定//
      if (XHR.status != 200) {
        alert(`Error ${XHR.stats}: ${XHR.statusText}`);
        return null;
      };
      const list = document.getElementById("list");
      const formText = document.getElementById("content");
      const item = XHR.response.post;
    //レスポンスの情報のうち、投稿されたメモの情報を取り出し、変数「item」に格納する//
      const html = `
        <div class="post">
          <div class="post-date">
            投稿日時：${item.created_at}
          </div>
          <div class="post-content">
            ${item.content}
          </div>
        </div>`;
      list.insertAdjacentHTML("afterend", html);
      formText.value = "";
    };
  });
};

window.addEventListener('load', post);