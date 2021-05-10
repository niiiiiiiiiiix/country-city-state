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
    {
      timezones: [
        {
          zoneName: "Asia/Brunei",
          gmtOffset: 28800,
          gmtOffsetName: "UTC+08:00",
          abbreviation: "BNT",
          tzName: "Brunei Darussalam Time",
        },
      ],
      states: [
        {
          id: 1217,
          name: "Belait District",
          state_code: "BE",
          cities: [
            {
              id: 9820,
              name: "Kuala Belait",
              latitude: "4.58361000",
              longitude: "114.23120000",
            },
            {
              id: 9823,
              name: "Seria",
              latitude: "4.60637000",
              longitude: "114.32476000",
            },
          ],
        },
        {
          id: 1216,
          name: "Brunei-Muara District",
          state_code: "BM",
          cities: [
            {
              id: 9816,
              name: "Bandar Seri Begawan",
              latitude: "4.89035000",
              longitude: "114.94006000",
            },
            {
              id: 9818,
              name: "Berakas A",
              latitude: "4.97032000",
              longitude: "114.92989000",
            },
            {
              id: 9819,
              name: "Kapok",
              latitude: "5.02447000",
              longitude: "115.04664000",
            },
            {
              id: 9821,
              name: "Mentiri",
              latitude: "4.97058000",
              longitude: "115.02078000",
            },
            {
              id: 9822,
              name: "Serasa",
              latitude: "5.01718000",
              longitude: "115.05841000",
            },
          ],
        },
        {
          id: 1218,
          name: "Temburong District",
          state_code: "TE",
          cities: [
            {
              id: 9817,
              name: "Bangar",
              latitude: "4.70861000",
              longitude: "115.07167000",
            },
          ],
        },
        {
          id: 1219,
          name: "Tutong District",
          state_code: "TU",
          cities: [
            {
              id: 9824,
              name: "Tutong",
              latitude: "4.80278000",
              longitude: "114.64917000",
            },
          ],
        },
      ],
      id: 33,
      name: "Brunei",
      iso3: "BRN",
      iso2: "BN",
      phone_code: "673",
      capital: "Bandar Seri Begawan",
      currency: "BND",
      currency_symbol: "B$",
      tld: ".bn",
      native: "Negara Brunei Darussalam",
      region: "Asia",
      subregion: "South-Eastern Asia",
      translations: {
        br: "Brunei",
        pt: "Brunei",
        nl: "Brunei",
        hr: "Brunej",
        fa: "برونئی",
        de: "Brunei",
        es: "Brunei",
        fr: "Brunei",
        ja: "ブルネイ・ダルサラーム",
        it: "Brunei",
      },
      latitude: "4.50000000",
      longitude: "114.66666666",
      emoji: "🇧🇳",
      emojiU: "U+1F1E7 U+1F1F3",
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
    it("should return all countries", async () => {
      const { body } = await request(app).get("/country");
      expect(body.length).toBe(2);
    });
  });

  describe("GET /country/:name", () => {
    it("should return only the country selected (in this case, Singapore)", async () => {
      const { body } = await request(app).get("/country/Singapore");
      expect(body.name).toEqual("Singapore");
    });
  });
});
