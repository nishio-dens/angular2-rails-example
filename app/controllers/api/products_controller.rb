class Api::ProductsController < ApplicationController
  def index
    @products = Product
      .all
      .page(params[:page])
      .per(100)
  end
end
