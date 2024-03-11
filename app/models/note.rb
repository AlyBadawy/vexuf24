class Note < ApplicationRecord
  belongs_to :therapy_session
  has_many :notes_topics, dependent: :destroy
  has_many :topics, through: :notes_topics

  validates :content, presence: true

  has_paper_trail
end
