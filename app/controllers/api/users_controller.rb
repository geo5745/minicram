class Api::UsersController < ApplicationController

    def index
        @users = User.all
        #render :inded - jbuilder
    end

    def new
        @user = User.new
        #render new
    end

    def create
        user = User.new(user_params)
        if user.save!
            # render json
        else
            #render errors
        end
    end

    def show
        @user = User.find_by(id: params[:id])
        #render show
    end

    def edit
        @user = User.find_by(id: params[:id])
        #render json
    end

    def update
        @user = User.find_by(id: params[:id])
        if user.update(user_params)
            # render json
        else
            #render errors
        end
    end


    def user_params
        params.require(:user).permit(:username, :email, :birthday, :password)
    end


end
