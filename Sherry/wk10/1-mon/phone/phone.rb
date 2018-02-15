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
    @area_code = inputnum
  end

# ------line 9 -----------
  # def number
  # 	@number.gsub(/[\s()-.]/, "")
  	
  # end


# ------line 9/15/21-----------
  #   if @number.length == 11 && @number[0] == "1" 
  #   @number[0] = ""
  #   return @number.gsub(/[\s()-.]/, "")
  #   end

  # end

# ------line 27 -----------
 #  def number
 #  	if @number.length == 11 && @number[0] != "1"
  	
 #  		@number[0] = ""
 #  		@number = @number.chars

 #  	end	
	# if @number.include?("0") == true
 #  		@zero = @number.index("0") 
 #  		return
 #  		@number[@zero] * 10
 #  	end
 #  end

# ------line 27 -----------
	# def number
 #  	 if @number.length == 11 && @number[0] != "1"
 #  	 	@number[0] = ""
 #  	 	 @number = "0000000000"
 #  	 	 return @number
 #  	 end
 #  	end

# ------line 32 -----------
	def number
		return "0000000000" if @number.length < 10 == true	
  	end
  end


# ------line 38 -----------
	# def area_code

	# 	@arr = @number.split(//)
	# 	@area_code = []
	# 	@area_code = @area_code.push(@arr[0],@arr[1], @arr[2]).join
		
	# end

# ------line 44 -----------

	def number
		
	end





