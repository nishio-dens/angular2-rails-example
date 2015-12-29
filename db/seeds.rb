Product.delete_all

0.upto(20).each do |i|
  Product.new(name: "テスト部品#{i}", price: i * 1000).save!
end
