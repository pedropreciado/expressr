# == Schema Information
#
# Table name: posts
#
#  id         :integer          not null, primary key
#  content    :string
#  title      :string
#  body       :string
#  url        :string
#  author_id  :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Post < ApplicationRecord
  validates :content, :title, :author_id, presence: true

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: "User"

  has_many :likes

end
