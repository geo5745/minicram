class Api::CardsController < ApplicationController
    protect_from_forgery except: [:create, :show, :destroy, :update]

    def create
        @card = Card.new(deck_id: params[:set][:id], term: '', definition: '')
        if @card.save!
            render 'api/cards/show'
        else
            render json: @card.errors.full_messages, status: 401
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

    def update
        @card = Card.find_by(id: params[:id])
        if @card.update!(term: params[:card][:term], definition: params[:card][:definition])
            render 'api/cards/show'
        else
            render json: @card.errors.full_messages, status: 401
        end
    end
end
