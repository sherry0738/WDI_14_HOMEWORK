
# puts "Choose difficuty: easy or hard?"
# pick_game = gets.chomp.to_s

# if pick_game == "easy"
	rand_num1 = rand(0 .. 10)
	# num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
	# rand_num1 = num.sample
	puts "guess a number between 0-10"  
	guessed_num = gets.to_i
	#puts rand_num1	
	
	while guessed_num != rand_num1
		puts "keep guessing"
		guessed_num = gets.to_i
	end
	puts "yeah, you got it. Good job!"


	rand_num2 = rand(0 .. 10000)

	puts "guess a number between 0-10000"
	guessed_num = gets.chomp.to_i  
	#puts rand_num2

	while guessed_num. != rand_num2
		if guessed_num. < rand_num2
		puts "Wrong, guess higher!"
		guessed_num = gets.to_i
		else guessed_num > rand_num2
		puts "Wrong, guess lower!"
		guessed_num = gets.to_i
		end	
	puts "yeah, you got it. Good job!"
end
