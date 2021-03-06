# Normalized Phone Number

# Write a program that cleans up user-entered phone numbers so that they can be sent SMS messages.

# The rules are as follows:

# If the phone number is less than 10 digits assume that it is bad number
# If the phone number is 10 digits assume that it is good
# If the phone number is 11 digits and the first number is 1, trim the 1 and use the first 10 digits
# If the phone number is 11 digits and the first number is not 1, then it is a bad number
# If the phone number is more than 11 digits assume that it is a bad number
# We've provided tests, now make them pass.

# Hint: Only make one test pass at a time. You can turn off tests by sending the message skip to it:

# def test_string_conversion
#   skip
#   assert_equal 1, "1".to_i
# end
class Phone
  def initialize(inputnum)
    @number = inputnum
  end

  def number
    return "0000000000" if @number.length == 11 && @number[0] != "1"  
    return "0000000000" if @number.length < 10 

  	@number = @number.gsub(/[\s()-.]/, "")
      if @number.length == 11 && @number[0] == "1" 
        @number[0] = ""
        @number = @number.gsub(/[\s()-.]/, "")
      end
      
    return @number 
  end

  def area_code
    @number.split(//).slice(0..2).join('')
  end

  def to_s
    return "(#{$1}) #{$2}-#{$3}" if @number =~ /^(\d{3})(\d{3})(\d{4})$/    
  end
end



