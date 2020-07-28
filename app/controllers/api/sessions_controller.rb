class Api::SessionsController < ApplicationController
    protect_from_forgery except: [:create, :destroy]

    def create
        username = params[:user][:username]
        password = params[:user][:password]
        @user = User.find_by_credentials(username,password)
        if @user
            login!(@user)
            render 'api/users/show'
        else
            render json: ["Invalid Credentials"], status: 401
        end
    end

    def destroy
        if current_user
            logout!
            render json: {}
          else
            render json: ['Could not locate user'], status: 404
          end
    end

end
