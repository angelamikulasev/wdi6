class AddAuthorIdToNovel < ActiveRecord::Migration
  def change
  	add_column :novels, :author_id, :integer
  end
end
