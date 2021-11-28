const countries = [
  {
    name: "Afghanistan",
    code: "AF",
    flag: require("../assets/flags/af.png"),
  },
  {
    name: "Åland Islands",
    code: "AX",
    flag: require("../assets/flags/ax.png"),
  },
  {
    name: "Albania",
    code: "AL",
    flag: require("../assets/flags/al.png"),
  },
  {
    name: "Algeria",
    code: "DZ",
    flag: require("../assets/flags/dz.png"),
  },
  {
    name: "American Samoa",
    code: "AS",
    flag: require("../assets/flags/as.png"),
  },
  {
    name: "AndorrA",
    code: "AD",
    flag: require("../assets/flags/ad.png"),
  },
  {
    name: "Angola",
    code: "AO",
    flag: require("../assets/flags/ao.png"),
  },
  {
    name: "Anguilla",
    code: "AI",
    flag: require("../assets/flags/ai.png"),
  },
  {
    name: "Antarctica",
    code: "AQ",
    flag: require("../assets/flags/aq.png"),
  },
  {
    name: "Antigua and Barbuda",
    code: "AG",
    flag: require("../assets/flags/ag.png"),
  },
  {
    name: "Argentina",
    code: "AR",
    flag: require("../assets/flags/ar.png"),
  },
  {
    name: "Armenia",
    code: "AM",
    flag: require("../assets/flags/am.png"),
  },
  {
    name: "Aruba",
    code: "AW",
    flag: require("../assets/flags/aw.png"),
  },
  {
    name: "Australia",
    code: "AU",
    flag: require("../assets/flags/au.png"),
  },
  {
    name: "Austria",
    code: "AT",
    flag: require("../assets/flags/at.png"),
  },
  {
    name: "Azerbaijan",
    code: "AZ",
    flag: require("../assets/flags/az.png"),
  },
  {
    name: "Bahamas",
    code: "BS",
    flag: require("../assets/flags/bs.png"),
  },
  {
    name: "Bahrain",
    code: "BH",
    flag: require("../assets/flags/bh.png"),
  },
  {
    name: "Bangladesh",
    code: "BD",
    flag: require("../assets/flags/bd.png"),
  },
  {
    name: "Barbados",
    code: "BB",
    flag: require("../assets/flags/bb.png"),
  },
  {
    name: "Belarus",
    code: "BY",
    flag: require("../assets/flags/by.png"),
  },
  {
    name: "Belgium",
    code: "BE",
    flag: require("../assets/flags/be.png"),
  },
  {
    name: "Belize",
    code: "BZ",
    flag: require("../assets/flags/bz.png"),
  },
  {
    name: "Benin",
    code: "BJ",
    flag: require("../assets/flags/bj.png"),
  },
  {
    name: "Bermuda",
    code: "BM",
    flag: require("../assets/flags/bm.png"),
  },
  {
    name: "Bhutan",
    code: "BT",
    flag: require("../assets/flags/bt.png"),
  },
  {
    name: "Bolivia",
    code: "BO",
    flag: require("../assets/flags/bo.png"),
  },
  {
    name: "Bosnia and Herzegovina",
    code: "BA",
    flag: require("../assets/flags/ba.png"),
  },
  {
    name: "Botswana",
    code: "BW",
    flag: require("../assets/flags/bw.png"),
  },
  {
    name: "Bouvet Island",
    code: "BV",
    flag: require("../assets/flags/bv.png"),
  },
  {
    name: "Brazil",
    code: "BR",
    flag: require("../assets/flags/br.png"),
  },
  {
    name: "British Indian Ocean Territory",
    code: "IO",
    flag: require("../assets/flags/io.png"),
  },
  {
    name: "Brunei Darussalam",
    code: "BN",
    flag: require("../assets/flags/bn.png"),
  },
  {
    name: "Bulgaria",
    code: "BG",
    flag: require("../assets/flags/bg.png"),
  },
  {
    name: "Burkina Faso",
    code: "BF",
    flag: require("../assets/flags/bf.png"),
  },
  {
    name: "Burundi",
    code: "BI",
    flag: require("../assets/flags/bi.png"),
  },
  {
    name: "Cambodia",
    code: "KH",
    flag: require("../assets/flags/kh.png"),
  },
  {
    name: "Cameroon",
    code: "CM",
    flag: require("../assets/flags/cm.png"),
  },
  {
    name: "Canada",
    code: "CA",
    flag: require("../assets/flags/va.png"),
  },
  {
    name: "Cape Verde",
    code: "CV",
    flag: require("../assets/flags/cv.png"),
  },
  {
    name: "Cayman Islands",
    code: "KY",
    flag: require("../assets/flags/ky.png"),
  },
  {
    name: "Central African Republic",
    code: "CF",
    flag: require("../assets/flags/cf.png"),
  },
  {
    name: "Chad",
    code: "TD",
    flag: require("../assets/flags/td.png"),
  },
  {
    name: "Chile",
    code: "CL",
    flag: require("../assets/flags/cl.png"),
  },
  {
    name: "China",
    code: "CN",
    flag: require("../assets/flags/cn.png"),
  },
  {
    name: "Christmas Island",
    code: "CX",
    flag: require("../assets/flags/cx.png"),
  },
  {
    name: "Cocos (Keeling) Islands",
    code: "CC",
    flag: require("../assets/flags/cc.png"),
  },
  {
    name: "Colombia",
    code: "CO",
    flag: require("../assets/flags/co.png"),
  },
  {
    name: "Comoros",
    code: "KM",
    flag: require("../assets/flags/km.png"),
  },
  {
    name: "Congo",
    code: "CG",
    flag: require("../assets/flags/cg.png"),
  },
  {
    name: "Congo, The Democratic Republic of the",
    code: "CD",
    flag: require("../assets/flags/cd.png"),
  },
  {
    name: "Cook Islands",
    code: "CK",
    flag: require("../assets/flags/ck.png"),
  },
  {
    name: "Costa Rica",
    code: "CR",
    flag: require("../assets/flags/cr.png"),
  },
  {
    name: "Cote D'Ivoire",
    code: "CI",
    flag: require("../assets/flags/ci.png"),
  },
  {
    name: "Croatia",
    code: "HR",
    flag: require("../assets/flags/hr.png"),
  },
  {
    name: "Cuba",
    code: "CU",
    flag: require("../assets/flags/cu.png"),
  },
  {
    name: "Cyprus",
    code: "CY",
    flag: require("../assets/flags/cy.png"),
  },
  {
    name: "Czech Republic",
    code: "CZ",
    flag: require("../assets/flags/cz.png"),
  },
  {
    name: "Denmark",
    code: "DK",
    flag: require("../assets/flags/dk.png"),
  },
  {
    name: "Djibouti",
    code: "DJ",
    flag: require("../assets/flags/dj.png"),
  },
  {
    name: "Dominica",
    code: "DM",
    flag: require("../assets/flags/dm.png"),
  },
  {
    name: "Dominican Republic",
    code: "DO",
    flag: require("../assets/flags/do.png"),
  },
  {
    name: "Ecuador",
    code: "EC",
    flag: require("../assets/flags/ec.png"),
  },
  {
    name: "Egypt",
    code: "EG",
    flag: require("../assets/flags/eg.png"),
  },
  {
    name: "El Salvador",
    code: "SV",
    flag: require("../assets/flags/sv.png"),
  },
  {
    name: "Equatorial Guinea",
    code: "GQ",
    flag: require("../assets/flags/gq.png"),
  },
  {
    name: "Eritrea",
    code: "ER",
    flag: require("../assets/flags/er.png"),
  },
  {
    name: "Estonia",
    code: "EE",
    flag: require("../assets/flags/ee.png"),
  },
  {
    name: "Ethiopia",
    code: "ET",
    flag: require("../assets/flags/et.png"),
  },
  {
    name: "Falkland Islands (Malvinas)",
    code: "FK",
    flag: require("../assets/flags/fk.png"),
  },
  {
    name: "Faroe Islands",
    code: "FO",
    flag: require("../assets/flags/fo.png"),
  },
  {
    name: "Fiji",
    code: "FJ",
    flag: require("../assets/flags/fj.png"),
  },
  {
    name: "Finland",
    code: "FI",
    flag: require("../assets/flags/fi.png"),
  },
  {
    name: "France",
    code: "FR",
    flag: require("../assets/flags/fr.png"),
  },
  {
    name: "French Guiana",
    code: "GF",
    flag: require("../assets/flags/gf.png"),
  },
  {
    name: "French Polynesia",
    code: "PF",
    flag: require("../assets/flags/pf.png"),
  },
  {
    name: "French Southern Territories",
    code: "TF",
    flag: require("../assets/flags/tf.png"),
  },
  {
    name: "Gabon",
    code: "GA",
    flag: require("../assets/flags/ga.png"),
  },
  {
    name: "Gambia",
    code: "GM",
    flag: require("../assets/flags/gm.png"),
  },
  {
    name: "Georgia",
    code: "GE",
    flag: require("../assets/flags/ge.png"),
  },
  {
    name: "Germany",
    code: "DE",
    flag: require("../assets/flags/de.png"),
  },
  {
    name: "Ghana",
    code: "GH",
    flag: require("../assets/flags/gh.png"),
  },
  {
    name: "Gibraltar",
    code: "GI",
    flag: require("../assets/flags/gi.png"),
  },
  {
    name: "Greece",
    code: "GR",
    flag: require("../assets/flags/gr.png"),
  },
  {
    name: "Greenland",
    code: "GL",
    flag: require("../assets/flags/gl.png"),
  },
  {
    name: "Grenada",
    code: "GD",
    flag: require("../assets/flags/gd.png"),
  },
  {
    name: "Guadeloupe",
    code: "GP",
    flag: require("../assets/flags/gp.png"),
  },
  {
    name: "Guam",
    code: "GU",
    flag: require("../assets/flags/gu.png"),
  },
  {
    name: "Guatemala",
    code: "GT",
    flag: require("../assets/flags/gt.png"),
  },
  {
    name: "Guernsey",
    code: "GG",
    flag: require("../assets/flags/gg.png"),
  },
  {
    name: "Guinea",
    code: "GN",
    flag: require("../assets/flags/gn.png"),
  },
  {
    name: "Guinea-Bissau",
    code: "GW",
    flag: require("../assets/flags/gw.png"),
  },
  {
    name: "Guyana",
    code: "GY",
    flag: require("../assets/flags/gy.png"),
  },
  {
    name: "Haiti",
    code: "HT",
    flag: require("../assets/flags/ht.png"),
  },
  {
    name: "Heard Island and Mcdonald Islands",
    code: "HM",
    flag: require("../assets/flags/hm.png"),
  },
  {
    name: "Holy See (Vatican City State)",
    code: "VA",
    flag: require("../assets/flags/va.png"),
  },
  {
    name: "Honduras",
    code: "HN",
    flag: require("../assets/flags/hn.png"),
  },
  {
    name: "Hong Kong",
    code: "HK",
    flag: require("../assets/flags/hk.png"),
  },
  {
    name: "Hungary",
    code: "HU",
    flag: require("../assets/flags/hu.png"),
  },
  {
    name: "Iceland",
    code: "IS",
    flag: require("../assets/flags/is.png"),
  },
  {
    name: "India",
    code: "IN",
    flag: require("../assets/flags/in.png"),
  },
  {
    name: "Indonesia",
    code: "ID",
    flag: require("../assets/flags/id.png"),
  },
  {
    name: "Iran, Islamic Republic Of",
    code: "IR",
    flag: require("../assets/flags/ir.png"),
  },
  {
    name: "Iraq",
    code: "IQ",
    flag: require("../assets/flags/iq.png"),
  },
  {
    name: "Ireland",
    code: "IE",
    flag: require("../assets/flags/ie.png"),
  },
  {
    name: "Isle of Man",
    code: "IM",
    flag: require("../assets/flags/im.png"),
  },
  {
    name: "Italy",
    code: "IT",
    flag: require("../assets/flags/it.png"),
  },
  {
    name: "Jamaica",
    code: "JM",
    flag: require("../assets/flags/jm.png"),
  },
  {
    name: "Japan",
    code: "JP",
    flag: require("../assets/flags/jp.png"),
  },
  {
    name: "Jersey",
    code: "JE",
    flag: require("../assets/flags/je.png"),
  },
  {
    name: "Jordan",
    code: "JO",
    flag: require("../assets/flags/jo.png"),
  },
  {
    name: "Kazakhstan",
    code: "KZ",
    flag: require("../assets/flags/kz.png"),
  },
  {
    name: "Kenya",
    code: "KE",
    flag: require("../assets/flags/ke.png"),
  },
  {
    name: "Kiribati",
    code: "KI",
    flag: require("../assets/flags/ki.png"),
  },
  {
    name: "Korea, Democratic People'S Republic of",
    code: "KP",
    flag: require("../assets/flags/kp.png"),
  },
  {
    name: "Korea, Republic of",
    code: "KR",
    flag: require("../assets/flags/kr.png"),
  },
  {
    name: "Kuwait",
    code: "KW",
    flag: require("../assets/flags/kw.png"),
  },
  {
    name: "Kyrgyzstan",
    code: "KG",
    flag: require("../assets/flags/kg.png"),
  },
  {
    name: "Lao People'S Democratic Republic",
    code: "LA",
    flag: require("../assets/flags/la.png"),
  },
  {
    name: "Latvia",
    code: "LV",
    flag: require("../assets/flags/lv.png"),
  },
  {
    name: "Lebanon",
    code: "LB",
    flag: require("../assets/flags/lb.png"),
  },
  {
    name: "Lesotho",
    code: "LS",
    flag: require("../assets/flags/ls.png"),
  },
  {
    name: "Liberia",
    code: "LR",
    flag: require("../assets/flags/lr.png"),
  },
  {
    name: "Libyan Arab Jamahiriya",
    code: "LY",
    flag: require("../assets/flags/ly.png"),
  },
  {
    name: "Liechtenstein",
    code: "LI",
    flag: require("../assets/flags/li.png"),
  },
  {
    name: "Lithuania",
    code: "LT",
    flag: require("../assets/flags/lt.png"),
  },
  {
    name: "Luxembourg",
    code: "LU",
    flag: require("../assets/flags/lu.png"),
  },
  {
    name: "Macao",
    code: "MO",
    flag: require("../assets/flags/mo.png"),
  },
  {
    name: "Macedonia, The Former Yugoslav Republic of",
    code: "MK",
    flag: require("../assets/flags/mk.png"),
  },
  {
    name: "Madagascar",
    code: "MG",
    flag: require("../assets/flags/mg.png"),
  },
  {
    name: "Malawi",
    code: "MW",
    flag: require("../assets/flags/mw.png"),
  },
  {
    name: "Malaysia",
    code: "MY",
    flag: require("../assets/flags/my.png"),
  },
  {
    name: "Maldives",
    code: "MV",
    flag: require("../assets/flags/mv.png"),
  },
  {
    name: "Mali",
    code: "ML",
    flag: require("../assets/flags/ml.png"),
  },
  {
    name: "Malta",
    code: "MT",
    flag: require("../assets/flags/mt.png"),
  },
  {
    name: "Marshall Islands",
    code: "MH",
    flag: require("../assets/flags/mh.png"),
  },
  {
    name: "Martinique",
    code: "MQ",
    flag: require("../assets/flags/mq.png"),
  },
  {
    name: "Mauritania",
    code: "MR",
    flag: require("../assets/flags/mr.png"),
  },
  {
    name: "Mauritius",
    code: "MU",
    flag: require("../assets/flags/mu.png"),
  },
  {
    name: "Mayotte",
    code: "YT",
    flag: require("../assets/flags/yt.png"),
  },
  {
    name: "Mexico",
    code: "MX",
    flag: require("../assets/flags/mx.png"),
  },
  {
    name: "Micronesia, Federated States of",
    code: "FM",
    flag: require("../assets/flags/fm.png"),
  },
  {
    name: "Moldova, Republic of",
    code: "MD",
    flag: require("../assets/flags/md.png"),
  },
  {
    name: "Monaco",
    code: "MC",
    flag: require("../assets/flags/mc.png"),
  },
  {
    name: "Mongolia",
    code: "MN",
    flag: require("../assets/flags/mn.png"),
  },
  {
    name: "Montserrat",
    code: "MS",
    flag: require("../assets/flags/ms.png"),
  },
  {
    name: "Morocco",
    code: "MA",
    flag: require("../assets/flags/ma.png"),
  },
  {
    name: "Mozambique",
    code: "MZ",
    flag: require("../assets/flags/mz.png"),
  },
  {
    name: "Myanmar",
    code: "MM",
    flag: require("../assets/flags/mm.png"),
  },
  {
    name: "Namibia",
    code: "NA",
    flag: require("../assets/flags/na.png"),
  },
  {
    name: "Nauru",
    code: "NR",
    flag: require("../assets/flags/nr.png"),
  },
  {
    name: "Nepal",
    code: "NP",
    flag: require("../assets/flags/np.png"),
  },
  {
    name: "Netherlands",
    code: "NL",
    flag: require("../assets/flags/nl.png"),
  },
  {
    name: "Netherlands Antilles",
    code: "AN",
    flag: require("../assets/flags/an.png"),
  },
  {
    name: "New Caledonia",
    code: "NC",
    flag: require("../assets/flags/nc.png"),
  },
  {
    name: "New Zealand",
    code: "NZ",
    flag: require("../assets/flags/nz.png"),
  },
  {
    name: "Nicaragua",
    code: "NI",
    flag: require("../assets/flags/ni.png"),
  },
  {
    name: "Niger",
    code: "NE",
    flag: require("../assets/flags/ne.png"),
  },
  {
    name: "Nigeria",
    code: "NG",
    flag: require("../assets/flags/ng.png"),
  },
  {
    name: "Niue",
    code: "NU",
    flag: require("../assets/flags/nu.png"),
  },
  {
    name: "Norfolk Island",
    code: "NF",
    flag: require("../assets/flags/nf.png"),
  },
  {
    name: "Northern Mariana Islands",
    code: "MP",
    flag: require("../assets/flags/mp.png"),
  },
  {
    name: "Norway",
    code: "NO",
    flag: require("../assets/flags/no.png"),
  },
  {
    name: "Oman",
    code: "OM",
    flag: require("../assets/flags/om.png"),
  },
  {
    name: "Pakistan",
    code: "PK",
    flag: require("../assets/flags/pk.png"),
  },
  {
    name: "Palau",
    code: "PW",
    flag: require("../assets/flags/pw.png"),
  },
  {
    name: "Palestinian",
    code: "PS",
    flag: require("../assets/flags/ps.png"),
  },
  {
    name: "Panama",
    code: "PA",
    flag: require("../assets/flags/pa.png"),
  },
  {
    name: "Papua New Guinea",
    code: "PG",
    flag: require("../assets/flags/pg.png"),
  },
  {
    name: "Paraguay",
    code: "PY",
    flag: require("../assets/flags/py.png"),
  },
  {
    name: "Peru",
    code: "PE",
    flag: require("../assets/flags/pe.png"),
  },
  {
    name: "Philippines",
    code: "PH",
    flag: require("../assets/flags/ph.png"),
  },
  {
    name: "Pitcairn",
    code: "PN",
    flag: require("../assets/flags/pn.png"),
  },
  {
    name: "Poland",
    code: "PL",
    flag: require("../assets/flags/pl.png"),
  },
  {
    name: "Portugal",
    code: "PT",
    flag: require("../assets/flags/pt.png"),
  },
  {
    name: "Puerto Rico",
    code: "PR",
    flag: require("../assets/flags/pr.png"),
  },
  {
    name: "Qatar",
    code: "QA",
    flag: require("../assets/flags/qa.png"),
  },
  {
    name: "Reunion",
    code: "RE",
    flag: require("../assets/flags/re.png"),
  },
  {
    name: "Romania",
    code: "RO",
    flag: require("../assets/flags/ro.png"),
  },
  {
    name: "Russian Federation",
    code: "RU",
    flag: require("../assets/flags/ru.png"),
  },
  {
    name: "RWANDA",
    code: "RW",
    flag: require("../assets/flags/rw.png"),
  },
  {
    name: "Saint Helena",
    code: "SH",
    flag: require("../assets/flags/sh.png"),
  },
  {
    name: "Saint Kitts and Nevis",
    code: "KN",
    flag: require("../assets/flags/kn.png"),
  },
  {
    name: "Saint Lucia",
    code: "LC",
    flag: require("../assets/flags/lc.png"),
  },
  {
    name: "Saint Pierre and Miquelon",
    code: "PM",
    flag: require("../assets/flags/pm.png"),
  },
  {
    name: "Saint Vincent and the Grenadines",
    code: "VC",
    flag: require("../assets/flags/vc.png"),
  },
  {
    name: "Samoa",
    code: "WS",
    flag: require("../assets/flags/ws.png"),
  },
  {
    name: "San Marino",
    code: "SM",
    flag: require("../assets/flags/sm.png"),
  },
  {
    name: "Sao Tome and Principe",
    code: "ST",
    flag: require("../assets/flags/st.png"),
  },
  {
    name: "Saudi Arabia",
    code: "SA",
    flag: require("../assets/flags/sa.png"),
  },
  {
    name: "Senegal",
    code: "SN",
    flag: require("../assets/flags/sn.png"),
  },
  {
    name: "Serbia and Montenegro",
    code: "CS",
    flag: require("../assets/flags/cs.png"),
  },
  {
    name: "Seychelles",
    code: "SC",
    flag: require("../assets/flags/sc.png"),
  },
  {
    name: "Sierra Leone",
    code: "SL",
    flag: require("../assets/flags/sl.png"),
  },
  {
    name: "Singapore",
    code: "SG",
    flag: require("../assets/flags/sg.png"),
  },
  {
    name: "Slovakia",
    code: "SK",
    flag: require("../assets/flags/sk.png"),
  },
  {
    name: "Slovenia",
    code: "SI",
    flag: require("../assets/flags/si.png"),
  },
  {
    name: "Solomon Islands",
    code: "SB",
    flag: require("../assets/flags/sb.png"),
  },
  {
    name: "Somalia",
    code: "SO",
    flag: require("../assets/flags/so.png"),
  },
  {
    name: "South Africa",
    code: "ZA",
    flag: require("../assets/flags/za.png"),
  },
  {
    name: "South Georgia and the South Sandwich Islands",
    code: "GS",
    flag: require("../assets/flags/gs.png"),
  },
  {
    name: "Spain",
    code: "ES",
    flag: require("../assets/flags/es.png"),
  },
  {
    name: "Sri Lanka",
    code: "LK",
    flag: require("../assets/flags/lk.png"),
  },
  {
    name: "Sudan",
    code: "SD",
    flag: require("../assets/flags/sd.png"),
  },
  {
    name: "Suriname",
    code: "SR",
    flag: require("../assets/flags/sr.png"),
  },
  {
    name: "Svalbard and Jan Mayen",
    code: "SJ",
    flag: require("../assets/flags/sj.png"),
  },
  {
    name: "Swaziland",
    code: "SZ",
    flag: require("../assets/flags/sz.png"),
  },
  {
    name: "Sweden",
    code: "SE",
    flag: require("../assets/flags/se.png"),
  },
  {
    name: "Switzerland",
    code: "CH",
    flag: require("../assets/flags/ch.png"),
  },
  {
    name: "Syrian Arab Republic",
    code: "SY",
    flag: require("../assets/flags/sy.png"),
  },
  {
    name: "Taiwan, Province of China",
    code: "TW",
    flag: require("../assets/flags/tw.png"),
  },
  {
    name: "Tajikistan",
    code: "TJ",
    flag: require("../assets/flags/tj.png"),
  },
  {
    name: "Tanzania, United Republic of",
    code: "TZ",
    flag: require("../assets/flags/tz.png"),
  },
  {
    name: "Thailand",
    code: "TH",
    flag: require("../assets/flags/th.png"),
  },
  {
    name: "Timor-Leste",
    code: "TL",
    flag: require("../assets/flags/tl.png"),
  },
  {
    name: "Togo",
    code: "TG",
    flag: require("../assets/flags/tg.png"),
  },
  {
    name: "Tokelau",
    code: "TK",
    flag: require("../assets/flags/tk.png"),
  },
  {
    name: "Tonga",
    code: "TO",
    flag: require("../assets/flags/to.png"),
  },
  {
    name: "Trinidad and Tobago",
    code: "TT",
    flag: require("../assets/flags/tt.png"),
  },
  {
    name: "Tunisia",
    code: "TN",
    flag: require("../assets/flags/tn.png"),
  },
  {
    name: "Turkey",
    code: "TR",
    flag: require("../assets/flags/tr.png"),
  },
  {
    name: "Turkmenistan",
    code: "TM",
    flag: require("../assets/flags/tm.png"),
  },
  {
    name: "Turks and Caicos Islands",
    code: "TC",
    flag: require("../assets/flags/tc.png"),
  },
  {
    name: "Tuvalu",
    code: "TV",
    flag: require("../assets/flags/tv.png"),
  },
  {
    name: "Uganda",
    code: "UG",
    flag: require("../assets/flags/ug.png"),
  },
  {
    name: "Ukraine",
    code: "UA",
    flag: require("../assets/flags/ua.png"),
  },
  {
    name: "United Arab Emirates",
    code: "AE",
    flag: require("../assets/flags/ae.png"),
  },
  {
    name: "United Kingdom",
    code: "GB",
    flag: require("../assets/flags/gb.png"),
  },
  {
    name: "United States",
    code: "US",
    flag: require("../assets/flags/us.png"),
  },
  {
    name: "United States Minor Outlying Islands",
    code: "UM",
    flag: require("../assets/flags/um.png"),
  },
  {
    name: "Uruguay",
    code: "UY",
    flag: require("../assets/flags/uy.png"),
  },
  {
    name: "Uzbekistan",
    code: "UZ",
    flag: require("../assets/flags/uz.png"),
  },
  {
    name: "Vanuatu",
    code: "VU",
    flag: require("../assets/flags/vu.png"),
  },
  {
    name: "Venezuela",
    code: "VE",
    flag: require("../assets/flags/ve.png"),
  },
  {
    name: "Viet Nam",
    code: "VN",
    flag: require("../assets/flags/vn.png"),
  },
  {
    name: "Virgin Islands, British",
    code: "VG",
    flag: require("../assets/flags/vg.png"),
  },
  {
    name: "Virgin Islands, U.S.",
    code: "VI",
    flag: require("../assets/flags/vi.png"),
  },
  {
    name: "Wallis and Futuna",
    code: "WF",
    flag: require("../assets/flags/wf.png"),
  },
  {
    name: "Western Sahara",
    code: "EH",
    flag: require("../assets/flags/eh.png"),
  },
  {
    name: "Yemen",
    code: "YE",
    flag: require("../assets/flags/ye.png"),
  },
  {
    name: "Zambia",
    code: "ZM",
    flag: require("../assets/flags/zm.png"),
  },
  {
    name: "Zimbabwe",
    code: "ZW",
    flag: require("../assets/flags/zw.png"),
  },
  {
    name: "Other",
    code: "other",
    flag: require("../assets/flags/other.png"),
  },
];

export default countries;
