require 'test_helper'

class Api::FollowsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get api_follows_create_url
    assert_response :success
  end

end
