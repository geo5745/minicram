class RenameColCards < ActiveRecord::Migration[5.2]
  def change
    rename_column :cards, :set_id, :deck_id
  end
end
