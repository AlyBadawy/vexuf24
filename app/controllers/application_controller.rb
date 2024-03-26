class ApplicationController < ActionController::Base
  before_action :configure_permitted_parameters, if: :devise_controller?
  before_action :cors_set_access_control_headers

  def after_sign_in_path_for(_resource)
    app_path # your path
  end

  def cors_set_access_control_headers
    return unless Rails.env.development?

    headers["Access-Control-Allow-Origin"] = "*"
    headers["Access-Control-Allow-Methods"] = "POST, GET, OPTIONS"
    headers["Access-Control-Max-Age"] = "1728000"
  end

  protected

  def configure_permitted_parameters
    # Permit the `name` attribute for sign up and account update
    devise_parameter_sanitizer.permit(:sign_up, keys: [:first_name, :last_name, :phone_number])
    devise_parameter_sanitizer.permit(:account_update, keys: [:first_name, :last_name, :phone_number])
  end
end
