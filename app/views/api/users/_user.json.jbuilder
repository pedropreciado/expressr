json.extract! user, :id, :username, :followed_users

post = user.posts.sample(1)[0]

json.post do
  json.extract! post, :id, :content, :url, :author, :body, :title
  json.likes post.likes.count
end

json.followers user.followers.map {|follow| follow.follower_id}


json.current_user_follows !!user.followers.find_by(follower_id: current_user.id)
