class EventsController < ApplicationController
  def index
    return Event.all
  end
end
