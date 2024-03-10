require "rails_helper"

RSpec.describe "Reacts" do
  describe "GET /app" do
    it "returns http success" do
      get "/app"
      expect(response).to have_http_status(:success)
    end
  end
end
