# == Schema Information
#
# Table name: likes
#
#  id         :integer          not null, primary key
#  post_id    :integer
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Like < ApplicationRecord
  validates :post_id, :user_id, presence: true

  belongs_to :user

  belongs_to :post
end
