class AddPrsonalInfoToAccount < ActiveRecord::Migration[7.1]
  def change
    change_table :accounts, bulk: true do |t|
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :phone_number, null: false, default: ""
    end
  end
end
