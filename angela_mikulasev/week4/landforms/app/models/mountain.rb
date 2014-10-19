# == Schema Information
#
# Table name: mountains
#
#  id         :integer          not null, primary key
#  name       :string(255)
#  image      :text
#  country    :string(255)
#  height     :integer
#  created_at :datetime
#  updated_at :datetime
#

class Mountain < ActiveRecord::Base
end
