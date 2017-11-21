class WelcomeController < ApplicationController
	
	def index
		data = File.readlines('sample.txt')

		# convert txt to array for rendering
		@result = []
		@cur = {}
		data.each_with_index do |d, i|
			if d[0] == "x"
				tok = d.split(" ")
				read_year = tok[1].split(".")[0]
				read_month = tok[1].split(".")[1]
				read_day = tok[1].split(".")[2]
				id = tok[2]

				target = data[i+1].gsub("，", ",")
				tok = /(《.*》)\((.+),(.+),(\d+),(.*)\)/.match(target)
				name         = tok[1]
				author       = tok[2]
				publisher    = tok[3]
				publish_year = tok[4]
				tag          = tok[5]

				quote    = data[i+2].gsub("：", ":").match(/B:\s*(.*)/)[1].chomp
				summary  = data[i+3].gsub("：", ":").match(/W:\s*(.*)/)[1].chomp
				buy_link = data[i+4]

				j = i+5
				images = []
				while( data[j] && data[j].match(/http(s?):/)) do
					images << data[j]
					j = j+1
				end
				

				cur = {}
				cur = {
					read_year: read_year,
					read_month: read_month,
					read_day: read_day, 
					id: id,
					name: name,
					author: author,
					publisher: publisher,
					publish_year: publish_year,
					tag: tag,
					quote: quote,
					summary: summary,
					buy_link: buy_link,
					images: images
				}
				@result << cur
			end
		end
	end

end
