# WTFIFA
The WTFIF Bribe Estimator calculates how much money you will need to bribe FIFA in order for your country to host the World Cup.

Input the following value:
Name of country you want to host the World Cup

Processes the following:
- Name of input country
- Currency of input country
- Random number between 350 million - 600 million Swiss francs
- Converts Swiss francs to input country’s currency
- Number of existing stadiums with 80,000+ capacity in country
- Number of 80,000+ capacity stadiums needed to host a World Cup (12 stadiums) minus number of existing stadiums in country
- Multiply number of stadiums needed by cost to build new stadium(s) (cost is 1.2 billion francs per stadium)

Outputs the following information:
In order for [COUNTRY] to host the World Cup in 2026, you will need to bribe FIFA with [MONETARY AMOUNT] [HOST COUNTRY CURRENCY]. Remember, FIFA only accepts the Swiss franc. So you’ll need to give them [MONETARY AMOUNT] francs. Oh, and since [COUNTRY] only has [NUMBER OF EXISTING STADIUMS], you will need to build [NUMBER OF NEW STADIUMS NEEDED]. No worries. The cost to build [NUMBER OF NEW STADIUMS] is only [MONETARY AMOUNT] [HOST COUNTRY CURRENCY].
