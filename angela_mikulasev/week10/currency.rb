system('clear')
require 'pry'

@original_amounts = ['$22.0000', 'GBP44,000', 'AUD21k', 'EUR18500', 'THB1000000.000']


######## AUSTRALIAN CONVERSION ########

def aud_tidier 
  @original_amounts.each do |amount|
    next unless amount =~ /AUD/
    @tidied_aud = amount.gsub!(/k/, "000").to_f
    @aud_to_aud = amount.gsub!("AUD", "") 
  end
  @aud_to_aud
end
aud_tidier



######## BRITISH POUNDS CONVERSION ########


def gbp_tidier
  @original_amounts.each do |amount|
    next unless amount =~ /GBP/
    @tidied_gbp = amount.gsub!(",", "")
    @tidied_gbp = amount.gsub!("GBP", "").to_f
  end
  @gbp_to_aud = @tidied_gbp * 0.019
end
gbp_tidier




######## USD CONVERSION ########


def usd_tidier
  @original_amounts.each do |amount|
    next unless amount =~ /$/
    @tidied_usd = amount.gsub!("$", "").to_f
    @tidied_usd = amount.gsub!(".", "")
  end
  @usd_to_aud = @tidied_usd * 0.030
end
usd_tidier


######## EURO CONVERSION ########


def eur_tidier
  @original_amounts.each do |amount|
    next unless amount =~ /EUR/
    @tidied_eur = amount.to_f.round(0)
    @tidied_eur = amount.gsub!("EUR", "")
  end
  @eur_to_aud = @tidied_eur.to_i * 0.025
end
eur_tidier


######## THAI BAHT CONVERSION ########

def thb_tidier
  @original_amounts.each do |amount|
    next unless amount =~ /THB/
    @tidied_thb = amount.to_f.round(0)
    @tidied_thb = amount.gsub!("THB", "")
  end
  @thb_to_aud = @tidied_thb.to_i * 0.035
end
thb_tidier



binding.pry