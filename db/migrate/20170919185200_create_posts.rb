class CreatePosts < ActiveRecord::Migration[5.1]
  def change
    create_table :posts do |t|
      t.string :content
      t.string :title
      t.string :body
      t.string :url
      t.integer :author_id

      t.timestamps
    end
  end
end
