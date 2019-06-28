Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      ### AUTHENTICATION ###
      post 'auth' => 'user_token#create'

      ### USERS ###
      resources :users do
        member do
          resources :assignments, only: %i[index]
        end
      end

      resources :assignments, only: %i[index create destroy]

      ### EVENTS ###
      resources :events

      ### LOCATIONS ###
      resources :locations
    end
  end
end
