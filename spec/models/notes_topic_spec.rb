require "rails_helper"

RSpec.describe NotesTopic do
  describe "associations" do
    it { is_expected.to belong_to(:note) }
    it { is_expected.to belong_to(:topic) }
  end

  describe "validations" do
    subject(:notes_topic) { build(:notes_topic) }

    it { is_expected.to validate_presence_of(:note) }
    it { is_expected.to validate_presence_of(:topic) }
  end
end
