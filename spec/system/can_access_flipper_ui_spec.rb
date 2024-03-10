require "rails_helper"

RSpec.describe CanAccessFlipperUI do
  describe ".matches?" do
    subject { described_class.matches?(request) }

    let(:warden) { double("Warden", user: user) } # rubocop:disable RSpec/VerifiedDoubles
    let(:request) { instance_double("Request", env: { "warden" => warden }) } # rubocop:disable RSpec/VerifiedDoubleReference

    context "when the user is an admin" do
      let(:user) { create(:account, :admin) }

      it "returns true" do
        expect(subject).to be true # rubocop:disable RSpec/NamedSubject
      end
    end

    context "when the user is not an admin" do
      let(:user) { create(:account) }

      it "returns false" do
        expect(subject).to be false # rubocop:disable RSpec/NamedSubject
      end
    end
  end
end
