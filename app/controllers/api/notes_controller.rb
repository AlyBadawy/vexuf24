# app/controllers/api/notes_controller.rb

module Api
  class NotesController < ApplicationController
    before_action :authenticate_account!
    before_action :set_note, only: [:show, :update, :destroy]

    # GET /notes
    def index
      @notes = Note.all
    end

    # GET /notes/1
    def show
    end

    # POST /notes
    def create
      @note = Note.new(note_params)
      render json: @note.errors, status: :unprocessable_entity unless @note.save
    end

    # PATCH/PUT /notes/1
    def update
      render json: @note.errors, status: :unprocessable_entity unless @note.update(note_params)
    end

    # DELETE /notes/1
    def destroy
      @note.destroy
    end

    private

    # Use callbacks to share common setup or constraints between actions.
    def set_note
      @note = Note.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def note_params
      params.require(:note).permit(:content, :therapy_session_id)
    end
  end
end
