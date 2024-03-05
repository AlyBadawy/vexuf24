require "rails_helper"

RSpec.describe "Api::Notes" do
  before { sign_in_tester }

  describe "GET /index" do
    it "returns a successful response" do
      get api_notes_path
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /show" do
    let(:note) { create(:note) }

    it "returns a successful response" do
      get api_note_path(note)
      expect(response).to have_http_status(:success)
    end
  end

  describe "POST /create" do
    let(:therapy_session) { create(:therapy_session) }
    let(:valid_attributes) { { content: "Note content", therapy_session_id: therapy_session.id } }

    it "creates a new Note" do
      expect {
        post api_notes_path, params: { note: valid_attributes }
      }.to change(Note, :count).by(1)
    end
  end

  describe "PATCH /update" do
    let(:note) { create(:note) }
    let(:new_attributes) { { content: "Updated content" } }

    it "updates the requested note" do
      patch api_note_path(note), params: { note: new_attributes }
      note.reload
      expect(note.content).to eq("Updated content")
    end
  end

  describe "DELETE /destroy" do
    let!(:note) { create(:note) }

    it "destroys the requested note" do
      expect {
        delete api_note_path(note)
      }.to change(Note, :count).by(-1)
    end
  end
end
