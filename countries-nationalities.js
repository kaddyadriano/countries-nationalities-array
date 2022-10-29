let nationalities = [
    AF: "Afghan",
    AX: "Åland Island",
    AL: "Albanian",
    DZ: "Algerian",
    AS: "American Samoan",
    AD: "Andorran",
    AO: "Angolan",
    AI: "Anguillan",
    AQ: "Antarctic",
    AG: "Antiguan or Barbudan",
    AR: "Argentine",
    AM: "Armenian",
    AW: "Aruban",
    AU: "Australian",
    AT: "Austrian",
    AZ: "Azerbaijani, Azeri",
    BS: "Bahamian",
    BH: "Bahraini",
    BD: "Bangladeshi",
    BB: "Barbadian",
    BY: "Belarusian",
    BE: "Belgian",
    BZ: "Belizean",
    BJ: "Beninese, Beninois",
    BM: "Bermudian, Bermudan",
    BT: "Bhutanese",
    BO: "Bolivian",
    BQ: "Bonaire",
    BA: "Bosnian or Herzegovinian",
    BW: "Motswana, Botswanan",
    BV: "Bouvet Island",
    BR: "Brazilian",
    IO: "BIOT",
    BN: "Bruneian",
    BG: "Bulgarian",
    BF: "Burkinabé",
    BI: "Burundian",
    CV: "Cabo Verdean",
    KH: "Cambodian",
    CM: "Cameroonian",
    CA: "Canadian",
    KY: "Caymanian",
    CF: "Central African",
    TD: "Chadian",
    CL: "Chilean",
    CN: "Chinese",
    CX: "Christmas Island",
    CC: "Cocos Island",
    CO: "Colombian",
    KM: "Comoran, Comorian",
    CG: "Congolese",
    CD: "Congolese",
    CK: "Cook Island",
    CR: "Costa Rican",
    CI: "Ivorian",
    HR: "Croatian",
    CU: "Cuban",
    CW: "Curaçaoan",
    CY: "Cypriot",
    CZ: "Czech",
    DK: "Danish",
    DJ: "Djiboutian",
    DM: "Dominican",
    DO: "Dominican",
    EC: "Ecuadorian",
    EG: "Egyptian",
    SV: "Salvadoran",
    GQ: "Equatorial Guinean, Equatoguinean",
    ER: "Eritrean",
    EE: "Estonian",
    ET: "Ethiopian",
    FK: "Falkland Island",
    FO: "Faroese",
    FJ: "Fijian",
    FI: "Finnish",
    FR: "French",
    GF: "French Guianese",
    PF: "French Polynesian",
    TF: "French Southern Territories",
    GA: "Gabonese",
    GM: "Gambian",
    GE: "Georgian",
    DE: "German",
    GH: "Ghanaian",
    GI: "Gibraltar",
    GR: "Greek, Hellenic",
    GL: "Greenlandic",
    GD: "Grenadian",
    GP: "Guadeloupe",
    GU: "Guamanian, Guambat",
    GT: "Guatemalan",
    GG: "Channel Island",
    GN: "Guinean",
    GW: "Bissau-Guinean",
    GY: "Guyanese",
    HT: "Haitian",
    HM: "Heard Island or McDonald Islands",
    VA: "Vatican",
    HN: "Honduran",
    HK: "Hong Kong, Hong Kongese",
    HU: "Hungarian, Magyar",
    IS: "Icelandic",
    IN: "Indian",
    ID: "Indonesian",
    IR: "Iranian, Persian",
    IQ: "Iraqi",
    IE: "Irish",
    IM: "Manx",
    IL: "Israeli",
    IT: "Italian",
    JM: "Jamaican",
    JP: "Japanese",
    JE: "Channel Island",
    JO: "Jordanian",
    KZ: "Kazakhstani, Kazakh",
    KE: "Kenyan",
    KI: "I-Kiribati",
    KP: "North Korean",
    KR: "South Korean",
    KW: "Kuwaiti",
    KG: "Kyrgyzstani, Kyrgyz, Kirgiz, Kirghiz",
    LA: "Lao, Laotian",
    LV: "Latvian",
    LB: "Lebanese",
    LS: "Basotho",
    LR: "Liberian",
    LY: "Libyan",
    LI: "Liechtenstein",
    LT: "Lithuanian",
    LU: "Luxembourg, Luxembourgish",
    MO: "Macanese, Chinese",
    MK: "Macedonian",
    MG: "Malagasy",
    MW: "Malawian",
    MY: "Malaysian",
    MV: "Maldivian",
    ML: "Malian, Malinese",
    MT: "Maltese",
    MH: "Marshallese",
    MQ: "Martiniquais, Martinican",
    MR: "Mauritanian",
    MU: "Mauritian",
    YT: "Mahoran",
    MX: "Mexican",
    FM: "Micronesian",
    MD: "Moldovan",
    MC: "Monégasque, Monacan",
    MN: "Mongolian",
    ME: "Montenegrin",
    MS: "Montserratian",
    MA: "Moroccan",
    MZ: "Mozambican",
    MM: "Burmese",
    NA: "Namibian",
    NR: "Nauruan",
    NP: "Nepali, Nepalese",
    NL: "Dutch, Netherlandic",
    NC: "New Caledonian",
    NZ: "New Zealand, NZ",
    NI: "Nicaraguan",
    NE: "Nigerien",
    NG: "Nigerian",
    NU: "Niuean",
    NF: "Norfolk Island",
    MP: "Northern Marianan",
    NO: "Norwegian",
    OM: "Omani",
    PK: "Pakistani",
    PW: "Palauan",
    PS: "Palestinian",
    PA: "Panamanian",
    PG: "Papua New Guinean, Papuan",
    PY: "Paraguayan",
    PE: "Peruvian",
    PH: "Philippine, Filipino",
    PN: "Pitcairn Island",
    PL: "Polish",
    PT: "Portuguese",
    PR: "Puerto Rican",
    QA: "Qatari",
    RE: "Réunionese, Réunionnais",
    RO: "Romanian",
    RU: "Russian",
    RW: "Rwandan",
    BL: "Barthélemois",
    SH: "Saint Helenian",
    KN: "Kittitian or Nevisian",
    LC: "Saint Lucian",
    MF: "Saint-Martinoise",
    PM: "Saint-Pierrais or Miquelonnais",
    VC: "Saint Vincentian, Vincentian",
    WS: "Samoan",
    SM: "Sammarinese",
    ST: "São Toméan",
    SA: "Saudi, Saudi Arabian",
    SN: "Senegalese",
    RS: "Serbian",
    SC: "Seychellois",
    SL: "Sierra Leonean",
    SG: "Singaporean",
    SX: "Sint Maarten",
    SK: "Slovak",
    SI: "Slovenian, Slovene",
    SB: "Solomon Island",
    SO: "Somali, Somalian",
    ZA: "South African",
    GS: "South Georgia or South Sandwich Islands",
    SS: "South Sudanese",
    ES: "Spanish",
    LK: "Sri Lankan",
    SD: "Sudanese",
    SR: "Surinamese",
    SJ: "Svalbard",
    SZ: "Swazi",
    SE: "Swedish",
    CH: "Swiss",
    SY: "Syrian",
    TW: "Chinese, Taiwanese",
    TJ: "Tajikistani",
    TZ: "Tanzanian",
    TH: "Thai",
    TL: "Timorese",
    TG: "Togolese",
    TK: "Tokelauan",
    TO: "Tongan",
    TT: "Trinidadian or Tobagonian",
    TN: "Tunisian",
    TR: "Turkish",
    TM: "Turkmen",
    TC: "Turks and Caicos Island",
    TV: "Tuvaluan",
    UG: "Ugandan",
    UA: "Ukrainian",
    AE: "Emirati, Emirian, Emiri",
    GB: "British, UK",
    UM: "American",
    US: "American",
    UY: "Uruguayan",
    UZ: "Uzbekistani, Uzbek",
    VU: "Ni-Vanuatu, Vanuatuan",
    VE: "Venezuelan",
    VN: "Vietnamese",
    VG: "British Virgin Island",
    VI: "U.S. Virgin Island",
    WF: "Wallis and Futuna, Wallisian or Futunan",
    EH: "Sahrawi, Sahrawian, Sahraouian",
    YE: "Yemeni",
    ZM: "Zambian",
    ZW: "Zimbabwean"
];
