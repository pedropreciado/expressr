# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string
#  email           :string
#  img_url         :string
#  password_digest :string
#  session_token   :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :username, :email, :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }

  after_initialize :ensure_session_token

  attr_reader :password

  has_many :posts,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: "Post"


  has_many :followees,
    primary_key: :id,
    foreign_key: :follower_id,
    class_name: "Follow"

  has_many :followers,
    primary_key: :id,
    foreign_key: :followee_id,
    class_name: "Follow"

  has_many :followee_users,
    through: :followers,
    source: :follower

  has_many :followed_users,
    through: :followees,
    source: :followee

  has_many :followed_posts,
    through: :followed_users,
    source: :posts


  has_many :likes

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    user && user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

end
