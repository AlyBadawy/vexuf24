class AccountRole < ApplicationRecord
  belongs_to :account
  belongs_to :role
end
