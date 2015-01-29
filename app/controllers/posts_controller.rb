class PostsController < ApplicationController

  def index
    @posts = Post.all
  end

  def show
    @post = Post.find(params[:id])
  end

  def new
    @post = Post.new
    render "show"
  end

  def create
    @post = Post.new(post_params)
    @post.save
    render "show"
  end

  def update
    @post = Post.find(params[:id])
    if @post.update(post_params)
      render "show"
    else
      render json: @post.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    Post.destroy(params[:id])
  end

  private

  def post_params
    params.require(:post).permit(:title, :body)
  end

end
