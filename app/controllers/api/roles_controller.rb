# app/controllers/api/roles_controller.rb

module Api
  class RolesController < ApplicationController
    before_action :authenticate_account!
    before_action :set_role, only: [:show, :update, :destroy]

    # GET /roles
    def index
      @roles = Role.all
    end

    # GET /roles/1
    def show
    end

    # POST /roles
    def create
      @role = Role.new(role_params)

      render json: @role.errors, status: :unprocessable_entity unless @role.save
    end

    # PATCH/PUT /roles/1
    def update
      render json: @role.errors, status: :unprocessable_entity unless @role.update(role_params)
    end

    # DELETE /roles/1
    def destroy
      @role.destroy
    end

    private

    # Use callbacks to share common setup or constraints between actions.
    def set_role
      @role = Role.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def role_params
      params.require(:role).permit(:name)
    end
  end
end
