Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      ### AUTHENTICATION ###
      post 'auth' => 'user_token#create'

      ### USERS ###
      resources :users
<<<<<<< Updated upstream
    end
=======

      ### EVENTS ###
      #resources :events

      resources :locations do
        resources :events
      end

      ### LOCATIONS ###
      #resources :locations

      ### ASSIGING USERS TO EVENTS ###
      resources :events do
      resources :users, only: [:create, :destroy], controller: 'user_events'
      end
      ### ASSIGING USERS TO LOCATIONS ###
      resources :locations, except: [:index, :show,:update, :create, :destroy] do
      resources :users, only: [:create, :destroy], controller: 'user_locations'
      end
  end
>>>>>>> Stashed changes
  end
end
