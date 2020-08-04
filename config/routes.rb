Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'
  
  
  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create]
    resources :decks, only: [:create, :show, :update, :destroy, :index]
    resources :cards, only: [:create, :show, :destroy, :update]
  end

  get '/emailcheck/', to: 'api/users#validate_email', defaults: {format: :json}
  get '/usercheck/', to: 'api/users#validate_username', defaults: {format: :json}

end
