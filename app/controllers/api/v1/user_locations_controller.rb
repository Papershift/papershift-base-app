module Api
  module V1
class UserLocationsController < ApplicationController
	
	
#POST/LOCATIONS/1/USERS
def create
	@location=Location.find(params[:location_id])
	@user_location = @location.user_locations.new(user_location_params)
    if @user_location.save
      render json: @user_location, status: :created
    else
      render json: @user_location.errors, status: :unprocessable_entity
    end

end
# DELETE /LOCATIONS/1/USERS/1

def destroy
	@user_location=UserLocation.find_by!(location_id: params[:location_id], user_id: params[:id])
	@user_location.destroy
end

def user_location_params
    params.require(:user_location).permit(:user_id)
 end	



end
end
end