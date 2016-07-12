Rails.application.routes.draw do
  resources :bleets do
    resources :comments
  end
end
