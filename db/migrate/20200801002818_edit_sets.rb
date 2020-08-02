class EditSets < ActiveRecord::Migration[5.2]
  def change
    remove_index :sets, name: "index_sets_on_title_and_user_id"
    remove_index :users, name: "index_users_on_username_and_email"
    add_index :users, :username, unique: true
    add_index :users, :email, unique: true
    add_index :sets, :title
    add_index :sets, :user_id
  end
end
