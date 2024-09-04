const countryOptions = {
  1: [
    'US',
    'AG',
    'AI',
    'AS',
    'BB',
    'BM',
    'BS',
    'CA',
    'DM',
    'DO',
    'GD',
    'GU',
    'JM',
    'KN',
    'KY',
    'LC',
    'MP',
    'MS',
    'PR',
    'SX',
    'TC',
    'TT',
    'VC',
    'VG',
    'VI',
  ],
  7: ['RU', 'KZ'],
  20: ['EG'],
  27: ['ZA'],
  30: ['GR'],
  31: ['NL'],
  32: ['BE'],
  33: ['FR'],
  34: ['ES'],
  36: ['HU'],
  39: ['IT', 'VA'],
  40: ['RO'],
  41: ['CH'],
  43: ['AT'],
  44: ['GB', 'GG', 'IM', 'JE'],
  45: ['DK'],
  46: ['SE'],
  47: ['NO', 'SJ'],
  48: ['PL'],
  49: ['DE'],
  51: ['PE'],
  52: ['MX'],
  53: ['CU'],
  54: ['AR'],
  55: ['BR'],
  56: ['CL'],
  57: ['CO'],
  58: ['VE'],
  60: ['MY'],
  61: ['AU', 'CC', 'CX'],
  62: ['ID'],
  63: ['PH'],
  64: ['NZ'],
  65: ['SG'],
  66: ['TH'],
  81: ['JP'],
  82: ['KR'],
  84: ['VN'],
  86: ['CN'],
  90: ['TR'],
  91: ['IN'],
  92: ['PK'],
  93: ['AF'],
  94: ['LK'],
  95: ['MM'],
  98: ['IR'],
  212: ['MA', 'EH'],
  213: ['DZ'],
  216: ['TN'],
  218: ['LY'],
  220: ['GM'],
  221: ['SN'],
  222: ['MR'],
  223: ['ML'],
  224: ['GN'],
  225: ['CI'],
  226: ['BF'],
  227: ['NE'],
  228: ['TG'],
  229: ['BJ'],
  230: ['MU'],
  231: ['LR'],
  232: ['SL'],
  233: ['GH'],
  234: ['NG'],
  235: ['TD'],
  236: ['CF'],
  237: ['CM'],
  238: ['CV'],
  240: ['GQ'],
  241: ['GA'],
  242: ['CG'],
  244: ['AO'],
  245: ['GW'],
  246: ['IO'],
  248: ['SC'],
  249: ['SD'],
  250: ['RW'],
  251: ['ET'],
  252: ['SO'],
  253: ['DJ'],
  254: ['KE'],
  255: ['TZ'],
  256: ['UG'],
  257: ['BI'],
  258: ['MZ'],
  260: ['ZM'],
  261: ['MG'],
  262: ['RE', 'YT'],
  263: ['ZW'],
  264: ['NA'],
  265: ['MW'],
  266: ['LS'],
  267: ['BW'],
  268: ['SZ'],
  269: ['KM'],
  291: ['ER'],
  297: ['AW'],
  298: ['FO'],
  299: ['GL'],
  350: ['GI'],
  351: ['PT'],
  352: ['LU'],
  353: ['IE'],
  354: ['IS'],
  355: ['AL'],
  356: ['MT'],
  357: ['CY'],
  358: ['FI', 'AX'],
  359: ['BG'],
  371: ['LV'],
  372: ['EE'],
  373: ['MD'],
  374: ['AM'],
  375: ['BY'],
  376: ['AD'],
  377: ['MC'],
  378: ['SM'],
  380: ['UA'],
  385: ['HR'],
  386: ['SI'],
  387: ['BA'],
  420: ['CZ'],
  421: ['SK'],
  423: ['LI'],
  500: ['FK'],
  501: ['BZ'],
  502: ['GT'],
  503: ['SV'],
  504: ['HN'],
  505: ['NI'],
  506: ['CR'],
  507: ['PA'],
  509: ['HT'],
  590: ['GP', 'BL', 'MF'],
  591: ['BO'],
  592: ['GY'],
  593: ['EC'],
  594: ['GF'],
  595: ['PY'],
  596: ['MQ'],
  597: ['SR'],
  598: ['UY'],
  672: ['NF'],
  673: ['BN'],
  674: ['NR'],
  675: ['PG'],
  676: ['TO'],
  677: ['SB'],
  678: ['VU'],
  679: ['FJ'],
  680: ['PW'],
  681: ['WF'],
  682: ['CK'],
  685: ['WS'],
  687: ['NC'],
  688: ['TV'],
  689: ['PF'],
  690: ['TK'],
  691: ['FM'],
  692: ['MH'],
  850: ['KP'],
  852: ['HK'],
  853: ['MO'],
  855: ['KH'],
  856: ['LA'],
  880: ['BD'],
  886: ['TW'],
  960: ['MV'],
  961: ['LB'],
  962: ['JO'],
  963: ['SY'],
  964: ['IQ'],
  965: ['KW'],
  966: ['SA'],
  967: ['YE'],
  968: ['OM'],
  970: ['PS'],
  971: ['AE'],
  972: ['IL'],
  973: ['BH'],
  974: ['QA'],
  975: ['BT'],
  976: ['MN'],
  977: ['NP'],
  992: ['TJ'],
  993: ['TM'],
  994: ['AZ'],
  995: ['GE'],
  996: ['KG'],
  998: ['UZ'],
};

const i18nDict = {
  CN: t('China'),
  TW: t('Taiwan'),
  HK: t('Hong Kong'),
  MO: t('Macau'),
  KR: t('South Korea'),
  JP: t('Japan'),
  MY: t('Malaysia'),
  SG: t('Singapore'),
  NZ: t('New Zealand'),
  AU: t('Australia'),
  US: t('United States'),
  CA: t('Canada'),
  VN: t('Vietnam'),
  IN: t('India'),
  ID: t('Indonesia'),
  TH: t('Thailand'),
  PH: t('Philippines'),
  DK: t('Denmark'),
  FI: t('Finland'),
  FR: t('France'),
  DE: t('Germany'),
  GR: t('Greece'),
  IE: t('Ireland'),
  IL: t('Israel'),
  IT: t('Italy'),
  MX: t('Mexico'),
  NL: t('Netherlands'),
  NO: t('Norway'),
  PT: t('Portugal'),
  RU: t('Russia'),
  ZA: t('South Africa'),
  ES: t('Spain'),
  SE: t('Sweden'),
  CH: t('Switzerland'),
  BE: t('Belgium'),
  GB: t('United Kingdom'),
  AR: t('Argentina'),
  BR: t('Brazil'),
  KH: t('Kampuchea'),
  LTU: t('Lithuania'),
  LK: t('Sri Lanka'),
  NG: t('Nigeria'),
  AF: t('Afghanistan'),
  AL: t('Albania'),
  DZ: t('Algeria'),
  AS: t('American Samoa'),
  AD: t('Andorra'),
  AG: t('Antigua and Barbuda'),
  AM: t('Armenia'),
  AT: t('Austria'),
  BS: t('Bahamas'),
  BH: t('Bahrain'),
  BD: t('Bangladesh'),
  BY: t('Belarus'),
  BM: t('Bermuda'),
  BA: t('Bosnia and Herzegovina'),
  IO: t('British Indian Ocean Territory'),
  BF: t('Burkina Faso'),
  CF: t('Central African Republic'),
  TD: t('Chad'),
  CX: t('Christmas Island'),
  CC: t('Cocos (Keeling) Islands'),
  CO: t('Colombia'),
  CG: t('Republic of the Congo'),
  ZR: t('Democratic Republic of the Congo'),
  CR: t('Costa Rica'),
  CI: t("Cote D'Ivoire"),
  CU: t('Cuba'),
  CZ: t('Czech Republic'),
  GQ: t('Equatorial Guinea'),
  EE: t('Estonia'),
  FK: t('Falkland Islands (Malvinas)'),
  PF: t('French Polynesia'),
  GA: t('Gabon'),
  GP: t('Guadeloupe'),
  GW: t('Guinea Bissau'),
  GY: t('Guyana'),
  HN: t('Honduras'),
  HU: t('Hungary'),
  JO: t('Jordan'),
  KZ: t('Kazakhstan'),
  KE: t('Kenya'),
  KW: t('Kuwait'),
  KG: t('Kyrgyzstan'),
  LS: t('Lesotho'),
  MG: t('Madagascar'),
  MV: t('Maldives'),
  YT: t('Mayotte'),
  FM: t('Micronesia'),
  MC: t('Monaco'),
  MN: t('Mongolia'),
  MNE: t('Montenegro'),
  MS: t('Montserrat'),
  MM: t('Myanmar'),
  NR: t('Nauru'),
  NP: t('Nepal'),
  AN: t('Netherlands Antilles'),
  NC: t('New Caledonia'),
  NI: t('Nicaragua'),
  NF: t('Norfolk Island'),
  KP: t('North Korea'),
  MP: t('Northern Mariana Islands'),
  OM: t('Oman'),
  PK: t('Pakistan'),
  PW: t('Palau'),
  PA: t('Panama'),
  PG: t('Papua New Guinea'),
  PN: t('Pitcairn'),
  PL: t('Poland'),
  PR: t('Puerto Rico'),
  QA: t('Qatar'),
  RE: t('Reunion'),
  VCT: t('Saint Vincent and the Grenadines'),
  STP: t('Sao Tome and Principe'),
  SA: t('Saudi Arabia'),
  SRB: t('Serbia'),
  SC: t('Seychelles'),
  SK: t('Slovakia (Slovak Republic)'),
  SI: t('Slovenia'),
  SZ: t('Swaziland'),
  TJ: t('Tajikistan'),
  KNA: t('The Federation of Saint Kitts and Nevis'),
  ABH: t('the Republic of Abkhazia'),
  MKD: t('The Republic of Macedonia'),
  SSD: t('The Republic of South Sudan'),
  TN: t('Tunisia'),
  TM: t('Turkmenistan'),
  TV: t('Tuvalu'),
  UG: t('Uganda'),
  UA: t('Ukraine'),
  AE: t('United Arab Emirates'),
  UY: t('Uruguay'),
  UZ: t('Uzbekistan'),
  VA: t('Vatican City State (Holy See)'),
  WF: t('Wallis And Futuna Islands'),
  EH: t('Western Sahara'),
  YU: t('Yugoslavia'),
  ZM: t('Zambia'),
  AO: t('Angola'),
  AI: t('Anguilla'),
  AW: t('Aruba'),
  AZ: t('Azerbaijan'),
  BB: t('Barbados'),
  BZ: t('Belize'),
  BJ: t('Benin'),
  BT: t('Bhutan'),
  BO: t('Bolivia'),
  BW: t('Botswana'),
  BN: t('Brunei Darussalam'),
  BG: t('Bulgaria'),
  BI: t('Burundi'),
  CM: t('Cameroon'),
  CV: t('Cape Verde'),
  KY: t('Cayman Islands'),
  CL: t('Chile'),
  KM: t('Comoros'),
  CK: t('Cook Islands'),
  HR: t('Croatia (local name: Hrvatska)'),
  CY: t('Cyprus'),
  DJ: t('Djibouti'),
  DM: t('Dominica'),
  TP: t('East Timor'),
  EC: t('Ecuador'),
  EG: t('Egypt'),
  SV: t('El Salvador'),
  ER: t('Eritrea'),
  ET: t('Ethiopia'),
  FO: t('Faroe Islands'),
  FJ: t('Fiji'),
  GF: t('French Guiana'),
  GM: t('Gambia'),
  GE: t('Georgia'),
  GH: t('Ghana'),
  GI: t('Gibraltar'),
  GL: t('Greenland'),
  GD: t('Grenada'),
  GU: t('Guam'),
  GT: t('Guatemala'),
  GN: t('Guinea'),
  HT: t('Haiti'),
  IS: t('Iceland'),
  IR: t('Iran (Islamic Republic of)'),
  IQ: t('Iraq'),
  JM: t('Jamaica'),
  LAO: t("Lao People's Democratic Republic"),
  LV: t('Latvia'),
  LB: t('Lebanon'),
  LR: t('Liberia'),
  LY: t('Libyan Arab Jamahiriya'),
  LI: t('Liechtenstein'),
  LU: t('Luxembourg'),
  MW: t('Malawi'),
  ML: t('Mali'),
  MT: t('Malta'),
  MH: t('Marshall Islands'),
  MQ: t('Martinique'),
  MR: t('Mauritania'),
  MU: t('Mauritius'),
  MD: t('Moldova'),
  MA: t('Morocco'),
  MZ: t('Mozambique'),
  NA: t('Namibia'),
  NE: t('Niger'),
  PS: t('Palestine'),
  PY: t('Paraguay'),
  PE: t('Peru'),
  RO: t('Romania'),
  RW: t('Rwanda'),
  WS: t('Samoa'),
  SM: t('San Marino'),
  SN: t('Senegal'),
  SL: t('Sierra Leone'),
  SB: t('Solomon Islands'),
  SO: t('Somalia'),
  SD: t('Sudan'),
  SR: t('Suriname'),
  SY: t('Syrian Arab Republic'),
  TZ: t('Tanzania'),
  TG: t('Togo'),
  TK: t('Tokelau'),
  TO: t('Tonga'),
  TT: t('Trinidad and Tobago'),
  TR: t('Turkey'),
  TC: t('Turks and Caicos Islands'),
  VU: t('Vanuatu'),
  VE: t('Venezuela'),
  VI: t('Virgin Islands (U.S.)'),
  YE: t('Yemen'),
  ZW: t('Zimbabwe'),
};

export const defaultCountries = Object.keys(countryOptions).map((prefix) => ({
  label: `+${prefix} ${countryOptions[prefix]
    .map((i) => i18nDict[i])
    .join(',')}`,
  value: `+${prefix}`,
}));
