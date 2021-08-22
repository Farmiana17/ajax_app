class PostsController < ApplicationController

  def index
    @posts = Post.order(id: "DESC")
  end

  #def new
  #end

  def create
    post = Post.create(content: params[:content])
    #「post」キーに対して、「新規投稿したメモの内容」をデータベースに格納する
    render json:{ post: post }
    #「redirect_to action: :index」から変更
    # → レスポンスの形式をJSON形式に指定し、「post」の「新規投稿したメモの内容」と「キー」をJavaScriptに送信
    #データベースから返されたID、Contentなどもあわせて送信されている
  end
end
