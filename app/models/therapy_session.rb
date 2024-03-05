class TherapySession < ApplicationRecord
  belongs_to :patient, class_name: "Account"
  belongs_to :therapist, class_name: "Account"
  has_many :notes, dependent: :destroy

  validates :session_datetime, presence: true
end
