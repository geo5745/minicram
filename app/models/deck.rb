class Deck < ApplicationRecord
    validates :user_id, presence:true

    belongs_to :user
    has_many :cards, dependent: :destroy

    
end