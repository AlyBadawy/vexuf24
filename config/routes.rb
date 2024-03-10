Rails.application.routes.draw do
  devise_for :accounts

  get "up" => "rails/health#show", as: :rails_health_check

  get "/about", to: "static#about"
  get "/contact", to: "static#contact"
  get "/cookies", to: "static#cookies"
  get "/cookies_banner", to: "static#cookies_banner"
  get "/tos", to: "static#tos"
  get "/privacy", to: "static#privacy"

  get "/dashboard", to: "react#dashboard"
  get "/admin", to: "react#admin"

  # Defines the root path route ("/")
  root "static#home"

  namespace :api, defaults: { format: :json } do
    get "/accounts/me", to: "accounts#me", as: "me_accounts"
    resources :accounts
    resources :roles

    resources :topics

    resources :notes
  end
end
