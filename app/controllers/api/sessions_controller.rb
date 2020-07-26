class Api::SessionsController < ApplicationController

    def new
        render :new
    end

    def create
        username = params[:user][:username]
        password = params[:user][:password]
        user = User.find_by_credentials(username,password)
        if user
            session[:session_token] = user.reset_session_token!
            # render user in jbuilder?
        else
            #errors
        end
    end

    def destroy
        current_user.reset_session_token!
        session[:session_token] = nil
        # redirect to index?
    end



end
