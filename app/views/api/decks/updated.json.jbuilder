json.set! :sets do 
    json.set! @deck.id do
        json.extract! @deck, :id, :title, :description, :user_id
        json.set! :card_count, @deck.cards.length
    end
end