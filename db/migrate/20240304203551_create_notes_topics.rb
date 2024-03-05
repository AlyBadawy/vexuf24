class CreateNotesTopics < ActiveRecord::Migration[7.1]
  def change
    create_table :notes_topics, id: :uuid do |t|
      t.references :note, null: false, foreign_key: true, type: :uuid
      t.references :topic, null: false, foreign_key: true, type: :uuid

      t.timestamps
    end
  end
end
