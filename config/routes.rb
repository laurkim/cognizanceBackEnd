Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :cards, only: [:index, :new, :create, :show, :update]
      resources :users, only: [:index, :new, :create, :show, :update]
    end
  end
end
