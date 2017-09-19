class Api::SessionsController < ApplicationController
  def new
  end

  def index
  end

  def show
  end

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    if @user
      login(@user)
      render "/api/users"
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
    logout
    # TODO: render
  end
end
