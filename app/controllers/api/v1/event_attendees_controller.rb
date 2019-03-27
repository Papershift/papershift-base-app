class Api::V1::EventAttendeesController < ApplicationController
  before_action :authorize_request, only: [:create, :update, :destroy]
  before_action :set_event_attendee, only: [:show, :update]
  before_action :set_event_attendee_user, only: [:destroy]


  # GET /event_attendees
  def index
    @event_attendees = EventAttendee.all

    render json: @event_attendees
  end

  # GET /event_attendees/1
  def show
    render json: @event_attendee
  end

  # POST /event_attendees
  def create
    if EventAttendee.where(event_id: params[:event_id], user_id: params[:event_id])
      @event = Event.find(params[:event_id])
      @event_attendee = EventAttendee.new(event_attendee_params)
      @event_attendee.user = @current_user
      @event_attendee.event = @event

      if @event_attendee.save
        @event_attendees = EventAttendee.where(event_id: params[:event_id])
        render json: @event, status: :ok
      else
        render json: @event_attendee.errors, status: :unprocessable_entity
      end
    else
      render json: {error: "alredy join"}, status: :unprocessable_entity
    end
  end


  # PATCH/PUT /event_attendees/1
  def update
    if @event_attendee.update(event_attendee_params)
      render json: @event_attendee
    else
      render json: @event_attendee.errors, status: :unprocessable_entity
    end
  end

  # DELETE /event_attendees/1
  def destroy
    @event_attendee.destroy_all
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_event_attendee
    @event_attendee = EventAttendee.find(params[:id])
  end

  def set_event_attendee_user
    @event_attendee = EventAttendee.where(event_id: params[:id], user_id: @current_user.id)
  end

  # Only allow a trusted parameter "white list" through.
  def event_attendee_params
    params.permit(
        :event_id
    )
  end

end
