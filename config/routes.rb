Rails.application.routes.draw do
  root 'events#index'

  resources :events, only: [:index, :create] do
    get :search, on: :collection
  end
end