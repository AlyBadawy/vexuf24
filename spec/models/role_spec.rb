require "rails_helper"

RSpec.describe Role do
  describe "associations" do
    it { is_expected.to have_many(:account_roles) }
    it { is_expected.to have_many(:accounts).through(:account_roles) }
  end

  describe "validations" do
    subject(:role) { build(:role) }

    it { is_expected.to validate_uniqueness_of(:name).case_insensitive }
  end
end
