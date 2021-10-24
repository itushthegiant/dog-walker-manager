class DogsController < ApplicationController
    before_action :find_dog, except: [:create, :index]

    # show all dogs
    def index
        render json: Dog.all, status: :ok
    end

    # create a dog
    def create
        dog = Dog.create!(dog_params)
        render json: dog, status: :created
    end

    # show dog dogs/:id
    def show
        render json: @dog, status: :ok
    end

    # update dog dogs/:id
    def update
        @dog.update!(dog_params)
        render json: @dog, status: :ok
    end

    # destroy dog dogs/:id
    def destroy
        @dog.destroy
        head :no_content
    end

    private

    def find_dog
        @dog = Dog.find_by(id: params[:id])
    end

    def dog_params
        params.permit(:name, :age, :owner_name)
    end

   
end
