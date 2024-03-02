require "rails_helper"

RSpec.describe "Statics" do
  describe "GET /" do
    it "returns http success" do
      get "/"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /about" do
    it "returns http success" do
      get "/about"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /contact" do
    it "returns http success" do
      get "/contact"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /cookies" do
    it "returns http success" do
      get "/cookies"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /tos" do
    it "returns http success" do
      get "/tos"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /privacy" do
    it "returns http success" do
      get "/privacy"
      expect(response).to have_http_status(:success)
    end
  end
end
