get '/' do

  @level_1 = Statistic.where(level: 1).order(time: :desc).limit(5)
  @level_2 = Statistic.where(level: 2).order(time: :desc).limit(5)

  erb :index

end

post '/users' do
  @user = User.create(params[:user])
  if @user.id.nil?
    logger.info(@user)
    @message = "oh oh that user name has been taken"
    erb :"users/new"
  else
    logger.info(@user)
    session[:id] = @user.id
    redirect "/users/#{@user.id}"
  end
end


get "/users/login" do
  erb :"users/login"
end

get "/users/logout" do
  session.delete(:id)
  redirect "/"
end

get '/users/new' do
  erb :'/users/new'
end

post '/users/login' do
  @user = User.authenticate(params[:username], params[:password])

  if @user
    session[:id] = @user.id
    redirect "/users/#{@user.id}"
  else
    @message = "oh oh, somthing went wrong! try again"
    erb :index
  end
end

get '/users/:id' do
  @user = User.find(params[:id])
  if authorize(@user)
    @level_1 = Statistic.where(user_id: @user.id, level: 1).order(time: :desc).limit(20)
    @level_2 = Statistic.where(user_id: @user.id, level: 2).order(time: :desc).limit(20)

    erb :"users/show"
  else
    redirect "/"
  end
end


get "/users/:id/edit" do
  @user = User.find(params[:id])
  if authorize(@user)
    erb :"users/edit"
  else
    redirect "/"
  end
end

put "/users/:id" do
  @user = User.find(params[:id])
  if authorize(@user)
    @user.update(params[:user])
    erb :"users/show"
  else
    redirect "/"
  end

end

delete "/users/:id" do
  @user = User.find(params[:id])
  if authorize(@user)
    @user.destroy
    redirect "/"
  else
    redirect "/"
  end
end