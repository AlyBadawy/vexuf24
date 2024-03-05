class CreateTopics < ActiveRecord::Migration[7.1]
  def change
    create_table :topics, id: :uuid do |t|
      t.string :name
      t.uuid :parent_id

      t.timestamps
    end
  end
end
