helpers do
  def authorize
     @user.id == session[:id]
   end
end