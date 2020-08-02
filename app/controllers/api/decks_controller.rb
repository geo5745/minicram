class Api::DecksController < ApplicationController
    protect_from_forgery except: [:create, :show, :update]

    def create
        @deck = Deck.create!(user_id: params[:user][:id], title: '', description: '')
        5.times do 
            new_card = Card.create(deck_id: @deck.id, term: '', definition: '')
        end
        if @deck
            render 'api/decks/show' 
        else
            render json: @deck.errors.full_messages, status: 401
        end
    end

    def show
        @deck = Deck.find_by(id: params[:id])
        #render 'api/decks/show'
    end

    def update
        @deck = Deck.find_by(id: params[:id])
        if @deck.update!(title: params[:set][:title], description: params[:set][:description])
            render 'api/decks/updated'
        else
            render json: @deck.errors.full_messages, status: 401
        end
    end

end
