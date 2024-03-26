Rails.application.routes.draw do
  # flipper route
  constraints CanAccessFlipperUI do
    mount Flipper::UI.app(Flipper) => "/flipper"
  end

  devise_for :accounts

  get "up" => "rails/health#show", as: :rails_health_check

  get "/about", to: "static#about"
  get "/contact", to: "static#contact"
  get "/cookies", to: "static#cookies"
  get "/cookies_banner", to: "static#cookies_banner"
  get "/tos", to: "static#tos"
  get "/privacy", to: "static#privacy"

  get "/app", to: "react#app"

  namespace :api, defaults: { format: :json } do
    get "/accounts/me", to: "accounts#me", as: "me_accounts"
    delete "/accounts/sign_me_out", to: "accounts#sign_me_out", as: "sign_me_out_accounts"
    resources :accounts
    resources :roles

    resources :topics

    resources :notes
  end

  # Defines the root path route ("/")
  root "static#home"
end
