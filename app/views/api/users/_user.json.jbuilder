json.extract! user, :id, :username, :followed_users

json.posts user.posts.sample(1)

json.current_user_follows !!user.followers.find_by(follower_id: current_user.id)
