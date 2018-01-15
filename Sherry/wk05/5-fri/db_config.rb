require 'active_record'

options = {
	adapter: 'postgresql',
	database: 'moviedb',
}

ActiveRecord::Base.establish_connection(options)