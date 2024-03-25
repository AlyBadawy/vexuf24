class NotesTopic < ApplicationRecord
  belongs_to :note
  belongs_to :topic
end
