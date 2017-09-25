export const createFollow = (followee_id) => {
  return $.ajax({
    method: "POST",
    url: "/api/follows",
    data: {followee_id}
  })
}
