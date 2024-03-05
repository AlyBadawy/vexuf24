# app/controllers/api/accounts_controller.rb

module Api
  class AccountsController < ApplicationController
    before_action :authenticate_account!
    before_action :set_account, only: [:show, :update, :destroy]

    # GET /accounts
    def index
      @accounts = Account.all
    end

    # GET /accounts/1
    def show
    end

    def me
      @account = current_account
      render :show
    end

    # POST /accounts
    def create
      @account = Account.new(account_params)

      render json: @account.errors, status: :unprocessable_entity unless @account.save
    end

    # PATCH/PUT /accounts/1
    def update
      render json: @account.errors, status: :unprocessable_entity unless @account.update(account_params)
    end

    # DELETE /accounts/1
    def destroy
      @account.destroy
    end

    private

    # Use callbacks to share common setup or constraints between actions.
    def set_account
      @account = Account.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def account_params
      params.require(:account).permit(:email, :password)
    end
  end
end
