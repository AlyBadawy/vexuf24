class CareSession < ApplicationRecord
  belongs_to :patient, class_name: "Account"
  belongs_to :care_giver, class_name: "Account"
  has_many :notes, dependent: :destroy

  validates :session_datetime, presence: true
end
