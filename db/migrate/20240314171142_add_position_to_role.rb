class AddPositionToRole < ActiveRecord::Migration[7.1]
  def change
    change_table :roles, bulk: true do |t|
      t.integer :position, null: false, default: 0
    end
  end
end
