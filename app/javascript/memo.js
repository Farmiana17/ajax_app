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
  });
};

window.addEventListener('load', post);