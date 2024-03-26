FactoryBot.define do
  factory :care_session do
    association :care_giver, factory: :account, strategy: :build
    association :patient, factory: :account, strategy: :build
    session_datetime { Time.zone.parse("2024-03-04 15:12:22") }
  end
end
