require "rails_helper"

RSpec.describe AccountRole do
  describe "associations" do
    it { is_expected.to belong_to(:account) }
    it { is_expected.to belong_to(:role) }
  end
end
