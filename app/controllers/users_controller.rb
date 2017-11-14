class UsersController < ApplicationController
  def index
    @users = User.all
  end

  def new
    @user = User.new(user_params)
  end

  def create
  end

  def show
    @user = User.find_by(id: params[:id])
  end

  private

  def user_params
    params.require(:user).permit(:name, :highscore)
  end
end
