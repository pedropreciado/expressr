json.extract! user, :id, :username, :followed_users

post = user.posts.sample(1)[0]


json.post do
  json.post post
  json.current_user_likes !!post.likes.find_by(user_id: current_user.id)
end

json.current_user_follows !!user.followers.find_by(follower_id: current_user.id)
