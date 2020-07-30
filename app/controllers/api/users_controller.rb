class Api::UsersController < ApplicationController
    protect_from_forgery except: [:validate_email]

    def index
        @users = User.all
        #render :inded - jbuilder
    end

    def new
        @user = User.new
        #render new
    end

    def create
        @user = User.new(user_params)
        if @user.save!
            render 'api/users/show'
        else
            render json: @user.errors.full_messages, status: 401
        end
    end

    def validate_email
        @user = User.find_by(email: params[:email])
        if @user
            render 'api/users/email_taken'
        else
            render 'api/users/email_open', status: 404
        end
    end

    def validate_username
        @user = User.find_by(username: params[:username])
        if @user
            render 'api/users/username_taken'
        else
            render 'api/users/username_open', status: 404
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
