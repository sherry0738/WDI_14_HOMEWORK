puts "what is your filename?"
file_name = gets.chomp

lines_of_code = 0

 File.readlines(file_name).each do |line|
		
		lines_of_code += 1
end		
puts lines_of_code.to_s + " line(s)"

# File.open(file_name).each do |list|
# 	puts list
# end