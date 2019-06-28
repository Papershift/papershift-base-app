class Api::V1::AssignmentsController < ApplicationController
  before_action :set_assignment, only: %I[destroy]
  before_action :set_event, only: %I[index]
  before_action :set_user, only: %I[index]

  # GET /assignments
  def index
    @assignments = Assignment.ransack(user_id_eq: @user&.id, event_id_eq: @event&.id).result

    render json: @assignments, include: '*.*',  status: :ok
  end

  # POST /assignments
  def create
    @assignment = Assignment.new(assignment_params)

    if @assignment.save
      render json: @assignment, status: :created
    else
      render json: @assignment.errors, status: :error
    end
  end

  # DELETE /assignments
  def destroy
    if @assignment.destroy
      render json: {"status": "The assignment was destroyed."}, status: :ok
    else
      render json: @assignment.errors, status: :error
    end
  end

  private

    def assignment_params
      params.permit(:event_id, :user_id)
    end

    def set_user
      @user = User.find_by(id: params[:user_id])
    end

    def set_event
      @event = Event.find_by(id: params[:event_id])
    end

    def set_assignment
      @assignment = Assignment.find(params[:id])
    end
end
