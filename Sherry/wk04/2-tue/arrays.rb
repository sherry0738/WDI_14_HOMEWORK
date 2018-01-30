require 'pry'

planeteers = ["Earth", "Wind", "Captain Planet", "Fire", "Water"]


# puts planeteers[1]

# puts planeteers.push("Heart")

# planeteers[2] = nil
# puts planeteers

rangers = ["Red", "Blue", "Pink", "Yellow", "Black"]
heroes = planeteers + rangers
puts heroes

puts heroes.sort
puts heroes.shuffle 
#rand_heroes = rand(heroes[0] .. heroes[heroes.length-1])
#rand_heroes = rand(heroes)

rand_heroes = heroes.sample
puts rand_heroes


# def select_elements_starting_with(arr,letter)
#   arr.select { |str| str.start_with?(letter) }
# end
# my_array = ['2823BII','4A','76B','10J']
# my_array.select { |str| str.include?('A') }
# # => ["4A"]
def include?(elem)
	if elem.begin_with?('B')
		return true
	else
		return false
	end
end
heroes.select { |elem| heroes.include?('B')}
  # def all_elements_begin_with_B(heroes, 'B')
  # 	heroes.select { |str| str.select_elements_starting_with?('B') }
  # end
  # puts all_elements_begin_with_B('B')