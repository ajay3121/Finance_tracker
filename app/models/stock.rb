
class Stock < ApplicationRecord

  def self.new_lookup(ticker_symbol)
      client = IEX::Api::Client.new(publishable_token: 'pk_96336c64727740399f63ca1f2eb74a89',
                                    endpoint: 'https://cloud.iexapis.com/v1')
      client.price(ticker_symbol)
  end
end