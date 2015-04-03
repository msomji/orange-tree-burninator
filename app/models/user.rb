class User < ActiveRecord::Base

  has_many :statistics


  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
 include BCrypt

  def self.authenticate(username,password_attempt)
    user = User.find_by(username: username)
    return if user.nil?
    if user.password == password_attempt
      user
    else
      nil
    end
  end



  def password
    @password ||= Password.new(p_hash)
  end

  def password=(new_password)
    # take the plain text password, create a hash and store it in the p_hash column
    self.p_hash = Password.create(new_password)
  end

#   def self.authenticate(username, password_attempt)
#     user = User.find_by(username: username)
#     user if user && user.password == password_attempt
#   end
# end


end
