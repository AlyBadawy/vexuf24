require "rails_helper"

RSpec.describe "Reacts" do
  describe "GET /dashboard" do
    it "returns http success" do
      get "/dashboard"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /admin" do
    it "returns http success" do
      get "/admin"
      expect(response).to have_http_status(:success)
    end
  end
end
