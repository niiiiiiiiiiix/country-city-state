const request = require("supertest");
const app = require("../src/app");
const dbHandlers = require("../src/utils/dbHandler");
const Country = require("../src/models/country.model");

describe("Country State City", () => {
  const CountryData = [
    {
      id: 199,
      name: "Singapore",
      iso3: "SGP",
      iso2: "SG",
      phone_code: "65",
      capital: "Singapur",
      currency: "SGD",
      currency_symbol: "$",
      tld: ".sg",
      native: "Singapore",
      region: "Asia",
      subregion: "South-Eastern Asia",
      timezones: [
        {
          zoneName: "Asia/Singapore",
          gmtOffset: 28800,
          gmtOffsetName: "UTC+08:00",
          abbreviation: "SGT",
          tzName: "Singapore Time",
        },
      ],
      translations: {
        br: "Singapura",
        pt: "Singapura",
        nl: "Singapore",
        hr: "Singapur",
        fa: "سنگاپور",
        de: "Singapur",
        es: "Singapur",
        fr: "Singapour",
        ja: "シンガポール",
        it: "Singapore",
      },
      latitude: "1.36666666",
      longitude: "103.80000000",
      emoji: "🇸🇬",
      emojiU: "U+1F1F8 U+1F1EC",
      states: [
        {
          id: 4651,
          name: "Central Singapore Community Development Council",
          state_code: "01",
          cities: [
            {
              id: 104057,
              name: "Singapore",
              latitude: "1.28967000",
              longitude: "103.85007000",
            },
          ],
        },
        {
          id: 4649,
          name: "North East Community Development Council",
          state_code: "02",
          cities: [],
        },
        {
          id: 4653,
          name: "North West Community Development Council",
          state_code: "03",
          cities: [
            {
              id: 104058,
              name: "Woodlands",
              latitude: "1.43801000",
              longitude: "103.78877000",
            },
          ],
        },
        {
          id: 4650,
          name: "South East Community Development Council",
          state_code: "04",
          cities: [],
        },
        {
          id: 4652,
          name: "South West Community Development Council",
          state_code: "05",
          cities: [],
        },
      ],
    },
  ];

  beforeAll(async () => {
    await dbHandlers.connect();
  });
  beforeEach(async () => {
    await Country.create(CountryData);
  });
  afterEach(async () => await dbHandlers.clearDatabase());
  afterAll(async () => await dbHandlers.closeDatabase());

  describe("GET /", () => {
    it("should return welcome message", async () => {
      const { text } = await request(app).get("/").expect(200);
      expect(text).toEqual("Welcome!");
    });
  });

  describe("GET /country", () => {
    it("should return all 1 country", async () => {
      const response = await request(app).get("/country");
      expect(response.body.length).toBe(1);
    });
  });
});
