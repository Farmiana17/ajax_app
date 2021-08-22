class PostsController < ApplicationController

  def index
    @posts = Post.order(id: "DESC")
  end

  #def new
  #end

  def create
    post = Post.create(content: params[:content])
    #「post」キーに対して、「新規投稿したメモの内容」を格納する
    render = json:{ post: post }
    #「redirect_to action: :index」から変更
    # → レスポンスをJSON形式で行い、「post」の「新規投稿したメモの内容」と「キー」をJavaScriptに送信
  end
end
