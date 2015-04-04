helpers do
  def authorize(user)
     user.id == session[:id]
   end
end