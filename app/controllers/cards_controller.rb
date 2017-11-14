class CardsController < ApplicationController
  def index
    @cards = Card.all
    render json: @cards 
  end

  def new
    @card = Card.new(card_params)
  end

  def create
  end

  def show
    @card = Card.find_by(id: params[:id])
  end

  private

  def card_params
    params.require(:card).permit(:name, :img)
  end
end
