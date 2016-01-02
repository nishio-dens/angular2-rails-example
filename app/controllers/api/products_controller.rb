class Api::ProductsController < ApplicationController
  def index
    @products = Product
      .all
      .page(params[:page])
      .per(100)
  end

  def show
    @product = Product.find(params[:id])
  end

  def create
    @product = Product.new(product_params)
    if @product.save
      render :show
    else
      # TODO: fixme
      render json: { error_messages: ["something wrong"] }, status: 500
    end
  end

  def update
    @product = Product.find(params[:id])
    if @product.update(product_params)
      render :show
    else
      # TODO: fixme
      render json: { error_messages: ["something wrong"] }, status: 500
    end
  end

  private

  def product_params
    ActionController::Parameters
      .new(JSON.parse(request.body.read))
      .require(:product)
      .permit(Product::PERMITTED_ATTRIBUTES)
  end
end
