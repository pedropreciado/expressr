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
    @like.post_id = params[:post_id]
    @like.user_id = current_user[:user_id]
    @like.save
  end

  def edit
  end

  def update
  end

  def destroy
    @like = Like.find(params[:id])
    @like.destroy!
    # TODO: render
  end

end
