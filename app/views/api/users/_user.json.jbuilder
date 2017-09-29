json.extract! user, :id, :username, :followed_users, :posts

posts = user.posts

# posts.each do |post|
#   json.set!(post.id) do
#     json.extract! post, :id, :content, :url, :author, :body, :title
#   end
# end

post = user.posts.sample(1)[0]

if post
  json.post do
    json.extract! post, :id, :content, :url, :author, :body, :title
    json.likes post.likes.count
  end
end

json.followers user.followers.map {|follow| follow.follower_id}


json.current_user_follows !!user.followers.find_by(follower_id: current_user.id)
