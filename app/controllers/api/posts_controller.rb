class Api::PostsController < ApplicationController
  def new
    render :new
  end

  def index
    @posts = current_user.followed_posts + current_user.posts
  end

  def show
    @post = Post.find(params[:id])
  end

  def create
    @post = Post.new(post_params)
    @post.author_id = current_user.id
    if @post.save
      render :index
    else
      render json: @post.errors.full_messages
    end
  end

  def edit
    render :edit
  end

  def update
    @post = Post.find(params[:id])
    if @post.update_attributes(post_params)
      render :index
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def destroy
    @post = Post.all.find(params[:id])
    if @post.destroy!
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def post_params
    params.require(:post).permit(:content, :title, :body, :url)
  end

end
