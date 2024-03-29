class CreateNotes < ActiveRecord::Migration[7.1]
  def change
    create_table :notes, id: :uuid do |t|
      t.jsonb :content
      t.references :care_session, null: false, foreign_key: true, type: :uuid

      t.timestamps
    end
  end
end
