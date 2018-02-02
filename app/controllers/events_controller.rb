class EventsController < ApplicationController
  skip_before_action :verify_authenticity_token, only: :create

  def index
    # Set in index.html.erb via react_component helper
    @events = { events: Event.all }
  end

  def search
    query = params[:query]
    events = Event.where('name LIKE ? OR place LIKE ? OR description LIKE ?',
                         "%#{query}%", "%#{query}%", "%#{query}%")
    render json: events
  end

  def create
    event = Event.new(event_params)
    if event.save
      render json: event
    else
      render nothing: true, status: :bad_request
    end
  end
  
  private
  
  def event_params
    params.require(:event).permit(:name, :description, :event_date, :place)
  end
end