require 'pry'

days_of_the_week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

days_of_the_week.unshift(days_of_the_week.pop)
puts days_of_the_week
puts 

the_week = [
['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
['Saturday', 'Sunday']
]

weekdays = the_week.shift
puts weekdays
puts

puts weekdays.sort
# binding.pry

# puts weekdays.sort.reverse
#the_week.chars.sort_by(&:downcase).join
# puts the_week.first
