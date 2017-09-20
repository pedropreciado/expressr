Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
      resources :users, only: [:index, :create]
      resource :session, only: [:create, :destroy]
      resources :posts, only: [:index, :create, :update, :destroy]
      resources :users do
        resources :followers, only: [:index, :create, :destroy]
      end
      resources :likes, only: [:create, :destroy]

  end

  root "static_pages#root"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
