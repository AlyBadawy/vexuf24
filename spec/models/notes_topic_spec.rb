require "rails_helper"

RSpec.describe NotesTopic do
  describe "associations" do
    it { is_expected.to belong_to(:note) }
    it { is_expected.to belong_to(:topic) }
  end
end
