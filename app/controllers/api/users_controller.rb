class Api::UsersController < ApplicationController
  def new
  end

  def index
    @users = (User.all - [current_user] - [User.find_by(username: "guest")]) + (User.all - [current_user] - [User.find_by(username: "guest")])
  end

  def show
    @user = current_user
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def edit
  end

  def update
  end

  def destroy
    @user = User.find(params[:id])
    @user.destroy!
  end

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end
