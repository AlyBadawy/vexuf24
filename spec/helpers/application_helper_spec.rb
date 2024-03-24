require "rails_helper"

RSpec.describe ApplicationHelper do
  describe "#flippers_json" do
    let(:user) { double }
    let(:feature) { instance_double(Flipper::Feature, name: "test_feature") }

    before do
      allow(Flipper).to receive(:features).and_return([feature])
    end

    it "returns the correct JSON string for a user" do
      allow(feature).to receive(:enabled?).with(user).and_return(true)

      expect(helper.flippers_json(user)).to eq('{"test_feature":true}')
    end

    it "returns the correct JSON string for no user" do
      allow(feature).to receive(:enabled?).with(no_args).and_return(false)

      expect(helper.flippers_json(nil)).to eq('{"test_feature":false}')
    end
  end

  describe "#git_revision" do
    let(:git_revision) { "abcd1234" }
    let(:git_tag) { "v1.0" }

    before do
      allow_any_instance_of(Kernel).to receive(:`).with("git rev-parse HEAD").and_return("#{git_revision}\n") # rubocop:disable RSpec/AnyInstance
      allow_any_instance_of(Kernel).to receive(:`).with("git describe --tags --abbrev=0 --always").and_return("#{git_tag}\n") # rubocop:disable RSpec/AnyInstance
      allow(Dir).to receive(:chdir).with(anything()).and_yield
    end

    context "when in production environment" do
      before do
        allow(Rails).to receive_message_chain(:env, :production?).and_return(true) # rubocop:disable RSpec/MessageChain
      end

      it "returns the correct JSON string" do
        expect(helper.git_revision).to eq({ revision: git_revision, tag: git_tag, message: "Version: v1.0 - Revision: #{git_revision[0..6]}" }.to_json)
      end
    end

    context "when not in production environment" do
      before do
        allow(Rails).to receive_message_chain(:env, :production?).and_return(false) # rubocop:disable RSpec/MessageChain
      end

      it "returns the correct JSON string" do
        expect(helper.git_revision).to eq({ revision: git_revision, tag: git_tag, message: "Version: v1.0 - Revision: #{git_revision[0..6]}" }.to_json)
      end
    end
  end
end
