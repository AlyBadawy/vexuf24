require "rails_helper"

RSpec.describe AccountRole do
  describe "associations" do
    it { is_expected.to belong_to(:account) }
    it { is_expected.to belong_to(:role) }
  end

  describe "validations" do
    subject(:account_role) { build(:account_role) }

    it { is_expected.to validate_presence_of(:account) }
    it { is_expected.to validate_presence_of(:role) }
  end
end
