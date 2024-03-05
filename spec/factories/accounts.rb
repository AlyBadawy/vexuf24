FactoryBot.define do
  factory :account do
    email { Faker::Internet.email }
    password { "password" }

    trait :therapist do
      after(:create) do |account|
        account.roles << Role.find_or_create_by(name: "therapist")
      end
    end

    trait :patient do
      after(:create) do |account|
        account.roles << Role.find_or_create_by(name: "patient")
      end
    end

    trait :admin do
      after(:create) do |account|
        account.roles << Role.find_or_create_by(name: "admin")
      end
    end
  end
end
