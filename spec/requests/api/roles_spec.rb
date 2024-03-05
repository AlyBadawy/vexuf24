require "rails_helper"

RSpec.describe "Api::Roles" do
  before { sign_in_tester }

  describe "GET /index" do
    it "returns a successful response" do
      get api_roles_path
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /show" do
    let(:role) { create(:role) }

    it "returns a successful response" do
      get api_role_path(role)
      expect(response).to have_http_status(:success)
    end
  end

  describe "POST /create" do
    let(:valid_attributes) { { name: "Admin" } }

    it "creates a new Role" do
      expect {
        post api_roles_path, params: { role: valid_attributes }
      }.to change(Role, :count).by(1)
    end
  end

  describe "PATCH /update" do
    let(:role) { create(:role) }
    let(:new_attributes) { { name: "User" } }

    it "updates the requested role" do
      patch api_role_path(role), params: { role: new_attributes }
      role.reload
      expect(role.name).to eq("User")
    end
  end

  describe "DELETE /destroy" do
    let!(:role) { create(:role) }

    it "destroys the requested role" do
      expect {
        delete api_role_path(role)
      }.to change(Role, :count).by(-1)
    end
  end
end
