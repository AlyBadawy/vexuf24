FactoryBot.define do
  factory :therapy_session do
    association :therapist, factory: :account, strategy: :build
    association :patient, factory: :account, strategy: :build
    session_datetime { Time.zone.parse("2024-03-04 15:12:22") }
  end
end
