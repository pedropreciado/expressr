class Api::PostsController < ApplicationController
  def new
    render :new
  end

  def index
    @posts = Post.all
  end

  def show
    @post = Post.find(params[:id])
  end

  def create
    @post = Post.new(post_params)
    @post.author_id = current_user.id
    if @post.save
      # TODO: render:
    else
      flash[:errors] = @post.errors.full_messages
    end
  end

  def edit
  end

  def update
    @post = current_user.posts.find(params[:id])
    if @post.update_attributes(post_params)
      # TODO: render
    else
      flash[:errors] = @post.errors.full_messages
    end
  end

  def destroy
    @post = current_user.posts.find(params[:id])
    @post.delete!
    # TODO: render
  end

  def post_params
    params.require(:post).permit(:content, :title, :body, :url, :author_id)
  end

end
