system ("clear")
def menu
	puts "1. Add"
	puts "2. Divide"
	puts "3. Subtract"
	puts "4. Multiply"
	puts "m. Menu"
	puts "q. Quit"
	print "Enter your selection please: "
end

def read_selection
	menu
	user_choice = gets.chomp
	puts "You have selected #{user_choice}"
	user_choice
end

read_selection

def read_number
  puts "Enter first number: "
  num1 = gets.to_i
  puts "Enter second number: "
  num2 = gets.to_i
  puts "You have entered #{num1} + #{num2}"
  return num1, num2
end

def add
	num1, num2 = read_number
 	sum = num1 + num2
 	puts "The sum is #{sum}"
end

add

def divide
	num1, num2 = read_number
 	divide = num1 / num2
 	puts "You have entered #{num1} / #{num2}"
 	puts "The answer is #{divide}"
end

divide

def subtract
	num1, num2 = read_number
 	minus = num1 - num2
 	puts "You have entered #{num1} - #{num2}"
 	puts "The sum is #{minus}"
end

subtract

def multiply
	num1, num2 = read_number
 	times = num1 * num2
 	puts "You have entered #{num1} * #{num2}"
 	puts "The sum is #{times}"
end

multiply

# while user_choice != 'q'
# 	if user_choice == 1
# 		add
# 	elsif user_choice == 2
# 		divide
# 	elsif user_choice == 3
# 		subtract
# 	elsif user_choice == 4
# 		multiply
# 	else user_choice == 'm'
# 	end
# end

until user_choice == 'q'
	case user_choice
	when '1'
		result = add
		puts "The result is #{sum}"
	when '2'
		result = divide
		puts "The result is #{divide}"
	when '3'
		puts "The result is #{minus}"
	when '4'
		puts "The result is #{times}"
	when 'm'
		puts "Return to menu"
	else
		puts "I don't understand your selection"
	end
end

