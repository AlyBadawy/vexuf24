require "rails_helper"

RSpec.describe "Api::Accounts" do
  before { sign_in_tester }

  describe "GET /index" do
    it "returns a successful response" do
      get api_accounts_path
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /show" do
    let(:account) { create(:account) }

    it "returns a successful response" do
      get api_account_path(account)
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /me" do
    it "returns the current account" do
      get api_me_accounts_path
      expect(response).to have_http_status(:success)
    end
  end

  describe "Delete /sign_me_out" do
    it "Signs off the current user" do
      delete api_sign_me_out_accounts_path
      expect(response).to have_http_status(:no_content)
    end
  end

  describe "POST /create" do
    let(:valid_attributes) {
      { email: "test@example.com",
        password: "password",
        first_name: Faker::Name.first_name,
        last_name: Faker::Name.last_name }
    }

    it "creates a new Account" do
      expect {
        post api_accounts_path, params: { account: valid_attributes }
      }.to change(Account, :count).by(1)
    end
  end

  describe "PATCH /update" do
    let(:account) { create(:account) }
    let(:new_attributes) { { email: "updated@example.com" } }

    it "updates the requested account" do
      expect(account.unconfirmed_email).to be_nil
      patch api_account_path(account), params: { account: new_attributes }
      account.reload
      expect(account.unconfirmed_email).to eq("updated@example.com")
    end
  end

  describe "DELETE /destroy" do
    let!(:account) { create(:account) }

    it "destroys the requested topic" do
      expect {
        delete api_account_path(account)
      }.to change(Account, :count).by(-1)
    end
  end
end
