//Currencies & Countries of the World...
//List 1 is currencies
//List 2 is countries

//The following functions are based off of currency types
//Each currency type takes two arguments
//The first argument is the exchange rate from said currency to the Swiss Franc
//The second argument is the country(s) that use said currency



var afghani = function(exchange, country) {
  this.exchange = 0.02;
  this.country = "Afghanistan";
}

var dinar = function(exchange, country) {
  this.exchange = 0.00081;
  this.country = ["Algeria", "Bahrain", "Iraq", "Jordan", "Kuwait", "Serbia", "Sudan", "Tunisia"];
}

var euro = function(exchange, country) {
  this.exchange = 1.03;
  this.country = ["Andorra", "Austria", "Belgium", "Cyprus(Greek)", "Finland", "France", "Germany", "Greece",
                  "Ireland", "Italy", "Luxembourg", "Malta", "Montenegro", "Netherlands", "Portugal",
                  "Slovenia", "Spain"];
}

var peso = function(exchange, country) {
  this.exchange = 0.061;
  this.country = ["Argentina", "Chile", "Columbia", "Cuba", "Dominican Republic", "Mexico", "Philippines",
                  "Uruguay"];
}

var dollar = function(exchange, country) {
  this.exchange = 0.94;
  this.country = ["Australia", "Bahamas", "Barbados", "Belize", "Brunei", "Canada", "Cayman Islands",
                  "Ecuador", "Fiji", "Guyana", "Hong Kong", "Jamaica", "New Zealand", "Singapore",
                  "Solomon Islands", "Taiwan", "Trinidad & Tobago", "United States", "Zimbabwe"];
}

var franc = function(exchange, country) {
  this.exchange = 1;
  this.country = ["Benin", "Cameroon", "Central African Republic", "Chad", "Congo", "Djibouti", "Gabon",
                  "Guinea", "Ivory Coast", "Niger", "Senegal", "Switzerland", "Togo"];
}

var boliviano = function(exchange, country) {
  this.exchange = 0.14;
  this.country = "Bolivia";
}

var real = function(exchange, country) {
  this.exchange = 0.30;
  this.country = "Brazil";
}

var lev = function(exchange, country) {
  this.exchange = 0.53;
  this.country = "Bulgaria";
}

var yuan = function(exchange, country) {
  this.exchange = 0.15;
  this.country = "China";
}

var colon = function(exchange, country) {
  this.exchange = 0.0018;
  this.country = ["Costa Rica", "El Salvador"];
}

var lira = function(exchange, country) {
  this.exchange = 0.35;
  this.country = ["Cyprus(Turkish)", "Turkey"];
}

var koruna = function(exchange, country) {
  this.exchange = 0.038;
  this.country = ["Czechoslovakia", "Slovakia"];
}

var krone = function(exchange, country) {
  this.exchange = 0.14;
  this.country = ["Denmark", "Norway"];
}

var pound = function(exchange, country) {
  this.exchange = 1.44;
  this.country = ["Egypt", "Lebanon", "Syria", "United Kingdom"];
}

var birr = function(exchange, country) {
  this.exchange = 0.046;
  this.country = "Ethiopia";
}

var dalasi = function(exchange, country) {
  this.exchange = 0.022;
  this.country = "Gambia";
}

var cedi = function(exchange, country) {
  this.exchange = 0.23;
  this.country = "Ghana";
}

var quetzal = function(exchange, country) {
  this.exchange = 0.12;
  this.country = "Guatemala";
}

var gourde = function(exchange, country) {
  this.exchange = 0.020;
  this.country = "Haiti";
}

var lempira = function(exchange, country) {
  this.exchange = 0.043;
  this.country = "Honduras";
}

var forint = function(exchange, country) {
  this.exchange = 0.0033;
  this.country = "Hungary";
}

var krona = function(exchange, country) {
  this.exchange = 0.11;
  this.country = ["Iceland", "Sweden"];
}

var rupee = function(exchange, country) {
  this.exchange = 0.015;
  this.country = ["India", "Mauritius", "Nepal", "Pakistan", "Seychelles", "Sri Lanka"];
}

var rupiah = function(exchange, country) {
  this.exchange = 0.000071;
  this.country = "Indonesia";
}

var shekel = function(exchange, country) {
  this.exchange = 0.24;
  this.country = "Israel";
}

var yen = function(exchange, country) {
  this.exchange = 0.0076;
  this.country = "Japan";
}

var shilling = function(exchange, country) {
  this.exchange = 0.0096;
  this.country = ["Kenya", "Somalia", "Tanzania", "Uganda"];
}

var kwacha = function(exchange, country) {
  this.exchange = 0.00018;
  this.country = ["Malawi", "Zambia"];
}

var ringgit = function(exchange, country) {
  this.exchange = 0.26;
  this.country = "Malaysia";
}

var rufiyaa = function(exchange, country) {
  this.exchange = 0.061;
  this.country = "Maldives";
}

var ouguiya = function(exchange, country) {
  this.exchange = 0.0030;
  this.country = "Mauritania";
}

var tugrik = function(exchange, country) {
  this.exchange = 0.00049;
  this.country = "Mongolia";
}

var dirham = function(exchange, country) {
  this.exchange = 0.26;
  this.country = ["Morocco", "United Arab Emirates"];
}

var cordoba = function(exchange, country) {
  this.exchange = 0.035;
  this.country = "Nicaragua";
}

var riyal_omani = function(exchange, country) {
  this.exchange = 2.44;
  this.country = ["Oman", "Qatar", "Saudi Arabia"];
}

var kina = function(exchange, country) {
  this.exchange = 0.35;
  this.country = "Papa New Guinea";
}

var guarani = function(exchange, country) {
  this.exchange = 0.00018;
  this.country = "Paraguay";
}

var inti = function(exchange, country) {
  this.exchange = 0.30;
  this.country = "Peru";
}

var zloty = function(exchange, country) {
  this.exchange = 0.25;
  this.country = "Poland";
}

var leu = function(exchange, country) {
  this.exchange = 0.23;
  this.country = "Romania";
}

var leone = function(exchange, country) {
  this.exchange = 0.00022;
  this.country = "Sierra Leone";
}

var rand = function(exchange, country) {
  this.exchange = 0.077;
  this.country = "South Africa";
}

var won = function(exchange, country) {
  this.exchange = 0.00084;
  this.country = "South Korea";
}

var baht = function(exchange, country) {
  this.exchange = 0.028;
  this.country = "Thailand";
}

var dong = function(exchange, country) {
  this.exchange = 0.000043;
  this.country = "Vietnam";
}

var tala = function(exchange, country) {
  this.exchange = 0.38;
  this.country = "Western Samoa";
}

var guilder = function(exchange, country) {
  this.exchange = 0.53;
  this.country = "Suriname";
}

var bolivar = function(exchange, country) {
  this.exchange = 0.15;
  this.country = "Venezuela";
}









//The following functions are based off of countries, built with prototype.constructor
//Each country takes two arguments
//The first argument is the currency type
//The second argument is the exchange rate to the Swiss Franc


function Country(currency, exchange) {
  this.currency = currency;
  this.exchange = exchange;
}


var afghanistan = new Country("afghani", 0.02);
wvar algeria = new Country("dinar", 0.0095);
var andorra = new Country("euro", 1.03);
var argentina = new Country("peso", 0.061);
var australia = new Country("dollar", 0.94);
var austria = new Country("euro", 1.03);
var bahamas = new Country("dollar", 0.94);
var bahrain = new Country("dinar", 0.0095);
var barbados = new Country("dollar", 0.94);
var belgium = new Country("euro", 1.03);
var belize = new Country("dollar", 0.94);
var benin = new Country("franc", 1);
var bolivia = new Country("boliviano", 0.14);
var brazil = new Country("real", 0.30);
var brunei = new Country("dollar", 0.94);
var bulgaria = new Country("lev", 0.53);
var cameroon = new Country("franc", 1);
var canada = new Country("dollar", 0.94);
var cayman_islands = new Country("dollar", 0.94);
var central_african_republic = new Country("franc", 1);
var chad = new Country("franc", 1);
var chile = new Country("peso", 0.061);
var china = new Country("yuan", 0.15);
var columbia = new Country("peso", 0.061);
var congo = new Country("franc", 1);
var costa_rica = new Country("colon", 0.0018);
var cuba = new Country("peso", 0.061);
var cyprus_greek = new Country("euro", 1.03);
var cyprus_turkish = new Country("lira", 0.35);
var czechoslovakia = new Country("koruna", 0.038);
var denmark = new Country("krone", 0.14);
var djibouti = new Country("franc", 1);
var dominican_republic = new Country("peso", 0.061);
var ecuador = new Country("dollar", 0.94);
var egypt = new Country("pound", 1.44);
var el_salvador = new Country("colon", 0.0018);
var ethiopia = new Country("birr", 0.046);
var fiji = new Country("dollar", 0.94);
var finland = new Country("euro", 1.03);
var france = new Country("euro", 1.03);
var gabon = new Country("franc", 1);
var gambia = new Country("dalasi", 0.022);
var germany = new Country("euro", 1.03);
var ghana = new Country("cedi", 0.23);
var greece = new Country("euro", 1.03);
var guatemala = new Country("quetzal", 0.12);
var guinea = new Country("franc", 1);
var guyana = new Country("dollar", 0.94);
var haiti = new Country("gourde", 0.020);
var honduras = new Country("lempira", 0.043);
var hong_kong = new Country("dollar", 0.94);
var hungary = new Country("forint", 0.0033);
var iceland = new Country("krona", 0.11);
var india = new Country("rupee", 0.015);
var indonesia = new Country("rupiah", 0.000071);
var iraq = new Country("dinar", 0.0095);
var ireland = new Country("euro", 1.03);
var israel = new Country("shekel", 0.24);
var italy = new Country("euro", 1.03);
var ivory_coast = new Country("franc", 1);
var jamaica = new Country("dollar", 0.94);
var japan = new Country("yen", 0.0076);
var jordan = new Country("dinar", 0.0095);
var kenya = new Country("shilling", 0.0096);
var kuwait = new Country("dinar", 0.0095);
var lebanon = new Country("pound", 1.44);
var luxembourg = new Country("euro", 1.03);
var malawi = new Country("kwacha", 0.00018);
var malaysia = new Country("ringgit", 0.26);
var maldives = new Country("rufiyaa", 0.061);
var malta = new Country("euro", 1.03);
var mauritania = new Country("ouguiya", 0.0030);
var mauritius = new Country("rupee", 0.015);
var mexico = new Country("peso", 0.061);
var mongolia = new Country("tugrik", 0.00049);
var montenegro = new Country("euro", 1.03);
var morocco = new Country("dirham", 0.26);
var nepal = new Country("rupee", 0.015);
var netherlands = new Country("euro", 1.03);
var new_zealand = new Country("dollar", 0.94);
var nicaragua = new Country("cordoba", 0.035);
var niger = new Country("franc", 1);
var norway = new Country("krone", 0.14);
var oman = new Country("riyal-omani", 0.25);
var pakistan = new Country("rupee", 0.015);
var papua_new_guinea = new Country("kina", 0.35);
var paraguay = new Country("guarani", 0.00018);
var peru = new Country("inti", 0.30);
var philippines = new Country("peso", 0.061);
var poland = new Country("zloty", 0.25);
var portugal = new Country("euro", 1.03);
var qatar = new Country("riyal", 0.25);
var romania = new Country("leu", 0.23);
var saudi_arabia = new Country("riyal", 0.25);
var senegal = new Country("franc", 1);
var serbia = new Country("dinar", 0.0095);
var seychelles = new Country("rupee", 0.015);
var sierra_leone = new Country("leone", 0.00022);
var singapore = new Country("dollar", 0.94);
var slovakia = new Country("koruna", 0.038);
var slovenia = new Country("euro", 1.03);
var solomon_islands = new Country("dollar", 0.94);
var somalia = new Country("shilling", 0.0096);
var south_africa = new Country("rand", 0.077);
var south_korea = new Country("won", 0.00084);
var spain = new Country("euro", 1.03);
var sri_lanka = new Country("rupee", 0.015);
var sudan = new Country("dinar", 0.0095);
var suriname = new Country("guilder", 0.53);
var sweden = new Country("krona", 0.11);
var switzerland = new Country("franc", 1);
var syria = new Country("pound", 1.44);
var taiwan = new Country("dollar", 0.94);
var tanzania = new Country("shilling", 0.0096);
var thailand = new Country("baht", 0.028);
var togo = new Country("franc", 1);
var trinidad_&_tobago = new Country("dollar"l 0.94);
var tunisia = new Country("dinar", 0.00081);
var turkey = new Country("lira", .35);
var uganda = new Country("shilling", 0.0096);
var united_arab_emirates = new Country("dirham", 0.26);
var united_kingdom =  new Country("pound", 1.44);
var united_states = new Country("dollar", 0.94);
var uruguay = new Country("peso", 0.061);
var venezuela = new Country("bolivar", 0.15);
var vietnam = new Country("dong", 0.000043);
var western_samoa = new Country("tala", 0.38);
var zambia = new Country("kwacha", 0.00018);
var zimbabwe = new Country("dollar", 0.94);

//Nothing follows
