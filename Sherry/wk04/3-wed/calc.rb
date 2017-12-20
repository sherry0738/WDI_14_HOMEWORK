require 'pry'

op_picked = ''

while op_picked != 'quit'
	puts "which operation you want to do?(+, -, *, /, **, √ (square root), or quit)"
	op_picked = gets.chomp

 if op_picked != 'quit'

	puts "what is the first number?"
	num1 = gets.chomp.to_f
	puts "what is the second number? (No need for √, just press 'Enter')"
	num2 = gets.chomp.to_f

	if op_picked == '+'

		puts "Would you like to add 2 numbers or 3 numbers? (2 or 3)"
		addition_op = gets.chomp
		if addition_op == '2'
			add_result = num1 + num2
		elsif addition_op == '3'
			puts "what is third num for addition?"
				num3 = gets.chomp.to_f
				add_result = num1 + num2 + num3
			puts add_result
		end		
	
	elsif op_picked == '-'
			sub_result = num1 - num2
			puts sub_result

	elsif op_picked == '*'
			multi_result = num1 * num2
			puts multi_result

	elsif op_picked == '/'
		while num2 == 0
			puts "Divisor can't be 0, please pick another number"
			num2 = gets.chomp.to_f
		end
			divi_result = num1 / num2 
			puts divi_result

	elsif op_picked == '**'
			expo_result = num1 ** num2
			puts expo_result

	elsif op_picked == '√' || op_picked == 'square root'
		puts Math.sqrt(num1)
	end
 end
end


# S1: take op from user
# 	# if op_picked == +
# 		# puts "2 addition or 3 addition?"
# 		# 	if addition_op == 2
# 		# 		S3,S4
# 		# 	else 
# 		# 		puts "what is third num for addition?"
# 		# 		num3 
# 		# 		puts add_result
# 		# 	end
#  S2 :take 2 value from user
# # if op == + || op == *
# 		# S2, S3
# 	# elsif op == -
# 		# # S2
# 		# 	(if num1 = num2 || num1 > num2
# 		# 		S3
# 		# 	else S2
# 		# 	end)
# S3: do the calc
#  S4 :print result + quit 