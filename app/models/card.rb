class Card < ApplicationRecord
    validates :deck_id, presence:true
    
    belongs_to :deck


end