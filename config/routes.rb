Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'
  
  
  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create]
  end

  get '/email/', to: 'api/users#validate_email', defaults: {format: :json}
  #get '/email/:email', to: 'users#validate_email'

end
