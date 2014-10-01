require 'sinatra'
require 'sinatra/reloader'
require 'yahoofinance'

get '/stock' do
	if params[:stock]
		@stock = params[:stock]
		result = YahooFinance.get_quotes( YahooFinance::StandardQuote, @stock )
		@price = result[ @stock ].lastTrade
end

erb :stock

# <p>
# 	<% if @price && @price > 0%>
# </p>

end

# @stock_symbol = 'GOOG' # params[:stock]
# results = YahooFinance.get_quotes( YahooFinance::StandardQuote, @stock_symbol )
# price = results[ @stock_symbol ].lastTrade