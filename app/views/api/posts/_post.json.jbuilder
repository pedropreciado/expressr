json.extract! post, :id, :title, :body, :content, :url

json.author do
  json.extract! post.author, :id, :username
end

json.likes post.likes.count

json.current_user_likes !!post.likes.find_by(user_id: current_user.id)
