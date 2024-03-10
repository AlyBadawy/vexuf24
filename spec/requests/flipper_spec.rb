require "rails_helper"

RSpec.describe "Flipper" do
  describe "GET /flipper" do
    context "when the user is an admin" do
      let(:admin) { create(:account, :admin) }

      before do
        sign_in admin
        get "/flipper"
      end

      it "returns http success" do
        expect(response).to have_http_status(:success)
      end
    end

    context "when the user is not an admin" do
      let(:user) { create(:account) }

      before do
        sign_in user
        get "/flipper"
      end

      it "redirects to the home page" do
        expect(response).to redirect_to(root_path)
      end
    end
  end
end
