require "rails_helper"

RSpec.describe Note do
  describe "validations" do
    subject(:note) { build(:note) }

    it { is_expected.to validate_presence_of(:content) }
  end

  describe "associations" do
    subject(:note) { build(:note) }

    it { is_expected.to belong_to(:care_session) }
    it { is_expected.to have_many(:notes_topics) }
    it { is_expected.to have_many(:topics).through(:notes_topics) }
  end
end
