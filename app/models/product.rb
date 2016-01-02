# == Schema Information
#
# Table name: products
#
#  id         :integer          not null, primary key
#  name       :string(100)      not null
#  price      :integer          default(0), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Product < ActiveRecord::Base
  PERMITTED_ATTRIBUTES = %i(name price)
end
