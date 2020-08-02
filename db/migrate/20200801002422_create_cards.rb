class CreateCards < ActiveRecord::Migration[5.2]
  def change
    create_table :cards do |t|
      t.string :term
      t.string :definition
      t.integer :set_id, null:false
      t.timestamps
    end
    add_index :cards, :set_id
  end
end
