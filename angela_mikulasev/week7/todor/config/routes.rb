Rails.application.routes.draw do
  root :to => 'tasks#index'
  resources :tasks
  
  post '/tasks/:id/complete' => 'tasks#complete'
  post 'tasks/:id/uncomplete' => 'tasks#uncomplete'

  get '/about' => 'pages#about'
end
