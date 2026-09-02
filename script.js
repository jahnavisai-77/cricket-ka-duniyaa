// =====================================================
// CRICKET KA DUNIYAA 🏏
// COMPLETE JAVASCRIPT
// 12 PLAYERS PER COUNTRY
// =====================================================


// =====================================================
// PLAYER DATA
// =====================================================

const players = [

    // =====================================================
    // INDIA - 12 PLAYERS
    // =====================================================

    {
        name: "SHUBMAN GILL",
        country: "INDIA",
        role: "BATSMAN",
        jersey: 77,
        image: "Shubman_Gill_1751730792572_1751730792782.jpg",
        profile: "https://en.wikipedia.org/wiki/Shubman_Gill"
    },

    {
        name: "VIRAT KOHLI",
        country: "INDIA",
        role: "BATSMAN",
        jersey: 18,
        image: "1434514-virat-kohli-hd-wallpaper-download.jpg.jpg",
        profile: "https://en.wikipedia.org/wiki/Virat_Kohli"
    },

    {
        name: "ROHIT SHARMA",
        country: "INDIA",
        role: "BATSMAN",
        jersey: 45,
        image: "ANI-20250429202756.jpg",
        profile: "https://en.wikipedia.org/wiki/Rohit_Sharma"
    },

    {
        name: "YASHASVI JAISWAL",
        country: "INDIA",
        role: "BATSMAN",
        jersey: 64,
        image: "Yashasvi-Jaiswal-scaled,jpg.webp",
        profile: "https://en.wikipedia.org/wiki/Yashasvi_Jaiswal"
    },

    {
        name: "SHREYAS IYER",
        country: "INDIA",
        role: "BATSMAN",
        jersey: 96,
        image: "ecd3d08bad38800bb8240db77ef2b38a.jpg",
        profile: "https://en.wikipedia.org/wiki/Shreyas_Iyer"
    },

    {
        name: "JASPRIT BUMRAH",
        country: "INDIA",
        role: "BOWLER",
        jersey: 93,
        image: "41406e0a143ce00de1907943b505851d.jpg.jpg",
        profile: "https://en.wikipedia.org/wiki/Jasprit_Bumrah"
    },

    {
        name: "MOHAMMED SIRAJ",
        country: "INDIA",
        role: "BOWLER",
        jersey: 73,
        image: "Mohammed-siraj-Player-of-the-Match-Oval-Test-e1754401855597.jpg",
        profile: "https://en.wikipedia.org/wiki/Mohammed_Siraj"
    },

    {
        name: "KULDEEP YADAV",
        country: "INDIA",
        role: "BOWLER",
        jersey: 23,
        image: "1787398608635_Kuldeep-Yadav.jpg",
        profile: "https://en.wikipedia.org/wiki/Kuldeep_Yadav"
    },

    {
        name: "HARDIK PANDYA",
        country: "INDIA",
        role: "ALL-ROUNDER",
        jersey: 33,
        image: "hp.jpg.jpg",
        profile: "https://en.wikipedia.org/wiki/Hardik_Pandya"
    },

    {
        name: "RAVINDRA JADEJA",
        country: "INDIA",
        role: "ALL-ROUNDER",
        jersey: 8,
        image: "jadeja-ap.jpg",
        profile: "https://en.wikipedia.org/wiki/Ravindra_Jadeja"
    },

    {
        name: "RISHABH PANT",
        country: "INDIA",
        role: "WICKETKEEPER",
        jersey: 17,
        image: "Rishabh-Pant-8ew30s56.jpg",
        profile: "https://en.wikipedia.org/wiki/Rishabh_Pant"
    },

    {
        name: "SANJU SAMSON",
        country: "INDIA",
        role: "WICKETKEEPER",
        jersey: 9,
        image: "Sanju-Samson-2024-10-fc97e0aa60f10c992bb424d8c11284cf-1200x675.jpg",
        profile: "https://en.wikipedia.org/wiki/Sanju_Samson"
    },


    // =====================================================
    // AUSTRALIA - 12 PLAYERS
    // =====================================================

    {
        name: "STEVE SMITH",
        country: "AUSTRALIA",
        role: "BATSMAN",
        jersey: 39,
        image: "1736837225_steve-smith.jpg",
        profile: "https://en.wikipedia.org/wiki/Steve_Smith_(cricketer)"
    },

    {
        name: "TRAVIS HEAD",
        country: "AUSTRALIA",
        role: "BATSMAN",
        jersey: 64,
        image: "1443.jpg",
        profile: "https://en.wikipedia.org/wiki/Travis_Head"
    },

    {
        name: "MARNUS LABUSCHAGNE",
        country: "AUSTRALIA",
        role: "BATSMAN",
        jersey: 33,
        image: "5166.jpg",
        profile: "https://en.wikipedia.org/wiki/Marnus_Labuschagne"
    },

    {
        name: "CAMERON GREEN",
        country: "AUSTRALIA",
        role: "ALL-ROUNDER",
        jersey: 28,
        image: "3green-bat.jpg",
        profile: "https://en.wikipedia.org/wiki/Cameron_Green"
    },

    {
        name: "GLENN MAXWELL",
        country: "AUSTRALIA",
        role: "ALL-ROUNDER",
        jersey: 32,
        image: "images.jpg",
        profile: "https://en.wikipedia.org/wiki/Glenn_Maxwell"
    },

    {
        name: "MITCHELL MARSH",
        country: "AUSTRALIA",
        role: "ALL-ROUNDER",
        jersey: 8,
        image: "mitchell-marsh-10_10_2023.jpg",
        profile: "https://en.wikipedia.org/wiki/Mitchell_Marsh"
    },

    {
        name: "PAT CUMMINS",
        country: "AUSTRALIA",
        role: "BOWLER",
        jersey: 30,
        image: "b17aa-17039107400579-1920.jpg.webp",
        profile: "https://en.wikipedia.org/wiki/Pat_Cummins"
    },

    {
        name: "MITCHELL STARC",
        country: "AUSTRALIA",
        role: "BOWLER",
        jersey: 56,
        image: "20250909174088708862-original-min-1024x683.jpg.jpg",
        profile: "https://en.wikipedia.org/wiki/Mitchell_Starc"
    },

    {
        name: "JOSH HAZLEWOOD",
        country: "AUSTRALIA",
        role: "BOWLER",
        jersey: 38,
        image: "408035.6.jpg",
        profile: "https://en.wikipedia.org/wiki/Josh_Hazlewood"
    },

    {
        name: "ALEX CAREY",
        country: "AUSTRALIA",
        role: "WICKETKEEPER",
        jersey: 4,
        image: "63706.jpg",
        profile: "https://en.wikipedia.org/wiki/Alex_Carey"
    },

    {
        name: "JOSH INGLIS",
        country: "AUSTRALIA",
        role: "WICKETKEEPER",
        jersey: 32,
        image: "65893.jpg",
        profile: "https://en.wikipedia.org/wiki/Josh_Inglis"
    },

    {
        name: "NATHAN LYON",
        country: "AUSTRALIA",
        role: "BOWLER",
        jersey: 67,
        image: "3076.jpg",
        profile: "https://en.wikipedia.org/wiki/Nathan_Lyon"
    },


    // =====================================================
    // ENGLAND - 12 PLAYERS
    // =====================================================

    {
        name: "JOE ROOT",
        country: "ENGLAND",
        role: "BATSMAN",
        jersey: 66,
        image: "Joe-Root-scaled.jpg",
        profile: "https://en.wikipedia.org/wiki/Joe_Root"
    },

    {
        name: "HARRY BROOK",
        country: "ENGLAND",
        role: "BATSMAN",
        jersey: 88,
        image: "3375.jpg",
        profile: "https://en.wikipedia.org/wiki/Harry_Brook"
    },

    {
        name: "BEN DUCKETT",
        country: "ENGLAND",
        role: "BATSMAN",
        jersey: 17,
        image: "1542.jpg",
        profile: "https://en.wikipedia.org/wiki/Ben_Duckett"
    },

    {
        name: "JAMIE SMITH",
        country: "ENGLAND",
        role: "WICKETKEEPER",
        jersey: 38,
        image: "images (1).jpg",
        profile: "https://en.wikipedia.org/wiki/Jamie_Smith_(cricketer)"
    },

    {
        name: "JOS BUTTLER",
        country: "ENGLAND",
        role: "WICKETKEEPER",
        jersey: 63,
        image: "4a655b514a0538cc8b0bb6e7b1cabefeY29udGVudHNlYXJjaGFwaSwxNjY4MzE5MTg5-2.69703789.jpg",
        profile: "https://en.wikipedia.org/wiki/Jos_Buttler"
    },

    {
        name: "BEN STOKES",
        country: "ENGLAND",
        role: "ALL-ROUNDER",
        jersey: 55,
        image: "1154.jpg",
        profile: "https://en.wikipedia.org/wiki/Ben_Stokes"
    },

    {
        name: "LIAM LIVINGSTONE",
        country: "ENGLAND",
        role: "ALL-ROUNDER",
        jersey: 23,
        image: "63940.jpg",
        profile: "https://en.wikipedia.org/wiki/Liam_Livingstone"
    },

    {
        name: "SAM CURRAN",
        country: "ENGLAND",
        role: "ALL-ROUNDER",
        jersey: 58,
        image: "1782711946050_Sam-Curran.jpg",
        profile: "https://en.wikipedia.org/wiki/Sam_Curran"
    },

    {
        name: "JOFRA ARCHER",
        country: "ENGLAND",
        role: "BOWLER",
        jersey: 22,
        image: "64254.jpg",
        profile: "https://en.wikipedia.org/wiki/Jofra_Archer"
    },

    {
        name: "ADIL RASHID",
        country: "ENGLAND",
        role: "BOWLER",
        jersey: 95,
        image: "Adil-Rashid.jpg",
        profile: "https://en.wikipedia.org/wiki/Adil_Rashid"
    },

    {
        name: "MARK WOOD",
        country: "ENGLAND",
        role: "BOWLER",
        jersey: 33,
        image: "2749.jpg",
        profile: "https://en.wikipedia.org/wiki/Mark_Wood_(cricketer)"
    },

    {
        name: "CHRIS WOAKES",
        country: "ENGLAND",
        role: "ALL-ROUNDER",
        jersey: 19,
        image: "967.jpg",
        profile: "https://en.wikipedia.org/wiki/Chris_Woakes"
    },


    // =====================================================
    // NEW ZEALAND - 12 PLAYERS
    // =====================================================

    {
        name: "KANE WILLIAMSON",
        country: "NEW-ZEALAND",
        role: "BATSMAN",
        jersey: 22,
        image: "kane-Williamson.jpg",
        profile: "https://en.wikipedia.org/wiki/Kane_Williamson"
    },

    {
        name: "DEVON CONWAY",
        country: "NEW-ZEALAND",
        role: "WICKETKEEPER",
        jersey: 88,
        image: "13177.jpg",
        profile: "https://en.wikipedia.org/wiki/Devon_Conway"
    },

    {
        name: "DARYL MITCHELL",
        country: "NEW-ZEALAND",
        role: "ALL-ROUNDER",
        jersey: 75,
        image: "57444.jpg",
        profile: "https://en.wikipedia.org/wiki/Daryl_Mitchell_(cricketer)"
    },

    {
        name: "RACHIN RAVINDRA",
        country: "NEW-ZEALAND",
        role: "ALL-ROUNDER",
        jersey: 8,
        image: "qtkeohbknbmyzqjjcyzq.jpg.avif",
        profile: "https://en.wikipedia.org/wiki/Rachin_Ravindra"
    },

    {
        name: "MITCHELL SANTNER",
        country: "NEW-ZEALAND",
        role: "ALL-ROUNDER",
        jersey: 74,
        image: "57903.jpg",
        profile: "https://en.wikipedia.org/wiki/Mitchell_Santner"
    },

    {
        name: "GLENN PHILLIPS",
        country: "NEW-ZEALAND",
        role: "BATSMAN",
        jersey: 23,
        image: "65295.jpg",
        profile: "https://en.wikipedia.org/wiki/Glenn_Phillips_(cricketer)"
    },

    {
        name: "TOM LATHAM",
        country: "NEW-ZEALAND",
        role: "WICKETKEEPER",
        jersey: 48,
        image: "10167.jpg",
        profile: "https://en.wikipedia.org/wiki/Tom_Latham"
    },

    {
        name: "TRENT BOULT",
        country: "NEW-ZEALAND",
        role: "BOWLER",
        jersey: 18,
        image: "OIP.jpg",
        profile: "https://en.wikipedia.org/wiki/Trent_Boult"
    },

    {
        name: "TIM SOUTHEE",
        country: "NEW-ZEALAND",
        role: "BOWLER",
        jersey: 38,
        image: "4235.jpg",
        profile: "https://en.wikipedia.org/wiki/Tim_Southee"
    },

    {
        name: "MATT HENRY",
        country: "NEW-ZEALAND",
        role: "BOWLER",
        jersey: 21,
        image: "60544.jpg",
        profile: "https://en.wikipedia.org/wiki/Matt_Henry_(cricketer)"
    },

    {
        name: "LOCKIE FERGUSON",
        country: "NEW-ZEALAND",
        role: "BOWLER",
        jersey: 69,
        image: "63719.jpg",
        profile: "https://en.wikipedia.org/wiki/Lockie_Ferguson"
    },

    {
        name: "AJAZ PATEL",
        country: "NEW-ZEALAND",
        role: "BOWLER",
        jersey: 24,
        image: "ajaz-patel.jpg",
        profile: "https://en.wikipedia.org/wiki/Ajaz_Patel"
    },


    // =====================================================
    // SOUTH AFRICA - 12 PLAYERS
    // =====================================================

    {
        name: "TEMBA BAVUMA",
        country: "SOUTH-AFRICA",
        role: "BATSMAN",
        jersey: 11,
        image: "12492.jpg",
        profile: "https://en.wikipedia.org/wiki/Temba_Bavuma"
    },

    {
        name: "AIDEN MARKRAM",
        country: "SOUTH-AFRICA",
        role: "ALL-ROUNDER",
        jersey: 4,
        image: "64219.jpg",
        profile: "https://en.wikipedia.org/wiki/Aiden_Markram"
    },

    {
        name: "REEZA HENDRICKS",
        country: "SOUTH-AFRICA",
        role: "BATSMAN",
        jersey: 15,
        image: "669-camedia.jpg",
        profile: "https://en.wikipedia.org/wiki/Reeza_Hendricks"
    },

    {
        name: "DAVID MILLER",
        country: "SOUTH-AFRICA",
        role: "BATSMAN",
        jersey: 10,
        image: "388018.5.jpg",
        profile: "https://en.wikipedia.org/wiki/David_Miller_(cricketer)"
    },

    {
        name: "HEINRICH KLAASEN",
        country: "SOUTH-AFRICA",
        role: "WICKETKEEPER",
        jersey: 45,
        image: "images (2).jpg",
        profile: "https://en.wikipedia.org/wiki/Heinrich_Klaasen"
    },

    {
        name: "QUINTON DE KOCK",
        country: "SOUTH-AFRICA",
        role: "WICKETKEEPER",
        jersey: 12,
        image: "28035.jpg",
        profile: "https://en.wikipedia.org/wiki/Quinton_de_Kock"
    },

    {
        name: "KAGISO RABADA",
        country: "SOUTH-AFRICA",
        role: "BOWLER",
        jersey: 25,
        image: "images (3).jpg",
        profile: "https://en.wikipedia.org/wiki/Kagiso_Rabada"
    },

    {
        name: "ANRICH NORTJE",
        country: "SOUTH-AFRICA",
        role: "BOWLER",
        jersey: 72,
        image: "63641.jpg",
        profile: "https://en.wikipedia.org/wiki/Anrich_Nortje"
    },

    {
        name: "KESHAV MAHARAJ",
        country: "SOUTH-AFRICA",
        role: "BOWLER",
        jersey: 16,
        image: "48607.jpg",
        profile: "https://en.wikipedia.org/wiki/Keshav_Maharaj"
    },

    {
        name: "LUNGI NGIDI",
        country: "SOUTH-AFRICA",
        role: "BOWLER",
        jersey: 22,
        image: "images (4).jpg",
        profile: "https://en.wikipedia.org/wiki/Lungi_Ngidi"
    },

    {
        name: "MARCO JANSEN",
        country: "SOUTH-AFRICA",
        role: "ALL-ROUNDER",
        jersey: 70,
        image: "69409.jpg",
        profile: "https://en.wikipedia.org/wiki/Marco_Jansen"
    },

    {
        name: "GERALD COETZEE",
        country: "SOUTH-AFRICA",
        role: "BOWLER",
        jersey: 62,
        image: "64225.jpg",
        profile: "https://en.wikipedia.org/wiki/Gerald_Coetzee"
    },


    // =====================================================
    // PAKISTAN - 12 PLAYERS
    // =====================================================

    {
        name: "BABAR AZAM",
        country: "PAKISTAN",
        role: "BATSMAN",
        jersey: 56,
        image: "59429.jpg",
        profile: "https://en.wikipedia.org/wiki/Babar_Azam"
    },

    {
        name: "MOHAMMAD RIZWAN",
        country: "PAKISTAN",
        role: "WICKETKEEPER",
        jersey: 16,
        image: "20286.jpg",
        profile: "https://en.wikipedia.org/wiki/Mohammad_Rizwan"
    },

    {
        name: "FAKHAR ZAMAN",
        country: "PAKISTAN",
        role: "BATSMAN",
        jersey: 39,
        image: "57492.jpg",
        profile: "https://en.wikipedia.org/wiki/Fakhar_Zaman"
    },

    {
        name: "IMAM-UL-HAQ",
        country: "PAKISTAN",
        role: "BATSMAN",
        jersey: 26,
        image: "63084.jpg",
        profile: "https://en.wikipedia.org/wiki/Imam-ul-Haq"
    },

    {
        name: "SAUD SHAKEEL",
        country: "PAKISTAN",
        role: "BATSMAN",
        jersey: 14,
        image: "64153.jpg",
        profile: "https://en.wikipedia.org/wiki/Saud_Shakeel"
    },

    {
        name: "SHAHEEN AFRIDI",
        country: "PAKISTAN",
        role: "BOWLER",
        jersey: 10,
        image: "66833.jpg",
        profile: "https://en.wikipedia.org/wiki/Shaheen_Shah_Afridi"
    },

    {
        name: "HARIS RAUF",
        country: "PAKISTAN",
        role: "BOWLER",
        jersey: 97,
        image: "70326.jpg",
        profile: "https://en.wikipedia.org/wiki/Haris_Rauf"
    },

    {
        name: "NASEEM SHAH",
        country: "PAKISTAN",
        role: "BOWLER",
        jersey: 71,
        image: "69956.jpg",
        profile: "https://en.wikipedia.org/wiki/Naseem_Shah"
    },

    {
        name: "SHADAB KHAN",
        country: "PAKISTAN",
        role: "ALL-ROUNDER",
        jersey: 7,
        image: "65739.jpg",
        profile: "https://en.wikipedia.org/wiki/Shadab_Khan"
    },

    {
        name: "FAHEEM ASHRAF",
        country: "PAKISTAN",
        role: "ALL-ROUNDER",
        jersey: 13,
        image: "64321.jpg",
        profile: "https://en.wikipedia.org/wiki/Faheem_Ashraf"
    },

    {
        name: "ABRAR AHMED",
        country: "PAKISTAN",
        role: "BOWLER",
        jersey: 50,
        image: "66884.jpg",
        profile: "https://en.wikipedia.org/wiki/Abrar_Ahmed"
    },

    {
        name: "AZAM KHAN",
        country: "PAKISTAN",
        role: "WICKETKEEPER",
        jersey: 63,
        image: "Azam Khan 2.jpg",
        profile: "https://en.wikipedia.org/wiki/Azam_Khan_(cricketer)"
    },


    // =====================================================
    // SRI LANKA - 12 PLAYERS
    // =====================================================

    {
        name: "PATHUM NISSANKA",
        country: "SRI-LANKA",
        role: "BATSMAN",
        jersey: 18,
        image: "66368.jpg",
        profile: "https://en.wikipedia.org/wiki/Pathum_Nissanka"
    },

    {
        name: "KUSAL MENDIS",
        country: "SRI-LANKA",
        role: "WICKETKEEPER",
        jersey: 13,
        image: "63882.jpg",
        profile: "https://en.wikipedia.org/wiki/Kusal_Mendis"
    },

    {
        name: "KUSAL PERERA",
        country: "SRI-LANKA",
        role: "WICKETKEEPER",
        jersey: 23,
        image: "images (5).jpg",
        profile: "https://en.wikipedia.org/wiki/Kusal_Perera"
    },

    {
        name: "CHARITH ASALANKA",
        country: "SRI-LANKA",
        role: "BATSMAN",
        jersey: 15,
        image: "65038.jpg",
        profile: "https://en.wikipedia.org/wiki/Charith_Asalanka"
    },

    {
        name: "DINESH CHANDIMAL",
        country: "SRI-LANKA",
        role: "WICKETKEEPER",
        jersey: 23,
        image: "skysports-dinesh-chandimal_4568708.jpg",
        profile: "https://en.wikipedia.org/wiki/Dinesh_Chandimal"
    },

    {
        name: "WANINDU HASARANGA",
        country: "SRI-LANKA",
        role: "ALL-ROUNDER",
        jersey: 49,
        image: "3164-camedia.jpg",
        profile: "https://en.wikipedia.org/wiki/Wanindu_Hasaranga"
    },

    {
        name: "DASUN SHANAKA",
        country: "SRI-LANKA",
        role: "ALL-ROUNDER",
        jersey: 6,
        image: "59067.jpg",
        profile: "https://en.wikipedia.org/wiki/Dasun_Shanaka"
    },

    {
        name: "MAHEESH THEEKSHANA",
        country: "SRI-LANKA",
        role: "BOWLER",
        jersey: 61,
        image: "8171-camedia.jpg",
        profile: "https://en.wikipedia.org/wiki/Maheesh_Theekshana"
    },

    {
        name: "DUSHMANTHA CHAMEERA",
        country: "SRI-LANKA",
        role: "BOWLER",
        jersey: 56,
        image: "595-camedia.jpg",
        profile: "https://en.wikipedia.org/wiki/Dushmantha_Chameera"
    },

    {
        name: "DILSHAN MADUSHANKA",
        country: "SRI-LANKA",
        role: "BOWLER",
        jersey: 47,
        image: "4034-camedia.jpg",
        profile: "https://en.wikipedia.org/wiki/Dilshan_Madushanka"
    },

    {
        name: "LAHIRU KUMARA",
        country: "SRI-LANKA",
        role: "BOWLER",
        jersey: 83,
        image: "1354-camedia.jpg",
        profile: "https://en.wikipedia.org/wiki/Lahiru_Kumara"
    },

    {
        name: "DUNITH WELLALAGE",
        country: "SRI-LANKA",
        role: "ALL-ROUNDER",
        jersey: 49,
        image: "8550-camedia.jpg",
        profile: "https://en.wikipedia.org/wiki/Dunith_Wellalage"
    },


    // =====================================================
    // BANGLADESH - 12 PLAYERS
    // =====================================================

    {
        name: "LITTON DAS",
        country: "BANGLADESH",
        role: "WICKETKEEPER",
        jersey: 16,
        image: "63206.jpg",
        profile: "https://en.wikipedia.org/wiki/Litton_Das"
    },

    {
        name: "MUSHFIQUR RAHIM",
        country: "BANGLADESH",
        role: "WICKETKEEPER",
        jersey: 15,
        image: "3693.jpg",
        profile: "https://en.wikipedia.org/wiki/Mushfiqur_Rahim"
    },

    {
        name: "NAJMUL HOSSAIN SHANTO",
        country: "BANGLADESH",
        role: "BATSMAN",
        jersey: 99,
        image: "63872.jpg",
        profile: "https://en.wikipedia.org/wiki/Najmul_Hossain_Shanto"
    },

    {
        name: "TOWHID HRIDOY",
        country: "BANGLADESH",
        role: "BATSMAN",
        jersey: 77,
        image: "67719.jpg",
        profile: "https://en.wikipedia.org/wiki/Towhid_Hridoy"
    },

    {
        name: "MAHMUDUL HASAN JOY",
        country: "BANGLADESH",
        role: "BATSMAN",
        jersey: 17,
        image: "70291.jpg",
        profile: "https://en.wikipedia.org/wiki/Mahmudul_Hasan_Joy"
    },

    {
        name: "SHAKIB AL HASAN",
        country: "BANGLADESH",
        role: "ALL-ROUNDER",
        jersey: 75,
        image: "1696748634550_Shakib-Al-Hasan.jpg",
        profile: "https://en.wikipedia.org/wiki/Shakib_Al_Hasan"
    },

    {
        name: "MEHEDY HASAN MIRAZ",
        country: "BANGLADESH",
        role: "ALL-ROUNDER",
        jersey: 15,
        image: "63875.jpg",
        profile: "https://en.wikipedia.org/wiki/Mehidy_Hasan_Miraz"
    },

    {
        name: "MUSTAFIZUR RAHMAN",
        country: "BANGLADESH",
        role: "BOWLER",
        jersey: 90,
        image: "63881.jpg",
        profile: "https://en.wikipedia.org/wiki/Mustafizur_Rahman"
    },

    {
        name: "TASKIN AHMED",
        country: "BANGLADESH",
        role: "BOWLER",
        jersey: 3,
        image: "58314.jpg",
        profile: "https://en.wikipedia.org/wiki/Taskin_Ahmed"
    },

    {
        name: "TAIJUL ISLAM",
        country: "BANGLADESH",
        role: "BOWLER",
        jersey: 9,
        image: "35665.jpg",
        profile: "https://en.wikipedia.org/wiki/Taijul_Islam"
    },

    {
        name: "TANZIM HASAN SAKIB",
        country: "BANGLADESH",
        role: "BOWLER",
        jersey: 68,
        image: "70921.jpg",
        profile: "https://en.wikipedia.org/wiki/Tanzim_Hasan_Sakib"
    },

    {
        name: "RISHAD HOSSAIN",
        country: "BANGLADESH",
        role: "BOWLER",
        jersey: 7,
        image: "70203.jpg",
        profile: "https://en.wikipedia.org/wiki/Rishad_Hossain"
    }

];


// =====================================================
// PLAYER DESCRIPTIONS
// =====================================================

const playerInfo = {

    "SHUBMAN GILL": {
        description: "Shubman Gill is an elegant Indian batter known for his excellent timing, technique and stylish stroke play.",
        batting: "Right-hand batsman",
        bowling: "Right-arm off break",
        speciality: "Elegant stroke play"
    },

    "VIRAT KOHLI": {
        description: "Virat Kohli is one of India's most celebrated batters, known for consistency, intensity and chasing targets.",
        batting: "Right-hand batsman",
        bowling: "Right-arm medium",
        speciality: "Chasing and consistency"
    },

    "ROHIT SHARMA": {
        description: "Rohit Sharma is a world-class Indian opening batter famous for powerful stroke play and six hitting.",
        batting: "Right-hand batsman",
        bowling: "Right-arm off break",
        speciality: "Six hitting"
    },

    "YASHASVI JAISWAL": {
        description: "Yashasvi Jaiswal is a talented Indian opening batter known for attacking cricket and confident stroke play.",
        batting: "Left-hand batsman",
        bowling: "Right-arm leg break",
        speciality: "Aggressive opening batting"
    },

    "SHREYAS IYER": {
        description: "Shreyas Iyer is an Indian batter known for his ability to play spin and his strong middle-order batting.",
        batting: "Right-hand batsman",
        bowling: "Right-arm leg break",
        speciality: "Middle-order batting"
    },

    "JASPRIT BUMRAH": {
        description: "Jasprit Bumrah is an elite Indian fast bowler famous for his accuracy, yorkers and unusual bowling action.",
        batting: "Right-hand batsman",
        bowling: "Right-arm fast",
        speciality: "Yorkers and death bowling"
    },

    "MOHAMMED SIRAJ": {
        description: "Mohammed Siraj is an Indian fast bowler known for his energy, swing bowling and ability to take wickets.",
        batting: "Right-hand batsman",
        bowling: "Right-arm fast",
        speciality: "Swing and wicket taking"
    },

    "KULDEEP YADAV": {
        description: "Kuldeep Yadav is an Indian wrist spinner known for his variations and ability to trouble batters.",
        batting: "Left-hand batsman",
        bowling: "Left-arm wrist spin",
        speciality: "Spin variations"
    },

    "HARDIK PANDYA": {
        description: "Hardik Pandya is an Indian all-rounder known for powerful batting and useful fast bowling.",
        batting: "Right-hand batsman",
        bowling: "Right-arm fast-medium",
        speciality: "Power hitting"
    },

    "RAVINDRA JADEJA": {
        description: "Ravindra Jadeja is an outstanding Indian all-rounder known for batting, left-arm spin and exceptional fielding.",
        batting: "Left-hand batsman",
        bowling: "Left-arm orthodox",
        speciality: "All-round ability and fielding"
    },

    "RISHABH PANT": {
        description: "Rishabh Pant is an attacking Indian wicketkeeper-batter known for fearless stroke play.",
        batting: "Left-hand batsman",
        bowling: "Right-arm medium",
        speciality: "Attacking wicketkeeper batting"
    },

    "SANJU SAMSON": {
        description: "Sanju Samson is an Indian wicketkeeper-batter known for clean hitting and attractive stroke play.",
        batting: "Right-hand batsman",
        bowling: "Right-arm medium",
        speciality: "Power hitting"
    },


    "STEVE SMITH": {
        description: "Steve Smith is an Australian batter famous for his unconventional technique and remarkable consistency.",
        batting: "Right-hand batsman",
        bowling: "Right-arm leg break",
        speciality: "Test batting"
    },

    "TRAVIS HEAD": {
        description: "Travis Head is an aggressive Australian batter known for attacking bowling and performing in important matches.",
        batting: "Left-hand batsman",
        bowling: "Right-arm off break",
        speciality: "Aggressive batting"
    },

    "MARNUS LABUSCHAGNE": {
        description: "Marnus Labuschagne is an Australian batter known for concentration, patience and long innings.",
        batting: "Right-hand batsman",
        bowling: "Right-arm leg break",
        speciality: "Long innings"
    },

    "CAMERON GREEN": {
        description: "Cameron Green is an Australian all-rounder who combines tall fast bowling with powerful batting.",
        batting: "Right-hand batsman",
        bowling: "Right-arm fast-medium",
        speciality: "Batting and bowling"
    },

    "GLENN MAXWELL": {
        description: "Glenn Maxwell is an explosive Australian all-rounder famous for innovative shots and useful off-spin.",
        batting: "Right-hand batsman",
        bowling: "Right-arm off break",
        speciality: "Innovative stroke play"
    },

    "MITCHELL MARSH": {
        description: "Mitchell Marsh is an Australian all-rounder known for powerful batting and medium-fast bowling.",
        batting: "Right-hand batsman",
        bowling: "Right-arm medium-fast",
        speciality: "Power hitting"
    },

    "PAT CUMMINS": {
        description: "Pat Cummins is an Australian fast bowler known for pace, accuracy and leadership.",
        batting: "Right-hand batsman",
        bowling: "Right-arm fast",
        speciality: "Fast bowling"
    },

    "MITCHELL STARC": {
        description: "Mitchell Starc is an Australian left-arm fast bowler famous for pace, swing and dangerous yorkers.",
        batting: "Left-hand batsman",
        bowling: "Left-arm fast",
        speciality: "Pace and swing"
    },

    "JOSH HAZLEWOOD": {
        description: "Josh Hazlewood is an Australian fast bowler known for accuracy, discipline and consistent line and length.",
        batting: "Right-hand batsman",
        bowling: "Right-arm fast",
        speciality: "Accuracy"
    },

    "ALEX CAREY": {
        description: "Alex Carey is an Australian wicketkeeper-batter known for reliable wicketkeeping and useful batting.",
        batting: "Left-hand batsman",
        bowling: "Right-arm medium",
        speciality: "Wicketkeeping"
    },

    "JOSH INGLIS": {
        description: "Josh Inglis is an Australian wicketkeeper-batter known for aggressive batting and quick scoring.",
        batting: "Right-hand batsman",
        bowling: "Right-arm medium",
        speciality: "Attacking batting"
    },

    "NATHAN LYON": {
        description: "Nathan Lyon is an Australian off-spinner known for his consistency and ability to take wickets in Test cricket.",
        batting: "Right-hand batsman",
        bowling: "Right-arm off spin",
        speciality: "Off-spin bowling"
    },


    "JOE ROOT": {
        description: "Joe Root is an English batting great known for technique, consistency and excellent shot selection.",
        batting: "Right-hand batsman",
        bowling: "Right-arm off break",
        speciality: "Technically strong batting"
    },

    "HARRY BROOK": {
        description: "Harry Brook is an exciting English batter known for aggressive stroke play and attacking cricket.",
        batting: "Right-hand batsman",
        bowling: "Right-arm medium",
        speciality: "Aggressive batting"
    },

    "BEN DUCKETT": {
        description: "Ben Duckett is an English opening batter known for attacking shots and positive cricket.",
        batting: "Left-hand batsman",
        bowling: "Right-arm off break",
        speciality: "Opening batting"
    },

    "JAMIE SMITH": {
        description: "Jamie Smith is an English wicketkeeper-batter known for his aggressive batting and wicketkeeping skills.",
        batting: "Right-hand batsman",
        bowling: "Right-arm medium",
        speciality: "Wicketkeeping"
    },

    "JOS BUTTLER": {
        description: "Jos Buttler is an explosive English wicketkeeper-batter famous for innovative shots and power hitting.",
        batting: "Right-hand batsman",
        bowling: "Right-arm medium",
        speciality: "Power hitting"
    },

    "BEN STOKES": {
        description: "Ben Stokes is an English all-rounder famous for match-winning performances under pressure.",
        batting: "Left-hand batsman",
        bowling: "Right-arm fast-medium",
        speciality: "Match-winning performances"
    },

    "LIAM LIVINGSTONE": {
        description: "Liam Livingstone is an explosive English all-rounder known for powerful batting and useful spin bowling.",
        batting: "Right-hand batsman",
        bowling: "Right-arm leg break",
        speciality: "Power hitting"
    },

    "SAM CURRAN": {
        description: "Sam Curran is an English all-rounder known for left-handed batting and left-arm seam bowling.",
        batting: "Left-hand batsman",
        bowling: "Left-arm medium-fast",
        speciality: "All-round ability"
    },

    "JOFRA ARCHER": {
        description: "Jofra Archer is an English fast bowler known for pace, bounce and accuracy.",
        batting: "Right-hand batsman",
        bowling: "Right-arm fast",
        speciality: "Fast bowling"
    },

    "ADIL RASHID": {
        description: "Adil Rashid is an English leg-spinner known for variations and wicket-taking ability.",
        batting: "Right-hand batsman",
        bowling: "Right-arm leg spin",
        speciality: "Leg spin"
    },

    "MARK WOOD": {
        description: "Mark Wood is an English fast bowler known for extreme pace and aggressive bowling.",
        batting: "Right-hand batsman",
        bowling: "Right-arm fast",
        speciality: "Express pace"
    },

    "CHRIS WOAKES": {
        description: "Chris Woakes is an English all-rounder known for accurate seam bowling and dependable batting.",
        batting: "Right-hand batsman",
        bowling: "Right-arm fast-medium",
        speciality: "Seam bowling"
    },


    "KANE WILLIAMSON": {
        description: "Kane Williamson is a technically gifted New Zealand batter known for calmness and excellent shot selection.",
        batting: "Right-hand batsman",
        bowling: "Right-arm off break",
        speciality: "Calm batting"
    },

    "DEVON CONWAY": {
        description: "Devon Conway is a New Zealand wicketkeeper-batter known for consistency and elegant stroke play.",
        batting: "Left-hand batsman",
        bowling: "Right-arm medium",
        speciality: "Consistent batting"
    },

    "DARYL MITCHELL": {
        description: "Daryl Mitchell is a New Zealand all-rounder known for powerful batting and useful medium pace.",
        batting: "Right-hand batsman",
        bowling: "Right-arm medium",
        speciality: "All-round ability"
    },

    "RACHIN RAVINDRA": {
        description: "Rachin Ravindra is a talented New Zealand all-rounder known for left-handed batting and spin bowling.",
        batting: "Left-hand batsman",
        bowling: "Left-arm orthodox",
        speciality: "Batting and spin"
    },

    "MITCHELL SANTNER": {
        description: "Mitchell Santner is a New Zealand all-rounder known for accurate left-arm spin and dependable batting.",
        batting: "Left-hand batsman",
        bowling: "Left-arm orthodox",
        speciality: "Spin bowling"
    },

    "GLENN PHILLIPS": {
        description: "Glenn Phillips is an explosive New Zealand batter known for power hitting and athletic fielding.",
        batting: "Right-hand batsman",
        bowling: "Right-arm off break",
        speciality: "Power hitting"
    },

    "TOM LATHAM": {
        description: "Tom Latham is a dependable New Zealand wicketkeeper-batter known for consistency and technique.",
        batting: "Left-hand batsman",
        bowling: "Right-arm medium",
        speciality: "Consistency"
    },

    "TRENT BOULT": {
        description: "Trent Boult is a world-class New Zealand left-arm fast bowler known for swing and early wickets.",
        batting: "Left-hand batsman",
        bowling: "Left-arm fast",
        speciality: "Swing bowling"
    },

    "TIM SOUTHEE": {
        description: "Tim Southee is an experienced New Zealand fast bowler known for swing and clever variations.",
        batting: "Right-hand batsman",
        bowling: "Right-arm fast-medium",
        speciality: "Swing bowling"
    },

    "MATT HENRY": {
        description: "Matt Henry is a New Zealand fast bowler known for accuracy, movement and wicket-taking ability.",
        batting: "Right-hand batsman",
        bowling: "Right-arm fast-medium",
        speciality: "Seam bowling"
    },

    "LOCKIE FERGUSON": {
        description: "Lockie Ferguson is a New Zealand fast bowler known for express pace and aggressive bowling.",
        batting: "Right-hand batsman",
        bowling: "Right-arm fast",
        speciality: "Express pace"
    },

    "AJAZ PATEL": {
        description: "Ajaz Patel is a New Zealand left-arm spinner known for his accuracy and wicket-taking ability.",
        batting: "Left-hand batsman",
        bowling: "Left-arm orthodox",
        speciality: "Spin bowling"
    },


    "TEMBA BAVUMA": {
        description: "Temba Bavuma is a South African batter known for his leadership and technically sound batting.",
        batting: "Right-hand batsman",
        bowling: "Right-arm medium",
        speciality: "Technically strong batting"
    },

    "AIDEN MARKRAM": {
        description: "Aiden Markram is a South African all-rounder known for elegant batting and useful off-spin.",
        batting: "Right-hand batsman",
        bowling: "Right-arm off break",
        speciality: "All-round ability"
    },

    "REEZA HENDRICKS": {
        description: "Reeza Hendricks is a South African batter known for timing and reliable top-order batting.",
        batting: "Right-hand batsman",
        bowling: "Right-arm medium",
        speciality: "Top-order batting"
    },

    "DAVID MILLER": {
        description: "David Miller is a powerful South African batter famous for aggressive stroke play and finishing matches.",
        batting: "Left-hand batsman",
        bowling: "Right-arm off break",
        speciality: "Finishing"
    },

    "HEINRICH KLAASEN": {
        description: "Heinrich Klaasen is a South African wicketkeeper-batter known for powerful hitting, especially against spin.",
        batting: "Right-hand batsman",
        bowling: "Right-arm medium",
        speciality: "Power hitting"
    },

    "QUINTON DE KOCK": {
        description: "Quinton de Kock is an explosive South African wicketkeeper-batter known for aggressive opening batting.",
        batting: "Left-hand batsman",
        bowling: "Right-arm medium",
        speciality: "Opening batting"
    },

    "KAGISO RABADA": {
        description: "Kagiso Rabada is a world-class South African fast bowler known for pace, aggression and wicket taking.",
        batting: "Right-hand batsman",
        bowling: "Right-arm fast",
        speciality: "Fast bowling"
    },

    "ANRICH NORTJE": {
        description: "Anrich Nortje is a South African fast bowler known for high pace and aggressive bowling.",
        batting: "Right-hand batsman",
        bowling: "Right-arm fast",
        speciality: "Pace"
    },

    "KESHAV MAHARAJ": {
        description: "Keshav Maharaj is a South African left-arm spinner known for accuracy and control.",
        batting: "Left-hand batsman",
        bowling: "Left-arm orthodox",
        speciality: "Spin bowling"
    },

    "LUNGI NGIDI": {
        description: "Lungi Ngidi is a South African fast bowler known for accuracy and effective seam bowling.",
        batting: "Right-hand batsman",
        bowling: "Right-arm fast-medium",
        speciality: "Seam bowling"
    },

    "MARCO JANSEN": {
        description: "Marco Jansen is a tall South African all-rounder known for left-arm pace and powerful batting.",
        batting: "Left-hand batsman",
        bowling: "Left-arm fast",
        speciality: "All-round ability"
    },

    "GERALD COETZEE": {
        description: "Gerald Coetzee is a South African fast bowler known for pace, aggression and wicket taking.",
        batting: "Right-hand batsman",
        bowling: "Right-arm fast",
        speciality: "Fast bowling"
    },


    "BABAR AZAM": {
        description: "Babar Azam is a Pakistani batting star known for elegant stroke play, timing and consistency.",
        batting: "Right-hand batsman",
        bowling: "Right-arm off break",
        speciality: "Elegant batting"
    },

    "MOHAMMAD RIZWAN": {
        description: "Mohammad Rizwan is a Pakistani wicketkeeper-batter known for determination and consistency.",
        batting: "Right-hand batsman",
        bowling: "Right-arm medium",
        speciality: "Consistency"
    },

    "FAKHAR ZAMAN": {
        description: "Fakhar Zaman is an aggressive Pakistani opening batter known for powerful stroke play.",
        batting: "Left-hand batsman",
        bowling: "Slow left-arm orthodox",
        speciality: "Aggressive batting"
    },

    "IMAM-UL-HAQ": {
        description: "Imam-ul-Haq is a Pakistani left-handed batter known for patience and strong top-order batting.",
        batting: "Left-hand batsman",
        bowling: "Right-arm medium",
        speciality: "Top-order batting"
    },

    "SAUD SHAKEEL": {
        description: "Saud Shakeel is a Pakistani batter known for patience, technique and strong defensive skills.",
        batting: "Left-hand batsman",
        bowling: "Right-arm off break",
        speciality: "Technique"
    },

    "SHAHEEN AFRIDI": {
        description: "Shaheen Afridi is a Pakistani left-arm fast bowler known for pace, swing and early wickets.",
        batting: "Left-hand batsman",
        bowling: "Left-arm fast",
        speciality: "Swing bowling"
    },

    "HARIS RAUF": {
        description: "Haris Rauf is a Pakistani fast bowler known for high pace and aggressive bowling.",
        batting: "Right-hand batsman",
        bowling: "Right-arm fast",
        speciality: "Pace"
    },

    "NASEEM SHAH": {
        description: "Naseem Shah is a Pakistani fast bowler known for pace, swing and impressive control.",
        batting: "Right-hand batsman",
        bowling: "Right-arm fast",
        speciality: "Fast bowling"
    },

    "SHADAB KHAN": {
        description: "Shadab Khan is a Pakistani all-rounder known for leg-spin bowling, athletic fielding and useful batting.",
        batting: "Right-hand batsman",
        bowling: "Right-arm leg spin",
        speciality: "Leg spin and fielding"
    },

    "FAHEEM ASHRAF": {
        description: "Faheem Ashraf is a Pakistani all-rounder known for left-handed batting and left-arm seam bowling.",
        batting: "Left-hand batsman",
        bowling: "Left-arm medium-fast",
        speciality: "All-round ability"
    },

    "ABRAR AHMED": {
        description: "Abrar Ahmed is a Pakistani spinner known for his variations and wicket-taking ability.",
        batting: "Right-hand batsman",
        bowling: "Right-arm leg spin",
        speciality: "Spin variations"
    },

    "AZAM KHAN": {
        description: "Azam Khan is a Pakistani wicketkeeper-batter known for powerful hitting.",
        batting: "Right-hand batsman",
        bowling: "Right-arm medium",
        speciality: "Power hitting"
    },


    "PATHUM NISSANKA": {
        description: "Pathum Nissanka is a Sri Lankan opening batter known for consistency and strong stroke play.",
        batting: "Right-hand batsman",
        bowling: "Right-arm medium",
        speciality: "Opening batting"
    },

    "KUSAL MENDIS": {
        description: "Kusal Mendis is a Sri Lankan wicketkeeper-batter known for attacking stroke play.",
        batting: "Right-hand batsman",
        bowling: "Right-arm off break",
        speciality: "Attacking batting"
    },

    "KUSAL PERERA": {
        description: "Kusal Perera is a Sri Lankan wicketkeeper-batter known for aggressive batting and powerful shots.",
        batting: "Left-hand batsman",
        bowling: "Right-arm medium",
        speciality: "Power hitting"
    },

    "CHARITH ASALANKA": {
        description: "Charith Asalanka is a Sri Lankan batter known for elegant stroke play and middle-order batting.",
        batting: "Left-hand batsman",
        bowling: "Right-arm off break",
        speciality: "Middle-order batting"
    },

    "DINESH CHANDIMAL": {
        description: "Dinesh Chandimal is an experienced Sri Lankan wicketkeeper-batter known for technique and consistency.",
        batting: "Right-hand batsman",
        bowling: "Right-arm medium",
        speciality: "Consistency"
    },

    "WANINDU HASARANGA": {
        description: "Wanindu Hasaranga is a Sri Lankan all-rounder famous for his leg-spin bowling and useful batting.",
        batting: "Right-hand batsman",
        bowling: "Right-arm leg spin",
        speciality: "Leg spin"
    },

    "DASUN SHANAKA": {
        description: "Dasun Shanaka is a Sri Lankan all-rounder known for powerful batting and medium-fast bowling.",
        batting: "Right-hand batsman",
        bowling: "Right-arm medium-fast",
        speciality: "Power hitting"
    },

    "MAHEESH THEEKSHANA": {
        description: "Maheesh Theekshana is a Sri Lankan spinner known for accuracy and variations.",
        batting: "Right-hand batsman",
        bowling: "Right-arm off spin",
        speciality: "Spin variations"
    },

    "DUSHMANTHA CHAMEERA": {
        description: "Dushmantha Chameera is a Sri Lankan fast bowler known for pace and aggressive bowling.",
        batting: "Right-hand batsman",
        bowling: "Right-arm fast",
        speciality: "Fast bowling"
    },

    "DILSHAN MADUSHANKA": {
        description: "Dilshan Madushanka is a Sri Lankan left-arm fast bowler known for swing and wicket taking.",
        batting: "Left-hand batsman",
        bowling: "Left-arm fast",
        speciality: "Swing bowling"
    },

    "LAHIRU KUMARA": {
        description: "Lahiru Kumara is a Sri Lankan fast bowler known for pace and aggressive bowling.",
        batting: "Right-hand batsman",
        bowling: "Right-arm fast",
        speciality: "Pace"
    },

    "DUNITH WELLALAGE": {
        description: "Dunith Wellalage is a young Sri Lankan all-rounder known for left-arm spin and useful batting.",
        batting: "Left-hand batsman",
        bowling: "Left-arm orthodox",
        speciality: "All-round ability"
    },


    "LITTON DAS": {
        description: "Litton Das is a Bangladeshi wicketkeeper-batter known for elegant stroke play and attacking batting.",
        batting: "Right-hand batsman",
        bowling: "Right-arm medium",
        speciality: "Wicketkeeping and batting"
    },

    "MUSHFIQUR RAHIM": {
        description: "Mushfiqur Rahim is an experienced Bangladeshi wicketkeeper-batter known for consistency.",
        batting: "Right-hand batsman",
        bowling: "Right-arm medium",
        speciality: "Consistency"
    },

    "NAJMUL HOSSAIN SHANTO": {
        description: "Najmul Hossain Shanto is a Bangladeshi top-order batter known for patience and technique.",
        batting: "Left-hand batsman",
        bowling: "Right-arm medium",
        speciality: "Top-order batting"
    },

    "TOWHID HRIDOY": {
        description: "Towhid Hridoy is a Bangladeshi batter known for aggressive stroke play and attacking cricket.",
        batting: "Right-hand batsman",
        bowling: "Right-arm medium",
        speciality: "Aggressive batting"
    },

    "MAHMUDUL HASAN JOY": {
        description: "Mahmudul Hasan Joy is a Bangladeshi opening batter known for patience and solid technique.",
        batting: "Right-hand batsman",
        bowling: "Right-arm off break",
        speciality: "Opening batting"
    },

    "SHAKIB AL HASAN": {
        description: "Shakib Al Hasan is one of Bangladesh's greatest all-rounders, known for batting and left-arm spin.",
        batting: "Left-hand batsman",
        bowling: "Left-arm orthodox",
        speciality: "All-round ability"
    },

    "MEHEDY HASAN MIRAZ": {
        description: "Mehedy Hasan Miraz is a Bangladeshi all-rounder known for off-spin bowling and useful batting.",
        batting: "Right-hand batsman",
        bowling: "Right-arm off spin",
        speciality: "Off-spin bowling"
    },

    "MUSTAFIZUR RAHMAN": {
        description: "Mustafizur Rahman is a Bangladeshi left-arm fast bowler famous for cutters and variations.",
        batting: "Left-hand batsman",
        bowling: "Left-arm fast-medium",
        speciality: "Cutters"
    },

    "TASKIN AHMED": {
        description: "Taskin Ahmed is a Bangladeshi fast bowler known for pace and aggressive bowling.",
        batting: "Right-hand batsman",
        bowling: "Right-arm fast",
        speciality: "Fast bowling"
    },

    "TAIJUL ISLAM": {
        description: "Taijul Islam is a Bangladeshi left-arm spinner known for accuracy and wicket taking.",
        batting: "Left-hand batsman",
        bowling: "Left-arm orthodox",
        speciality: "Spin bowling"
    },

    "TANZIM HASAN SAKIB": {
        description: "Tanzim Hasan Sakib is a Bangladeshi fast bowler known for pace and seam bowling.",
        batting: "Right-hand batsman",
        bowling: "Right-arm fast-medium",
        speciality: "Seam bowling"
    },

    "RISHAD HOSSAIN": {
        description: "Rishad Hossain is a Bangladeshi leg-spinner known for variations and attacking bowling.",
        batting: "Right-hand batsman",
        bowling: "Right-arm leg spin",
        speciality: "Leg spin"
    }

};


// =====================================================
// COUNTRY SECTIONS
// =====================================================

const sections = {

    "INDIA": document.getElementById("INDIA"),
    "AUSTRALIA": document.getElementById("AUSTRALIA"),
    "ENGLAND": document.getElementById("ENGLAND"),
    "NEW-ZEALAND": document.getElementById("NEW-ZEALAND"),
    "SOUTH-AFRICA": document.getElementById("SOUTH-AFRICA"),
    "PAKISTAN": document.getElementById("PAKISTAN"),
    "SRI-LANKA": document.getElementById("SRI-LANKA"),
    "BANGLADESH": document.getElementById("BANGLADESH")

};


// =====================================================
// HTML ELEMENTS
// =====================================================

const countrySelect = document.getElementById("countrySelect");
const roleSelect = document.getElementById("roleselect");
const playerSearch = document.getElementById("playerSearch");


// =====================================================
// FAVORITES
// =====================================================

let favorites =
    JSON.parse(localStorage.getItem("favoritePlayers")) || [];


// =====================================================
// DISPLAY PLAYERS
// =====================================================

function displayPlayers(playerList) {

    Object.values(sections).forEach(function(section) {

        if (section) {
            section.innerHTML = "";
        }

    });


    playerList.forEach(function(player) {

        const section = sections[player.country];

        if (!section) {
            return;
        }


        const card = document.createElement("div");

        card.classList.add("player-card");


        const isFavorite =
            favorites.includes(player.name);


        card.innerHTML = `
            <h3>${player.name}</h3>

            <img
                src="${player.image}"
                width="250"
                height="250"
                alt="${player.name}"
                onerror="this.src='https://via.placeholder.com/250?text=No+Image'"
            >

            <ul>
                <li>Country: ${player.country}</li>
                <li>Role: ${player.role}</li>
                <li>Jersey No: ${player.jersey}</li>
            </ul>

            <button class="favorite-btn">
                ${isFavorite ? "★ Remove Favorite" : "☆ Add to Favorites"}
            </button>

            <a
                href="${player.profile}"
                target="_blank"
                class="profile-btn"
            >
                View Full Profile
            </a>
        `;


        // =================================================
        // FAVORITE BUTTON
        // =================================================

        const favoriteButton =
            card.querySelector(".favorite-btn");


        favoriteButton.addEventListener("click", function(event) {

            event.stopPropagation();


            if (favorites.includes(player.name)) {

                favorites = favorites.filter(function(name) {
                    return name !== player.name;
                });

                favoriteButton.textContent =
                    "☆ Add to Favorites";

            } else {

                favorites.push(player.name);

                favoriteButton.textContent =
                    "★ Remove Favorite";

            }


            localStorage.setItem(
                "favoritePlayers",
                JSON.stringify(favorites)
            );

        });


        // =================================================
        // PROFILE BUTTON
        // =================================================

        const profileButton =
            card.querySelector(".profile-btn");


        profileButton.addEventListener("click", function(event) {

            event.stopPropagation();

        });


        // =================================================
        // CARD CLICK
        // =================================================

        card.addEventListener("click", function() {

            openPlayerModal(player);

        });


        section.appendChild(card);

    });

}


// =====================================================
// FILTER PLAYERS
// =====================================================

function applyFilters() {

    const selectedCountry =
        countrySelect.value;

    const selectedRole =
        roleSelect.value;

    const searchText =
        playerSearch.value.toLowerCase().trim();


    const filteredPlayers =
        players.filter(function(player) {

            const countryMatches =
                selectedCountry === "ALL" ||
                player.country === selectedCountry;


            const roleMatches =
                selectedRole === "ALL" ||
                player.role === selectedRole;


            const searchMatches =
                player.name
                    .toLowerCase()
                    .includes(searchText);


            return (
                countryMatches &&
                roleMatches &&
                searchMatches
            );

        });


    displayPlayers(filteredPlayers);

}


// =====================================================
// COUNTRY FILTER
// =====================================================

countrySelect.addEventListener("change", function() {

    applyFilters();


    const country =
        countrySelect.value;


    if (country === "ALL") {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        return;

    }


    const section =
        document.getElementById(country);


    if (section) {

        section.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }

});


// =====================================================
// ROLE FILTER
// =====================================================

roleSelect.addEventListener("change", function() {

    applyFilters();

});


// =====================================================
// SEARCH
// =====================================================

playerSearch.addEventListener("input", function() {

    applyFilters();

});


// =====================================================
// MODAL ELEMENTS
// =====================================================

const playerModal =
    document.getElementById("playerModal");

const closeModal =
    document.getElementById("closeModal");

const modalImage =
    document.getElementById("modalImage");

const modalName =
    document.getElementById("modalName");

const modalCountry =
    document.getElementById("modalCountry");

const modalRole =
    document.getElementById("modalRole");

const modalJersey =
    document.getElementById("modalJersey");

const modalDescription =
    document.getElementById("modalDescription");

const modalProfile =
    document.getElementById("modalProfile");

const modalBatting =
    document.getElementById("modalBatting");

const modalBowling =
    document.getElementById("modalBowling");

const modalSpeciality =
    document.getElementById("modalSpeciality");


// =====================================================
// OPEN PLAYER MODAL
// =====================================================

function openPlayerModal(player) {

    modalImage.src =
        player.image;

    modalImage.alt =
        player.name;


    modalName.textContent =
        player.name;


    modalCountry.textContent =
        "Country: " + player.country;


    modalRole.textContent =
        "Role: " + player.role;


    modalJersey.textContent =
        "Jersey No: " + player.jersey;


    const info =
        playerInfo[player.name];


    if (info) {

        modalDescription.textContent =
            info.description;

        modalBatting.textContent =
            "🏏 Batting Style: " + info.batting;

        modalBowling.textContent =
            "🎯 Bowling Style: " + info.bowling;

        modalSpeciality.textContent =
            "⭐ Speciality: " + info.speciality;

    } else {

        modalDescription.textContent =
            player.name +
            " is a cricket player representing " +
            player.country + ".";

        modalBatting.textContent =
            "🏏 Batting Style: Information unavailable";

        modalBowling.textContent =
            "🎯 Bowling Style: Information unavailable";

        modalSpeciality.textContent =
            "⭐ Speciality: Information unavailable";

    }


    modalProfile.href =
        player.profile;


    playerModal.style.display =
        "flex";

}


// =====================================================
// CLOSE MODAL BUTTON
// =====================================================

closeModal.addEventListener("click", function() {

    playerModal.style.display =
        "none";

});


// =====================================================
// CLOSE MODAL OUTSIDE
// =====================================================

window.addEventListener("click", function(event) {

    if (event.target === playerModal) {

        playerModal.style.display =
            "none";

    }

});


// =====================================================
// DARK / LIGHT MODE
// =====================================================

const themeToggle =
    document.getElementById("themeToggle");


themeToggle.addEventListener("click", function() {

    document.body.classList.toggle("light-mode");


    if (
        document.body.classList.contains("light-mode")
    ) {

        themeToggle.textContent =
            "☀️ Light Mode";

    } else {

        themeToggle.textContent =
            "🌙 Dark Mode";

    }

});


// =====================================================
// DISPLAY ALL PLAYERS ON PAGE LOAD
// =====================================================

displayPlayers(players);s