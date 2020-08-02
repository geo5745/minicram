class RenameSets < ActiveRecord::Migration[5.2]
  def change
    rename_table :sets, :decks
  end
end
