class NovelsController < ApplicationController
	def index
		@novel = Novel.all
	end

	def new
		@novel = Novel.new
	end

	def create
		binding.pry
		novel = Novel.create novel_params
		redirect_to novel
	end

	def show
		@novel = Novel.find params[:id]
	end

	def edit
		@novel = Novel.find params[:id]
	end

	def update
		novel = Novel.find params[:id]
		novel.update novel_params
		redirect_to novel
	end

	def destroy
		novel = Novel.find params[:id]
		novel.destroy
		redirect_to novels_path
	end

	private

	def novel_params
		params.require(:novel).permit(:title, :year, :genre, :image, :author_id)
	end
end