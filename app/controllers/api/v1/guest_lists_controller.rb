class Api::V1::GuestListsController < ApplicationController
  # POST /guest_lists/:event_id
  def participate
    @guest_list = GuestList.new({event_id: params[:event_id],user_id: params[:user_id]})
    if @guest_list.save
      render json: @guest_list, status: :created
    else
      render json: @guest_list.errors, status: :unprocessable_entity
    end
  end
end
