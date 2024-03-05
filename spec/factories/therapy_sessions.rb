FactoryBot.define do
  # rubocop:disable FactoryBot/FactoryAssociationWithStrategy
  factory :therapy_session do
    session_datetime { "2024-03-04 15:12:22" }
    patient { create(:account, :patient) }
    therapist { create(:account, :therapist) }
  end
  # rubocop:enable FactoryBot/FactoryAssociationWithStrategy
end
