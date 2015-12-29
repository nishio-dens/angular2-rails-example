node :totalCount do
  @products.total_count
end

child @products => :results do
  collection @products

  attributes :id, :name, :price, :created_at, :updated_at
end
