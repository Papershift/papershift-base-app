module Api
  module V1

class UserEventsController < ApplicationController


#POST/EVENTS/1/USER
def create
	@event=Event.find(params[:event_id])
	@user=User.find_or_create_by(user_params)
	@user_event = User_Event.new(user: @user, event: @event)
    if @user_event.save
      render json: @user_event, status: :created, user_event: @user_event
    else
      render json: @user_event.errors, status: :unprocessable_entity
    end

end
# DELETE /locations/1/USER/1

def destroy
	@event=Event.find(params[:event_id])
	@user=@event.users.find(params[:id])
	@event.users.delete(@user)
end

def user_params
      params.require(:user).permit(:name,:email,:deleted_at)
    end

end

end
end