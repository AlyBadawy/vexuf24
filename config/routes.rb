Rails.application.routes.draw do
  devise_for :accounts
  
  get "up" => "rails/health#show", as: :rails_health_check

  get "/about", to: "static#about"
  get "/contact", to: "static#contact"
  get "/cookies", to: "static#cookies"
  get "/tos", to: "static#tos"
  get "/privacy", to: "static#privacy"

  get "/dashboard", to: "react#dashboard"
  get "/admin", to: "react#admin"

  # Defines the root path route ("/")
  root "static#home"
end
