json.array!(@posts) do |post|
  json.(post, :id, :title, :body)
end
