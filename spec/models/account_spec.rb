require "rails_helper"

RSpec.describe Account do
  it "is valid with valid attributes" do
    user1 = create(:account)
    expect(user1).to be_valid
  end

  it "is not valid without a password" do
    user2 = build(:account, password: nil)
    expect(user2).not_to be_valid
  end

  describe "validations" do
    subject(:account) { build(:account) }

    it { is_expected.to validate_presence_of(:email) }
    it { is_expected.to validate_uniqueness_of(:email).case_insensitive }
    it { is_expected.to validate_presence_of(:password) }
  end

  describe "associations" do
    subject(:account) { build(:account) }

    it { is_expected.to have_many(:patient_sessions).class_name("CareSession") }
    it { is_expected.to have_many(:care_giver_sessions).class_name("CareSession") }
    it { is_expected.to have_many(:account_roles) }
    it { is_expected.to have_many(:roles).through(:account_roles) }
  end

  describe "#role?" do
    let(:account) { create(:account) }
    let(:role) { create(:role, name: "admin") }

    before do
      account.roles << role
    end

    it "returns true if the account has the specified role" do
      expect(account.role?("admin")).to be true
    end

    it "returns false if the account does not have the specified role" do
      expect(account.role?("other_role")).to be false
    end
  end
end
