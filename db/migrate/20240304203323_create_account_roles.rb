class CreateAccountRoles < ActiveRecord::Migration[7.1]
  def change
    create_table :account_roles, id: :uuid do |t|
      t.references :account, null: false, foreign_key: true, type: :uuid
      t.references :role, null: false, foreign_key: true, type: :uuid

      t.timestamps
    end
  end
end
