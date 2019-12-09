module Api
  module V1

class UserEventsController < ApplicationController


#POST/EVENTS/1/USERS
def create
	@event=Event.find(params[:event_id])
	@user_event = @event.user_events.new(user_event_params)
    if @user_event.save
      render json: @user_event, status: :created
    else
      render json: @user_event.errors, status: :unprocessable_entity
    end

end
# DELETE /EVENTS/1/USERS/1

def destroy
	@user_event=UserEvent.find_by!(event_id: params[:event_id], user_id: params[:id])
	@user_event.destroy
end

def user_event_params
    params.require(:user_event).permit(:user_id)
 end

end

end
end