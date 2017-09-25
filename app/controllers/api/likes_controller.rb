class Api::LikesController < ApplicationController
  def new
  end

  def index
    @likes = Like.all
  end

  def show
  end

  def create
    @like = Like.new
    @like.post_id = params[:id]
    @like.user_id = current_user.id
    if @like.save
      @post = Post.find_by(id: params[:id])
      render "api/posts/show", post: @post
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def edit
  end

  def update
  end

  def destroy
    @like = current_user.likes.find_by(post_id: params[:id])
    if @like.destroy
      @post = Post.find_by(id: params[:id])
      render "api/posts/show", post: @post
    end
  end

end
