class NotesTopic < ApplicationRecord
  belongs_to :note
  belongs_to :topic

  validates :note, :topic, presence: true # rubocop:disable Rails/RedundantPresenceValidationOnBelongsTo
end
