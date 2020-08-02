class CreateSets < ActiveRecord::Migration[5.2]
  def change
    create_table :sets do |t|
      t.string :title
      t.string :description
      t.integer :user_id, null:false
      t.timestamps
    end
    add_index(:sets, [:title,:user_id])
  end
end
