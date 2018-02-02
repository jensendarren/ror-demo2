class EventsController < ApplicationController
  def index
    @events = Event.all.to_json
  end

  def search
    query = params[:query]
    events = Event.where('name LIKE ? OR place LIKE ? OR description LIKE ?',
                         "%#{query}%", "%#{query}%", "%#{query}%")
    render json: events
  end
end