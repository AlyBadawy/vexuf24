require "rails_helper"

RSpec.describe TherapySession do
  describe "associations" do
    it { is_expected.to belong_to(:patient).class_name("Account") }
    it { is_expected.to belong_to(:therapist).class_name("Account") }
    it { is_expected.to have_many(:notes).dependent(:destroy) }
  end

  describe "validations" do
    subject(:therapy_session) { build(:therapy_session) }

    it { is_expected.to validate_presence_of(:session_datetime) }
  end
end
