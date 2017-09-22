json.extract! post, :id, :title, :body, :content, :url

json.author do
  json.extract! post.author, :id, :username, :img_url
end
