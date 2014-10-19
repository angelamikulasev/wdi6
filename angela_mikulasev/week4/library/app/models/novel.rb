# == Schema Information
#
# Table name: novels
#
#  id         :integer          not null, primary key
#  title      :string(255)
#  year       :string(255)
#  genre      :string(255)
#  image      :text
#  created_at :datetime
#  updated_at :datetime
#  author_id  :integer
#

class Novel < ActiveRecord::Base
	belongs_to :author
end
