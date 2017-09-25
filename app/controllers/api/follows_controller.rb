class Api::FollowsController < ApplicationController
  def create
    @follow = Follow.new(follow_params)
    @follow.follower_id = current_user.id
    if @follow.save
      render :show
    else
    end
  end

  def follow_params
    params.require(:follow).permit(:followee_id)
  end

end
