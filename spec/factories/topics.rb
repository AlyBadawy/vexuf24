FactoryBot.define do
  # rubocop:disable FactoryBot/FactoryAssociationWithStrategy
  factory :topic do
    name { Faker::Lorem.words(number: 2).join(" ") }

    trait :with_parent do
      parent_topic { create(:topic) }
    end

    trait :with_child do
      after(:create) do |topic|
        create(:topic, parent_topic: topic)
      end
    end

    trait :with_parent_and_child do
      parent_topic { create(:topic) }

      after(:create) do |topic|
        create(:topic, parent_topic: topic)
      end
    end
  end
  # rubocop:enable FactoryBot/FactoryAssociationWithStrategy
end
