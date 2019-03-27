Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      ### AUTHENTICATION ###
      post 'auth' => 'user_token#create'
      post 'login', to: 'authentication#login'

      ### USERS ###
      resources :users

      ### EVENTS ###
      resources :events

      ### LOCATIONS ###
      resources :locations

      ### EventAttendees ###
      resources :event_attendees
    end
  end
end
