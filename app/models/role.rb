class Role < ApplicationRecord
  has_and_belongs_to_many :accounts # rubocop:disable Rails/HasAndBelongsToMany
end
