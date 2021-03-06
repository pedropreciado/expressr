json.extract! user, :id, :username, :followed_users

deez_posts = user.posts
json.posts do
json.array! deez_posts do |post|
    json.extract! post, :id, :content, :url, :author, :body, :title
    json.likes post.likes.count
  end
end


post = user.posts.sample(1)[0]

if post
  json.post do
    json.extract! post, :id, :content, :url, :author, :body, :title
    json.likes post.likes.count
    json.current_user_likes !!post.likes.find_by(user_id: current_user.id)

  end
end

json.followers user.followers.map {|follow| follow.follower_id}


json.current_user_follows !!user.followers.find_by(follower_id: current_user.id)
