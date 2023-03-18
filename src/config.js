const dev = {
	// baseURL: "http://localhost:3080/api/",
	baseURL: "http://unitelligent.xyz:3080/api/",
	// landingPageUrl: "http://localhost:3080",
	landingPageUrl: "http://unitelligent.xyz:3080/api/",
	stripe: {
		free: "price_1JcQD6HIZYvvnKladKayEvOZ",
		entry: "price_1JL68HHIZYvvnKlaBJWS5uDe",
		pro: "price_1JLQhlHIZYvvnKlakrqF8khB"
	},
};
  
const prod = {
	baseURL: '/api/',
	landingPageUrl: "http://unitelligent.xyz",
	stripe: {
		free: "price_1JcQsUHIZYvvnKlaEPy958NF",
		entry: "price_1JLpWpHIZYvvnKlaHxiCr7Js",
		pro: "price_1JLpWxHIZYvvnKlamATZ7Awm"
	},
};
  
const config = process.env.NODE_ENV === 'development'
	? dev
	: prod;
  
export default config;