class Api::CardsController < ApplicationController
    protect_from_forgery except: [:create, :show, :destroy]

    def create
        @card = Card.new
        if @card.save!
            render 'api/cards/show'
        else
            render json: @user.errors.full_messages, status: 401
        end
    end

    def show
        @card = Card.find_by(id: params[:id])
        render 'api/cards/show'
    end

    def destroy
        @card = Card.find_by(id: params[:id])
        @card.destroy
        render 'api/cards/show'
    end


end
