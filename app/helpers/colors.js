import { scaleOrdinal } from "d3-scale";

export function hexToRGB(hex, alpha = 1) {
  const r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
  } else {
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }
}

export const COLORS_GENDER = ["#ccc", "#9B1E64", "#3F456B"];
export const genderColorScale = scaleOrdinal().range(COLORS_GENDER);

export const COLORS_SURVEY_RESPONSE = ["#ccc", "#1f496d", "#94424f"];

export const COLORS_REGIONS = [
  //"#ccc",
  "#d28a39",
  "#e9884b",
  "#d25e39",
  "#f55443",
  "#8c2a3d",
  "#455084",
  "#487782",
  "#00b486",
  "#169699",
  "#7f92cc",
  "#78bbff",
  "#62717f",
  "#752155",
  "#3eb3ce",
  "#ffbe46"
];

export const COLORS_SCALE_EXPORTS = ["#ccd5f1", "#5076C4"];
export const COLORS_SCALE_IMPORTS = ["#f8d8db", "#E56671"];

export const COLORS_TRADE_BALANCE = ["#E5656C", "#4E6FD0", "#ccc"];
export const tradeBalanceColorScale = scaleOrdinal().range(
  COLORS_TRADE_BALANCE
);

export const civicsColorScale = scaleOrdinal().range([
  "#FED6D7",
  "#FAA7A8",
  "#FD9F6D",
  "#F3A75C",
  "#FD835C",
  "#DD654F",
  "#F65A5D",
  "#DA4548",
  "#C50A3C",
  "#C90914",
  "#82070C",
  "#AE4E5E",
  "#CA3A6D",
  "#AA0C5D",
  "#95174B"
]);

export const COLORS_INSTITUTIONS = [
  "#2892BD",
  "#4AB6C3",
  "#84CDBC",
  "#AFD898",
  "#2F67A6"
];
export const institutionsColorScale = scaleOrdinal().range(COLORS_INSTITUTIONS);

export const crimesColorScale = scaleOrdinal().range([
  "#1D4A37",
  "#558E6B",
  "#AEBC7A",
  "#D9EAB7",
  "#D8DB7B"
]);

export const COLORS_HEALTHINSURANCE = [
  "#35468C",
  "#7FB1F0",
  "#3B88CD",
  "#1B486D",
  "#464960"
];
export const healthInsuranceColorScale = scaleOrdinal().range(
  COLORS_HEALTHINSURANCE
);

export const COLORS_INDUSTRY_OCCUPATION = [
  "#BF6083",
  "#734C6C",
  "#F06060",
  "#F2A679",
  "#664848",
  "#8E3D3D",
  "#6B1C33",
  "#99174C"
];
export const industryOccupationColorScale = scaleOrdinal().range(
  COLORS_INDUSTRY_OCCUPATION
);

export const employmentBySexColorScale = scaleOrdinal().range([
  "#F9B938",
  "#00A2AE",
  "#E8696D",
  "#7167B2"
]);

export const incomeByAgeColorScale = scaleOrdinal().range([
  "#E4B0AE",
  "#843835",
  "#E56F6A",
  "#1D8CA1",
  "#3FB8C9"
]);

export const COLORS_MIGRATION_BY_EDUCATION = [
  "#12A29B",
  "#73BFB8",
  "#275854",
  "#B3D9B0",
  "#F2EE99",
  "#A0C481",
  "#77C1E0"
];

export const migrationByEducationColorScale = scaleOrdinal().range(
  COLORS_MIGRATION_BY_EDUCATION
);

export const COLORS_EMPLOYMENT = [
  "#74C0E2",
  "#406662",
  "#549E95",
  "#8ABDB6",
  "#BCD8AF",
  "#A8C380",
  "#EDE788",
  "#D6C650",
  "#DC8E7A",
  "#D05555",
  "#BF3251",
  "#872A41",
  "#993F7B",
  "#7454A6",
  "#A17CB0"
];
export const employmentColorScale = scaleOrdinal().range(COLORS_EMPLOYMENT);

export const COLORS_EDUCATION_LEVEL = [
  "#574162",
  "#695475",
  "#7b6788",
  "#8d7b9d",
  "#a090b1",
  "#8e88a6",
  "#7d7f9a",
  "#6b778f",
  "#596f84"
];
export const educationLevelColorScale = scaleOrdinal().range(
  COLORS_EDUCATION_LEVEL
);
export const RDTypesColorScale = scaleOrdinal().range(COLORS_EDUCATION_LEVEL);

export const COLORS_CONTINENTS = [
  "#84386E",
  "#5D5DA8",
  "#335cb5",
  "#3C8181",
  "#E89CA2",
  "#CCBC4A"
];
export const continentColorScale = scaleOrdinal().range(COLORS_CONTINENTS);

export const PRODUCTS_COLORS = [
  "#74C0E2",
  "#406662",
  "#549E95",
  "#8ABDB6",
  "#BCD8AF",
  "#A8C380",
  "#EDE788",
  "#D6C650",
  "#DC8E7A",
  "#D05555",
  "#BF3251",
  "#872A41",
  "#993F7B",
  "#7454A6",
  "#A17CB0",
  "#D1A1BC",
  "#A1AAFB",
  "#5C57D9",
  "#1C26B3",
  "#4D6FD0",
  "#7485AA"
];
export const productsColorScale = scaleOrdinal().range(PRODUCTS_COLORS);
export const regionsColorScale = scaleOrdinal().range(COLORS_REGIONS);

export const INDUSTRIES_COLORS = [
  "#70BFB8",
  "#B2DAAF",
  "#9FC57E",
  "#EDE788",
  "#E1CF27",
  "#F5907A",
  "#E24040",
  "#E61B3D",
  "#A41D36",
  "#882158",
  "#E3A3C0",
  "#B07DB4",
  "#7F53AB",
  "#5E56DF",
  "#0F21B9",
  "#9FADFF",
  "#3670D5",
  "#7C4848",
  "#476D47",
  "#30396B",
  "#79C3F4"
];
export const industriesColorScale = scaleOrdinal().range(INDUSTRIES_COLORS);

export const ORDINAL_COLORS = [
  "#74C0E2",
  "#245955",
  "#22A29C",
  "#70BFB8",
  "#B2DAAF",
  "#9FC57E",
  "#F2EF94",
  "#E1CF28",
  "#F5907A",
  "#F05454",
  "#E61B3D",
  "#A41D36",
  "#892158",
  "#E3A3C0",
  "#B07CB4",
  "#7F53AB",
  "#5E56DF",
  "#0F21B9",
  "#9FADFF",
  "#3770D5",
  "red",
  "green",
  "blue"
];
export const ordinalColorScale = scaleOrdinal().range(ORDINAL_COLORS);

export const administrationColorScale = scaleOrdinal().range([
  "#823A6D",
  "#5D5FA6",
  "#365ED2",
  "#3F8180"
]);

export const MAP_SCALE_COLORS = {
  economy: [
    "#8ea5d8",
    "#869fd5",
    "#7f98d2",
    "#7691cf",
    "#6e8bcc",
    "#6685c9",
    "#5d7fc6",
    "#5479c3"
  ],
  education: [
    "#8682dd",
    "#8677d3",
    "#866cc8",
    "#8560be",
    "#8355b4",
    "#824aaa",
    "#803ea0",
    "#7d3196"
  ],
  environment: [
    "#78a37d",
    "#6b9978",
    "#5f9174",
    "#51876f",
    "#437e6b",
    "#347466",
    "#236c61",
    "#0b635d"
  ],
  demography: [
    "#f37a8b",
    "#f37080",
    "#f26675",
    "#f15c6a",
    "#ef5160",
    "#ee4556",
    "#ec364b",
    "#ea2441"
  ],
  health: [
    "#92d7fe",
    "#8ad4fe",
    "#82d0fe",
    "#79ccfe",
    "#71c9ff",
    "#65c6ff",
    "#5cc2ff",
    "#4fbfff"
  ],
  civics: [
    "#f7bf4f",
    "#f8b64e",
    "#f9ae4d",
    "#faa44c",
    "#fb9c4b",
    "#fb9249",
    "#fc8848",
    "#fc7e47"
  ]
};
