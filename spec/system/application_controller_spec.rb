require "rails_helper"

RSpec.describe ApplicationController, type: :controller do
  describe "#after_sign_in_path_for" do
    it "returns the app path" do
      expect(subject.after_sign_in_path_for(double)).to eq(app_path) # rubocop:disable RSpec/NamedSubject
    end
  end

  describe "#configure_permitted_parameters" do
    let(:params_hash) { instance_double(ActionController::Parameters) }

    before do
      allow(subject).to receive(:devise_parameter_sanitizer).and_return(params_hash) # rubocop:disable RSpec/SubjectStub,RSpec/NamedSubject
    end

    it "adds the custom sign up parameters" do
      expect(params_hash).to receive(:permit).with(:account_update, keys: [:first_name, :last_name, :phone_number]) # rubocop:disable RSpec/MessageSpies
      expect(params_hash).to receive(:permit).with(:sign_up, keys: [:first_name, :last_name, :phone_number]) # rubocop:disable RSpec/MessageSpies
      subject.send(:configure_permitted_parameters) # rubocop:disable RSpec/NamedSubject
    end
  end
end
