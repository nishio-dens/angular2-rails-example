Rails.application.routes.draw do
  root 'dashboard#index'

  namespace :api, defaults: { format: :json } do
    resources :products, only: [:index, :new, :create, :edit, :update]
  end
end
