class Card < ApplicationRecord
    validates :deck_id, presence:true
    
    belongs_to :deck

    # has_one_attached :picture


end