class Api::UsersController < ApplicationController
  def new
  end

  def index
  end

  def show
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      # TODO: render
    else
      flash[:errors] = @user.errors.full_messages
      # TODO: render
    end
  end

  def edit
  end

  def update
  end

  def destroy
  end

  def user_params
    params.require(:user).permit(:username, :password, :email, :img_url)
  end
end
