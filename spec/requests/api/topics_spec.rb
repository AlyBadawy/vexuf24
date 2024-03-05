require "rails_helper"

RSpec.describe "Api::Topics" do
  before { sign_in_tester }

  describe "GET /index" do
    it "returns a successful response" do
      get api_topics_path
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /show" do
    let(:topic) { create(:topic) }

    it "returns a successful response" do
      get api_topic_path(topic)
      expect(response).to have_http_status(:success)
    end
  end

  describe "POST /create" do
    let(:valid_attributes) { { name: "Topic Name", parent_topic_id: nil } }

    it "creates a new Topic" do
      expect {
        post api_topics_path, params: { topic: valid_attributes }
      }.to change(Topic, :count).by(1)
    end
  end

  describe "PATCH /update" do
    let(:topic) { create(:topic) }
    let(:new_attributes) { { name: "Updated Topic Name" } }

    it "updates the requested topic" do
      patch api_topic_path(topic), params: { topic: new_attributes }
      topic.reload
      expect(topic.name).to eq("Updated Topic Name")
    end
  end

  describe "DELETE /destroy" do
    let!(:topic) { create(:topic) }

    it "destroys the requested topic" do
      expect {
        delete api_topic_path(topic)
      }.to change(Topic, :count).by(-1)
    end
  end
end
