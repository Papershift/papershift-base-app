module Api
  module V1
    class UsersController < ApplicationController
      before_action :authorize_request, except: :create
      before_action :find_user, except: %i[create,index]


      # GET /users/{username}
      def index
        render json: User.order('name'), status: :ok
      end

      # GET /users/{username}
      def show
        render json: @user, status: :ok
      end

      # POST /users
      def create
        @user = User.new(user_params)
        if @user.save
          render json: @user, status: :created
        else
          render json: {errors: @user.errors.full_messages},
                 status: :unprocessable_entity
        end
      end

      # PUT /users/{username}
      def update
        unless @user.update(user_params)
          render json: {errors: @user.errors.full_messages},
                 status: :unprocessable_entity
        end
      end

      private

      def find_user
        @user = User.find_by_email(params[:email])
      rescue ActiveRecord::RecordNotFound
        render json: {errors: 'User not found'}, status: :not_found
      end

      def user_params
        params.permit(
            :name, :email, :password
        )
      end
    end
  end
end
