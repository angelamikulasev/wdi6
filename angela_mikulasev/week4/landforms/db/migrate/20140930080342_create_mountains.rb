class CreateMountains < ActiveRecord::Migration
  def change
    create_table :mountains do |t|
    	t.string :name
    	t.text :image
    	t.string :country
    	t.integer :height
    	t.timestamps
    end
  end
end
