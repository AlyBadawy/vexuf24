# app/controllers/api/topics_controller.rb

module Api
  class TopicsController < ApplicationController
    before_action :authenticate_account!
    before_action :set_topic, only: [:show, :update, :destroy]

    # GET /topics
    def index
      @topics = Topic.all
    end

    # GET /topics/1
    def show
    end

    # POST /topics
    def create
      @topic = Topic.new(topic_params)

      render json: @topic.errors, status: :unprocessable_entity unless @topic.save
    end

    # PATCH/PUT /topics/1
    def update
      render json: @topic.errors, status: :unprocessable_entity unless @topic.update(topic_params)
    end

    # DELETE /topics/1
    def destroy
      @topic.destroy
    end

    private

    # Use callbacks to share common setup or constraints between actions.
    def set_topic
      @topic = Topic.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def topic_params
      params.require(:topic).permit(:name)
    end
  end
end
