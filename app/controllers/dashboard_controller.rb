class DashboardController < ApplicationController
  def index
    @events = Event.all.to_json
  end
end
