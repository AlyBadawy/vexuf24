FactoryBot.define do
  factory :therapy_session do
    association :therapist, strategy: :build
    association :patient, strategy: :build
    session_datetime { "2024-03-04 15:12:22" }
  end
end
