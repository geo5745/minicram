json.set! :sets do 
    json.set! @deck.id do
        json.extract! @deck, :id, :title, :description, :user_id
        json.set! :card_count, @deck.cards.length
    end
end
json.set! :cards do
    @deck.cards.each do |card|
        json.set! card.id do
            json.extract! card, :id, :term, :definition, :deck_id
        end
    end
end
