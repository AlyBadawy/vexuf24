class CreateTherapySessions < ActiveRecord::Migration[7.1]
  def change
    create_table :therapy_sessions, id: :uuid do |t|
      t.datetime :session_datetime
      t.references :patient, null: false, foreign_key: { to_table: :accounts }, type: :uuid
      t.references :therapist, null: false, foreign_key: { to_table: :accounts }, type: :uuid

      t.timestamps
    end
  end
end
