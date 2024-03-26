class CreateCareSessions < ActiveRecord::Migration[7.1]
  def change
    create_table :care_sessions, id: :uuid do |t|
      t.datetime :session_datetime
      t.references :patient, null: false, foreign_key: { to_table: :accounts }, type: :uuid
      t.references :care_giver, null: false, foreign_key: { to_table: :accounts }, type: :uuid

      t.timestamps
    end
  end
end
