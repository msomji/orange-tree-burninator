get '/' do

  @level_1 = Statistic.where(level: 1).order(time: :desc).limit(5)
  @level_2 = Statistic.where(level: 2).order(time: :desc).limit(5)

  erb :index

end

get "/users/login" do
  erb :"users/login"
end

post '/users/login' do
  user = User.authenticate(params[:username], params[:password])

  if user
    session[:id] = user.id
    redirect "/users/#{user.id}"
  else
    @message = "oh oh, somthing went wrong! try again"
    erb :index
  end
end

get "/users/logout" do
  session.delete(:id)
  redirect "/"
end

get '/users/new' do
  erb :'/users/new'
end

get '/users/:id' do
  @user = User.find(params[:id])
  @level_1 = Statistic.where(user_id: @user.id, level: 1).order(time: :desc).limit(20)
  @level_2 = Statistic.where(user_id: @user.id, level: 2).order(time: :desc).limit(20)

  erb :"users/show"
end

post '/users' do
  @user = User.create(params[:user])
  session[:id] = @user.id

  redirect "/users/#{@user.id}"
end

get "/users/:id/edit" do
  @user = User.find(params[:id])
  erb :"users/edit"
end

put "/users/:id" do
  @user = User.find(params[:id])
  @user.update(params[:user])
  erb :"users/show"
  end

delete "/users/:id" do
  @user = User.find(params[:id])
  @user.destroy
  redirect "/"
end