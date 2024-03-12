FactoryBot.define do
  factory :account do
    email { Faker::Internet.email }
    password { "password" }
    first_name { Faker::Name.first_name }
    last_name { Faker::Name.last_name }
    phone_number { Faker::PhoneNumber.phone_number }

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
