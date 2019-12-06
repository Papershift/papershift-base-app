module Api
  module V1
class UserLocationsController < ApplicationController
	
	
#POST/LOCATIONS/1/USER
def create
	@location=Event.find(params[:location_id])
	@user=User.find_or_create_by(user_params)
	@user_location = User_location.new(user: @user, location: @location)
    if @user_location.save
      render json: @user_location, status: :created, user_location: @user_location
    else
      render json: @user_location.errors, status: :unprocessable_entity
    end

end
	
# DELETE /locations/1/USER/1
def destroy
	@location=Location.find(params[:location_id])
	@user=@location.users.find(params[:id])
	@location.users.delete(@user)
end


def user_params
      params.require(:user).permit(:name,:email,:deleted_at)
    end


end
end
end