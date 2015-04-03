get "/users/:id/game" do
  @user = User.find_by_id(params[:id])

	erb :game
end

post "/game" do
  user = User.find_by_id(params[:user_id])
  user.statistics.create(level: params[:difficulty], time: params[:time])

  redirect "/users/#{user.id}"
end
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              