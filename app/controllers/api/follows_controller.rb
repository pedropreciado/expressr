class Api::FollowsController < ApplicationController
  def create
    @follow = Follow.new
    @follow.followee_id = params[:followee_id]
    @follow.follower_id = current_user.id
    puts @follow
    if @follow.save
      @user = User.find_by(params[:id])
      render "api/users/show", user: @user
    else
      render json: @follow.errors.full_messages
    end
  end

  def destroy
    puts params
    @follow = Follow.find_by(followee_id: params[:id])
    @follow.follower_id = current_user.id
    @follow.destroy!
    @user = User.find_by(id: params[:id])
    render "api/users/show", user: @user
  end

end
