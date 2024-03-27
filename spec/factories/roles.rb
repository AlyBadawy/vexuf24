FactoryBot.define do
  factory :role do
    name { Faker::Job.title.field }
    description { Faker::Job.title }
  end
end
