require 'pry'

ninja_turtle = {
	name: 'Michelangelo',
	weapon: 'Nunchuks',
	radical: true
}




ninja_turtle[:age] = '31'
puts ninja_turtle



ninja_turtle.delete(:radical)
 puts ninja_turtle


ninja_turtle[:pizza_toppings] = ["cheese", "pepperoni", "peppers"]
puts ninja_turtle


puts ninja_turtle[:pizza_toppings][0]
 
array = ninja_turtle.keys 
puts array

# h = { "a" => 100, "b" => 200 }
# h.each {|key, value| puts "#{key} is #{value}" }
# # produces:

# a is 100
# b is 200

ninja_turtle.each {|key, value|}
	puts "#{key} is equal to #{value}" 


