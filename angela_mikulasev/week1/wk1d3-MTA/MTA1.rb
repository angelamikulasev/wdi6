system ("clear")

lines = {
	'n' => ['Times Square', '34th', '28th_n', '23rd', 'Union Square', '8th_n'],
	'l' => ['8th_l', '6th', 'Union Square', '3rd', '1st'],
	'6' => ['Grand Central', '33rd', '28th_6' 'Union Square', 'Astor Place']
}

def menu
	puts "1. Line N"
	puts "2. Line L"
	puts "3. Line 6"
	print "Please choose a line "
end

def read_selection
	menu
	user_choice = gets.chomp
	puts "You have selected #{user_choice}"
	user_choice
end

user_choice = read_selection

def number_of_stations
  (keys.index(destination_station) - keys.index(departure_station)).abs
end

if 
	user_choice == '1'
	puts "What station would you like to depart from? Times Square, 34th, 28th, 23rd, Union Square or 8th"
elsif 
	user_choice == '2'
	puts "What station would you like to depart from? 8th, 6th, Union Square, 3rd or 1st"
elsif 
	user_choice == '3'
	puts "What station would you like to depart from? Grand Central, 33rd, Union Square or Astor Place"
else
	puts "I do not understand your response"
end

puts "Where are you departing from?"
departure_station = gets.chomp
puts "Where is your final destination?"
destination_station = gets.chomp

puts "total number of stations: #{ number_of_stations }"


# number_of_stops = ((lines.index.keys(departure_station)) + (lines.index.keys(destination_station))).abs
# number_of_stops =  ((line_n.index(answer).abs) + (line_n.index(answer2)).abs)

# final_destination = gets.chomp

# puts line_l.index(answer).abs + line_l.index(answer2).abs
# puts line_6.index(answer).abs + line_6.index(answer2).abs

# puts "Current number of stop/s inbetween is #{final_destination}."
