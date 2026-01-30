// products.js

// =======================
// منتجات الرجالي
// =======================
const menProducts = {
  invictus: {
  name: "انفكتوس",
  brand: "Paco Rabanne",
  simulation: "محاكاة (بديل للأصلي)",
  img: "men img/Invictus.svg",
  description: "عطر رائع بخلفيات عطرية منعشة وثبات عالي.",
  sizes: [
    { size: "30 مل", price: 175 },
    { size: "50 مل", price: 225 },
    { size: "100 مل", price: 350 }
  ],

  descriptionDetails: {
    main: "Invictus Rabanne عطر خشبي - مائي للرجال . Invictus صدر عام 2013. Invictus من توقيع Veronique Nyberg, Anne Flipo, Olivier Polge و Dominique Ropion. إفتتاحية العطر نسيم البحر, الجريب فروت و الماندرين (اليوسفي); قلب العطر ورق اللورا و الياسمين; قاعدة العطر تتكون من الآمبرغريس, أخشاب الغاياك, طحلب البلوط (طحلب السنديان) و الباتشولي.",

    top: [
      { name: "الجريب فروت", img: "notes/invictus/t.76 (1).svg" },
      { name: "الماندرين (اليوسفي)", img: "notes/invictus/t.82.svg" },
      { name: "نسيم البحر", img: "notes/invictus/n.svg" }
    ],

    middle: [
      { name: "الياسمين", img: "notes/invictus/t.14.svg" },
      { name: "ورق اللورا", img: "notes/invictus/t.128.svg" }
    ],

    base: [
      { name: "الآمبرغريس", img: "notes/invictus/الآمبرغريس.svg" },
      { name: "خشب الغاياك", img: "notes/invictus/أخشاب الغاياك.svg" },
      { name: "طحلب البلوط (طحلب السنديان)", img: "notes/invictus/طحلب البلوط (طحلب السنديان).svg" },
      { name: "الباتشولي", img: "notes/invictus/الباتشولي.svg" }
    ]
  },

  rating: 3
},
  invictusElixir: {
  name: "انفكتوس أليكسير",
  brand: "Paco Rabanne",
  simulation: "محاكاة (بديل للأصلي)",
  img: "men img/Invictus Victory Elixir.svg",
  description: "نسخة أعمق وأكثر تركيزاً من انفكتوس، مع لمسات دافئة وغامضة.",
  sizes: [
    { size: "30 مل", price: 175 },
    { size: "50 مل", price: 225 },
    { size: "100 مل", price: 350 }
  ],

  descriptionDetails: {
    main: "Invictus Victory Elixir Rabanne عطر شرقي - خشبي للرجال . Invictus Victory Elixir صدر عام 2023. Invictus Victory Elixir من توقيع Domitille Michalon Bertier, Anne Flipo و Nicolas Beaulieu. إفتتاحية العطر الخزامي, الهيل و الفلفل الأسود; قلب العطر البخور و الباتشولي; قاعدة العطر تتكون من الفانيليا و حبوب التونكا.",

    top: [
      { name: "الخزامي", img: "notes/Invictus Elixir/الخزامي.svg" },
      { name: "الهيل", img: "notes/Invictus Elixir/الهيل.svg" },
      { name: "الفلفل الأسود", img: "notes/Invictus Elixir/الفلفل الأسود.svg" }
    ],

    middle: [
      { name: "البخور", img: "notes/Invictus Elixir/البخور.svg" },
      { name: "الباتشولي", img: "notes/Invictus Elixir/الباتشولي.svg" }
    ],

    base: [
      { name: "الفانيليا", img: "notes/Invictus Elixir/الفانيليا.svg" },
      { name: "حبوب التونكا", img: "notes/Invictus Elixir/حبوب التونكا.svg" }
    ]
  },

  rating: 3 // نجوم مضيئة من 1 إلى 5
},
  omarDiab: {
  name: "عمرو دياب",
  brand: "Amr Diab",
  simulation: "محاكاة (بديل للأصلي)",
  img: "men img/Amr Diab.svg",
  description: "عطر مستوحى من أناقة النجم عمرو دياب، يجمع بين الحيوية والفخامة.",
  sizes: [
    { size: "30 مل", price: 175 },
    { size: "50 مل", price: 225 },
    { size: "100 مل", price: 350 }
  ],

  descriptionDetails: {
    main: "عطر خشبي زهري مستوحى اسمه من تعبير فرنسي لوصف الرجل اللامع والبليغ، ويمنحك رائحة منعشة وعصرية، مع مزيج الخزامي والعنبر ونجيل الهند.",

    top: [
      { name: "إكليل الجبل", img: "notes/amr diab/إكليل الجبل.webp" },
      { name: "الخزامي", img: "notes/amr diab/الخزامي.svg" },
      { name: "زهر البرتقال", img: "notes/amr diab/زهر البرتقال.svg" },
      { name: "البرتقال المر", img: "notes/amr diab/البرتقال المر.webp" }
    ],

    middle: [
      { name: "الياسمين", img: "notes/amr diab/الياسمين.svg" },
      { name: "زهور إبرة الراعي", img: "notes/amr diab/زهور إبرة الراعي.svg" },
      { name: "المريميه", img: "notes/amr diab/المريميه.webp" },
      { name: "الجلبانوم", img: "notes/amr diab/الجلبانوم.svg" }
    ],

    base: [
      { name: "العنبر", img: "notes/amr diab/العنبر.png" },
      { name: "خشب الصندل", img: "notes/amr diab/خشب الصندل.svg" },
      { name: "خشب البلوط", img: "notes/amr diab/خشب البلوط.svg" },
      { name: "نجيل الهند", img: "notes/amr diab/نجيل الهند.webp" },
      { name: "خشب الأرز", img: "notes/amr diab/خشب الأرز.svg" }
    ]
  },

  rating: 5 // نجوم مضيئة من 1 إلى 5
},
  blackLexus: {
  name: "بلاك ليكزس",
  brand: "Rabanne",
  simulation: "محاكاة (بديل للأصلي)",
  img: "men img/Black XS L'exces.svg",
  description: "عطر فاخر مع نفحات غامضة وقوية تناسب المناسبات المسائية.",
  sizes: [
    { size: "30 مل", price: 175 },
    { size: "50 مل", price: 225 },
    { size: "100 مل", price: 350 }
  ],

  descriptionDetails: {
    main: "عطر خشبي - أروماتك للرجال . Black XS L'Exces for Him صدر عام 2012. Fabrice Pellegrin قام بتوقيع هذا العطر. إفتتاحية العطر الليمون و الخزامي; قلب العطر السيبرول (الناجراموثا) و نسيم البحر; قاعدة العطر تتكون من العنبر و الباتشولي.",

    top: [
      { name: "الليمون", img: "notes/Black XS L'Exces/الليمون.svg" },
      { name: "الخزامي", img: "notes/Black XS L'Exces/الخزامي.svg" },
    ],

    middle: [
      { name: "السيبرول (الناجراموثا)", img: "notes/Black XS L'Exces/السيبرول (الناجراموثا).svg" },
      { name: "نسيم البحر", img: "notes/Black XS L'Exces/نسيم البحر.svg" },
    ],

    base: [
      { name: "الباتشولي", img: "notes/Black XS L'Exces/الباتشولي.svg" },
      { name: "العنبر", img: "notes/Black XS L'Exces/العنبر.svg" }
    ]
  },

  rating: 3 // نجوم مضيئة من 1 إلى 5
},
 bmw: {
  name: "بي ام دبليو",
  brand: "BMW Perfumes",
  simulation: "محاكاة (بديل للأصلي)",
  img: "men img/BMW.svg",
  description: "عطر رياضي فاخر من BMW، يبرز الأناقة والقوة في نفس الوقت.",
  sizes: [
    { size: "30 مل", price: 175 },
    { size: "50 مل", price: 225 },
    { size: "100 مل", price: 350 }
  ],

  descriptionDetails: {
    main: "عطر BMW M 1985 من   هو عطر خشبي عطري للجنسين. هذا عطر جديد، تم إطلاقه عام 2025. ابتكره ألكسندرا مونيه وفرانك فولكل. تتكون مقدمة العطر من التين والليمون الأخضر والإليمي؛ وقلبه من خشب البلوط الصافي وبلسم الجرجان والسرو؛ وقاعدته من السيبريول وخشب الغاياك وخشب الأرز.",

    top: [
      { name: "ثمار التين", img: "notes/bmw/ثمار التين.svg" },
      { name: "الليم - الزيزفون", img: "notes/bmw/الليم - الزيزفون.svg" },
      { name: "الإليمي", img: "notes/bmw/الإليمي.svg" }
    ],

    middle: [
      { name: "الأخشاب الناعمة", img: "notes/bmw/الأخشاب الناعمة.svg" },
      { name: "بلسم غرجان", img: "notes/bmw/بلسم غرجان.svg" },
      { name: "أشجار السرو", img: "notes/bmw/أشجار السرو.svg" }
    ],

    base: [
      { name: "خشب الأرز", img: "notes/bmw/خشب الأرز.svg" },
      { name: "السيبرول (الناجراموثا)", img: "notes/bmw/السيبرول (الناجراموثا).svg" },
      { name: "أخشاب الغاياك", img: "notes/bmw/أخشاب الغاياك.svg" }
    ]
  },

  rating: 3 // نجوم مضيئة من 1 إلى 5
},
  mercedes: {
  name: "مارسيدس",
  brand: "Mercedes Perfumes",
  simulation: "محاكاة (بديل للأصلي)",
  img: "men img/Mercedes.svg",
  description: "عطر كلاسيكي أنيق مع لمسات فاخرة، يعكس شخصية قوية وواثقة.",
  sizes: [
    { size: "30 مل", price: 175 },
    { size: "50 مل", price: 225 },
    { size: "100 مل", price: 350 }
  ],

  descriptionDetails: {
    main: "عطر مرسيدس بنز كلوب من مرسيدس بنز هو عطر خشبي عطري للرجال. أُطلق عطر مرسيدس بنز كلوب عام ٢٠١٣. مصمم هذا العطر هو أوليفييه كريسب. تتكون مقدمة العطر من الراوند والحمضيات؛ وقلب العطر من التوابل وتوت العرعر ونفحات مائية والهيل؛ وقاعدة العطر من الأمبروكسان والباتشولي ونفحات خشبية وحبوب التونكا.",

    top: [
      { name: "الراوند", img: "notes/mercedes/الراوند.svg" },
      { name: "الحمضيات", img: "notes/mercedes/الحمضيات.svg" },
    ],

    middle: [
      { name: "التوابل", img: "notes/mercedes/التوابل.svg" },
      { name: "توت العرعر", img: "notes/mercedes/توت العرعر.svg" },
      { name: "رائحه الماء", img: "notes/mercedes/رائحه الماء.svg" },
      { name: "الهيل", img: "notes/mercedes/الهيل.svg" }
    ],

    base: [
      { name: "الأخشاب", img: "notes/mercedes/الأخشاب.svg" },
      { name: "الأمبروكسان", img: "notes/mercedes/الأمبروكسان.svg" },
      { name: "الباتشولي", img: "notes/mercedes/الباتشولي.svg" },
      { name: "حبوب التونكا", img: "notes/mercedes/حبوب التونكا.svg" }

    ]
  },

  rating: 4 // نجوم مضيئة من 1 إلى 5
},
  ckOne: {
  name: "سي كي وان",
  brand: "Calvin Klein",
  simulation: "محاكاة (بديل للأصلي)",
  img: "men img/CK One.svg",
  description: "عطر منعش وخفيف للجنسين، يجمع بين الحيوية والبساطة.",
  sizes: [
    { size: "30 مل", price: 175 },
    { size: "50 مل", price: 225 },
    { size: "100 مل", price: 350 }
  ],

  descriptionDetails: {
    main: "عطر سي كي وان من كالفن كلاين هو عطر حمضي عطري للجنسين اطلق عام ١٩٩٤. ابتكره ألبرتو موريلاس وهاري فريمونت. تتكون مقدمة العطر من الليمون، والنفحات الخضراء، والبرغموت، واليوسفي، والأناناس، والهيل، والبابايا؛ أما قلب العطر فيتكون من زنبق الوادي، والياسمين، والبنفسج، والورد، وجوزة الطيب، والفريزيا، وجذر السوسن؛ بينما تتكون قاعدة العطر من النفحات الخضراء، والمسك، وخشب الأرز، والشاي الأخضر، وخشب الصندل، وطحلب السنديان، والعنبر.",

    top: [
      { name: "الليمون", img: "notes/CK One/الليمون.svg" },
      { name: "النوتات الخضراء", img: "notes/CK One/النوتات الخضراء.svg" },
      { name: "البرغموت", img: "notes/CK One/البرغموت.svg" },
      { name: "الماندرين (اليوسفي)", img: "notes/CK One/الماندرين (اليوسفي).svg" },
      { name: "الأناناس", img: "notes/CK One/الأناناس.svg" },
      { name: "الهيل", img: "notes/CK One/الهيل.svg" },
      { name: "البابايا", img: "notes/CK One/البابايا.svg" }
    ],

    middle: [
      { name: "زنابق الوادي", img: "notes/CK One/زنابق الوادي.svg" },
      { name: "الياسمين", img: "notes/CK One/الياسمين.svg" },
      { name: "البنفسج", img: "notes/CK One/البنفسج.svg" },
      { name: "الورد", img: "notes/CK One/الورد.svg" },
      { name: "جوزه الطيب", img: "notes/CK One/جوزه الطيب.svg" },
      { name: "الفريزيا", img: "notes/CK One/الفريزيا.svg" },
      { name: "جذور السوسن", img: "notes/CK One/جذور السوسن.svg" }
    ],

    base: [
      { name: "النوتات الخضراء", img: "notes/CK One/النوتات الخضراء.svg" },
      { name: "المسك", img: "notes/CK One/المسك.svg" },
      { name: "خشب الأرز", img: "notes/CK One/خشب الأرز.svg" },
      { name: "الشاي الأخضر", img: "notes/CK One/الشاي الأخضر.svg" },
      { name: "خشب الصندل", img: "notes/CK One/خشب الصندل.svg" },
      { name: "طحلب البلوط (طحلب السنديان)", img: "notes/CK One/طحلب البلوط (طحلب السنديان).svg" },
      { name: "العنبر", img: "notes/CK One/العنبر.svg" },

    ]
  },

  rating: 4 // نجوم مضيئة من 1 إلى 5
},
  oneMillionLucky: {
  name: "وان مليون لاكي",
  brand: "Paco Rabanne",
  simulation: "محاكاة (بديل للأصلي)",
  img: "men img/1 Million Lucky Rabanne.svg",
  description: "عطر جذاب وحيوي برائحة مبتكرة وخلفيات خشبية.",
  sizes: [
    { size: "30 مل", price: 175 },
    { size: "50 مل", price: 225 },
    { size: "100 مل", price: 350 }
  ],

  descriptionDetails: {
    main: "عطر ون مليون لاكي من رابان هو عطر خشبي للرجال. أُطلق عطر ون مليون لاكي عام ٢٠١٨. ابتكرت هذا العطر ناتالي غراسيا-سيتو. تتكون مقدمة العطر من البرقوق، ونفحات الأوزون، والجريب فروت، والبرغموت؛ أما قلب العطر فيتكون من البندق، والعسل، وخشب الأرز، وخشب الكشمير، وزهر البرتقال، والياسمين؛ بينما تتكون قاعدة العطر من خشب العنبر، والباتشولي، ونجيل الهند، وطحلب البلوط.",

    top: [
      { name: "الجريب فروت", img: "notes/1 Million Lucky/الجريب فروت.svg" },
      { name: "البرقوق", img: "notes/1 Million Lucky/البرقوق.svg" },
      { name: "وتلاحظ Ozonic", img: "notes/1 Million Lucky/وتلاحظ Ozonic.svg" },
      { name: "البرغموت", img: "notes/1 Million Lucky/البرغموت.svg" },
    ],

    middle: [
      { name: "البندق", img: "notes/1 Million Lucky/البندق.svg" },
      { name: "العسل", img: "notes/1 Million Lucky/العسل.svg" },
      { name: "أخشاب الكشمير", img: "notes/1 Million Lucky/أخشاب الكشمير.svg" },
    ],

    base: [
      { name: "الباتشولي", img: "notes/1 Million Lucky/الباتشولي.svg" },
      { name: "نجيل الهند", img: "notes/1 Million Lucky/نجيل الهند.svg" },
      { name: "طحلب البلوط (طحلب السنديان)", img: "notes/1 Million Lucky/طحلب البلوط (طحلب السنديان).svg" }

    ]
  },

  rating: 4 // نجوم مضيئة من 1 إلى 5
},
  dunhillDesireRed: {
  name: "دنهل ديزاير ريد",
  brand: "Alfred Dunhill",
  simulation: "محاكاة (بديل للأصلي)",
  img: "men img/Dunhill Desire Red.svg",
  description: "عطر مثير ومميز للرجال المحبين للروائح الحارة.",
  sizes: [
    { size: "30 مل", price: 175 },
    { size: "50 مل", price: 225 },
    { size: "100 مل", price: 350 }
  ],

  descriptionDetails: {
    main: "من ألفريد دانهيل هو عطر شرقي خشبي للرجال. أُطلق هذا العطر عام 2000، وهو من ابتكار العطّار ميشيل ألمايراك. تتكون مقدمة العطر من التفاح والليمون والبرغموت وزهر البرتقال، وقلبه من الورد وخشب الساج والباتشولي، وقاعدته من الفانيليا والمسك.",

    top: [
      { name: "التفاح", img: "notes/Dunhill Desire Red/التفاح.svg" },
      { name: "الليمون", img: "notes/Dunhill Desire Red/الليمون.svg" },
      { name: "البرغموت", img: "notes/Dunhill Desire Red/البرغموت.svg" },
      { name: "زهر البرتقال", img: "notes/Dunhill Desire Red/زهر البرتقال.svg" }
    ],

    middle: [
      { name: "الورد", img: "notes/Dunhill Desire Red/الورد.svg" },
      { name: "خشب الساج", img: "notes/Dunhill Desire Red/خشب الساج.svg" },
      { name: "الباتشولي", img: "notes/Dunhill Desire Red/الباتشولي.svg" },
    ],

    base: [
      { name: "الفانيليا", img: "notes/Dunhill Desire Red/الفانيليا.svg" },
      { name: "المسك", img: "notes/Dunhill Desire Red/المسك.svg" },
    ]
  },

  rating: 4 // نجوم مضيئة من 1 إلى 5
},
  champion: {
  name: "شامبيون",
  brand: "Davidoff",
  simulation: "محاكاة (بديل للأصلي)",
  img: "men img/Champion.svg",
  description: "عطر رياضي منعش وعصري يناسب الحياة اليومية.",
  sizes: [
    { size: "30 مل", price: 175 },
    { size: "50 مل", price: 225 },
    { size: "100 مل", price: 350 }
  ],

  descriptionDetails: {
    main: "عطر تشامبيون من دافيدوف هو عطر خشبي عطري للرجال. أُطلق تشامبيون عام ٢٠١٠. مصمم هذا العطر هو أوريليان غيشارد. تتكون مقدمة العطر من البرغموت والليمون؛ وقلبه من المريمية والغالابانوم؛ وقاعدته من طحلب السنديان وخشب الأرز.",

    top: [
      { name: "الليمون", img: "notes/champion/الليمون.svg" },
      { name: "البرغموت", img: "notes/champion/البرغموت.svg" },
          ],

    middle: [
      { name: "المريمية", img: "notes/champion/المريمية.svg" },
      { name: "الغلابانوم", img: "notes/champion/الغلابانوم.svg" }
    ],

    base: [
      { name: "طحلب البلوط (طحلب السنديان)", img: "notes/champion/طحلب البلوط (طحلب السنديان).svg" },
      { name: "خشب الأرز", img: "notes/champion/خشب الأرز.svg" },
      
    ]
  },

  rating: 4
},
  badBoy: {
  name: "باد بوي",
  brand: "Carolina Herrera",
  simulation: "محاكاة (بديل للأصلي)",
  img: "men img/Bad Boy.svg",
  description: "عطر قوي وجريء مع نفحات شرقية وخشبية.",
  sizes: [
    { size: "30 مل", price: 175 },
    { size: "50 مل", price: 225 },
    { size: "100 مل", price: 350 }
  ],

  descriptionDetails: {
    main: "عطر باد بوي من كارولينا هيريرا هو عطر شرقي حار للرجال. أُطلق باد بوي عام ٢٠١٩. ابتكره كوينتين بيش ولويز تيرنر. تتكون مقدمة العطر من الفلفل الأبيض والبرغموت والفلفل الوردي؛ وقلب العطر من خشب الأرز والمريمية؛ وقاعدة العطر من حبوب التونكا والكاكاو.",

    top: [
      { name: "الفلفل الأبيض", img: "notes/Bad Boy/الفلفل الأبيض.svg" },
      { name: "البرغموت", img: "notes/Bad Boy/البرغموت.svg" },
      { name: "الفلفل الوردي", img: "notes/Bad Boy/الفلفل الوردي.svg" }
    ],

    middle: [
      { name: "خشب الأرز", img: "notes/Bad Boy/خشب الأرز.svg" },
      { name: "المريمية", img: "notes/Bad Boy/المريمية.svg" }
    ],

    base: [
      { name: "الكاكاو", img: "notes/Bad Boy/الكاكاو.svg" },
      { name: "حبوب التونكا", img: "notes/Bad Boy/حبوب التونكا.svg" },
      
    ]
  },

  rating: 5
},
  alTramal: {
  name: "الترا ميل",
  brand: "Jean Paul Gaultier",
  simulation: "محاكاة (بديل للأصلي)",
  img: "men img/Ultra Male.svg",
  description: "عطر جذاب برائحة قوية وفريدة، مستوحى من شخصية الرجل الواثق.",
  sizes: [
    { size: "30 مل", price: 175 },
    { size: "50 مل", price: 225 },
    { size: "100 مل", price: 350 }
  ],

  descriptionDetails: {
    main: "عطر ألترا ميل من جان بول غوتييه هو عطر شرقي فوجير للرجال. أُطلق ألترا ميل عام ٢٠١٥. مصمم هذا العطر هو فرانسيس كوركدجيان. تتكون مقدمة العطر من الكمثرى والخزامى والنعناع والبرغموت والليمون؛ أما قلب العطر فيتكون من القرفة والمريمية والكراوية؛ بينما تتكون قاعدة العطر من قشر الفانيليا السوداء والعنبر والباتشولي وخشب الأرز.",

    top: [
      { name: "الكمثري", img: "notes/altramal/الكمثري.svg" },
      { name: "الليمون", img: "notes/altramal/الليمون.svg" },
      { name: "الخزامي", img: "notes/altramal/الخزامي.svg" },
      { name: "البرغموت", img: "notes/altramal/البرغموت.svg" },
      { name: "النعناع", img: "notes/altramal/النعناع.svg" }
    ],

    middle: [
      { name: "القرفة", img: "notes/altramal/القرفة.svg" },
      { name: "المريمية", img: "notes/altramal/المريمية.svg" },
      { name: "الكاراوية", img: "notes/altramal/الكاراوية.svg" }
    ],

    base: [
      { name: "قشور الفانيليا السوداء", img: "notes/altramal/قشور الفانيليا السوداء.svg" },
      { name: "العنبر", img: "notes/altramal/العنبر.svg" },
      { name: "خشب الأرز", img: "notes/altramal/خشب الأرز.svg" },
      { name: "الباتشولي", img: "notes/altramal/الباتشولي.svg" }
    ]
  },

  rating: 4
},
  lomal: {
  name: "لومال",
  brand: "Jean Paul Gaultier",
  simulation: "محاكاة (بديل للأصلي)",
  img: "men img/Le Male.svg",
  description: "عطر كلاسيكي وأنيق، يتميز برائحة منعشة تدوم طويلاً.",
  sizes: [
    { size: "30 مل", price: 175 },
    { size: "50 مل", price: 225 },
    { size: "100 مل", price: 350 }
  ],

  descriptionDetails: {
    main: "عطر لومال من جان بول غوتييه هو عطر شرقي فوجير للرجال. اطلق عام ١٩٩٥. مصمم هذا العطر هو فرانسيس كوركدجيان. تتكون مقدمة العطر من الخزامى والنعناع والهيل والبرغموت والشيح؛ وقلب العطر من القرفة وزهر البرتقال والكراوية؛ وقاعدة العطر من الفانيليا وحبوب التونكا والعنبر وخشب الصندل وخشب الأرز.",

    top: [
      { name: "النعناع", img: "notes/lomal/النعناع.svg" },
      { name: "الخزامي", img: "notes/lomal/الخزامي.svg" },
      { name: "الهيل", img: "notes/lomal/الهيل.svg" },
      { name: "البرغموت", img: "notes/lomal/البرغموت.svg" },
      { name: "الشيح", img: "notes/lomal/الشيح.svg" }

    ],

    middle: [
      { name: "القرفة", img: "notes/lomal/القرفة.svg" },
      { name: "الكاراوية", img: "notes/lomal/الكاراوية.svg" },
      { name: "زهر البرتقال", img: "notes/lomal/زهر البرتقال.svg" }
    ],

    base: [
      { name: "الفانيليا", img: "notes/lomal/الفانيليا.svg" },
      { name: "خشب الصندل", img: "notes/lomal/خشب الصندل.svg" },
      { name: "العنبر", img: "notes/lomal/العنبر.svg" },
      { name: "حبوب التونكا", img: "notes/lomal/حبوب التونكا.svg" },
      { name: "خشب الأرز", img: "notes/lomal/خشب الأرز.svg" }
    ]
  },

  rating: 4
},
  sauvage: {
  name: "سوفاج",
  brand: "Dior",
  simulation: "محاكاة (بديل للأصلي)",
  img: "men img/Sauvage Dior.svg",
  description: "عطر رجولي شهير بنفحات حارة وخشبية تعكس القوة والحرية.",
  sizes: [
    { size: "30 مل", price: 200 },
    { size: "50 مل", price: 250 },
    { size: "100 مل", price: 400 }
  ],

  descriptionDetails: {
    main: "عطر سوفاج من ديور هو عطر أروماتي فوجير للرجال. أُطلق سوفاج عام ٢٠١٥. مصمم هذا العطر هو فرانسوا ديماشي. تتكون مقدمة العطر من برغموت كالابريا والفلفل؛ وقلب العطر من فلفل سيشوان، والخزامى، والفلفل الوردي، ونجيل الهند، والباتشولي، وإبرة الراعي، والإيليمي؛ وقاعدة العطر من الأمبروكسان، وخشب الأرز، واللابدانوم.",

    top: [
      { name: "البرغموت الكالابري", img: "notes/sauvage/برغموت كالابريا.svg" },
      { name: "الفلفل", img: "notes/sauvage/الفلفل.svg" }
    ],

    middle: [
      { name: "الخزامي", img: "notes/sauvage/الخزامي.svg" },
      { name: "الفلفل الوردي", img: "notes/sauvage/الفلفل الوردي.svg" },
      { name: "نجيل الهند", img: "notes/sauvage/نجيل الهند.svg" },
      { name: "فلفل سيشوان", img: "notes/sauvage/فلفل سيشوان.svg" },
      { name: "الباتشولي", img: "notes/sauvage/الباتشولي.svg" },
      { name: "إبره الراعي", img: "notes/sauvage/إبره الراعي.svg" },
      { name: "الإليمي", img: "notes/sauvage/الإليمي.svg" },
    ],

    base: [
      { name: "الأمبروكسان", img: "notes/sauvage/الأمبروكسان.svg" },
      { name: "خشب الأرز", img: "notes/sauvage/خشب الأرز.svg" },
      { name: "اللابدانوم", img: "notes/sauvage/اللابدانوم.svg" }
    ]
  },

  rating: 4
},
 voyage: {
  name: "فوياج",
  brand: "Armaf",
  simulation: "محاكاة (بديل للأصلي)",
  img: "men img/Voyage.svg",
  description: "عطر منعش وخفيف يناسب الحياة اليومية، مثالي للاستخدام اليومي والأجواء الصيفية.",
  sizes: [
    { size: "30 مل", price: 175 },
    { size: "50 مل", price: 225 },
    { size: "100 مل", price: 350 }
  ],

  descriptionDetails: {
    main: "عطر فوياج من ارماف هو عطر أروماتي فوجير للرجال اطلق في عام 2015. تتكون مقدمة العطر من الجريب فروت، والسوسن، والهيل، والمريمية؛ أما قلب العطر فيتكون من القرفة، والخزامى، وأوراق البنفسج؛ بينما تتكون قاعدة العطر من حبوب التونكا ونفحات خشبية.",

    top: [
      { name: "الجريب فروت", img: "notes/voyage/الجريب فروت.svg" },
      { name: "السوسن", img: "notes/voyage/السوسن.svg" },
      { name: "المريمية", img: "notes/voyage/المريمية.svg" },
      { name: "الهيل", img: "notes/voyage/الهيل.svg" }
    ],

    middle: [
      { name: "القرفة", img: "notes/voyage/القرفة.svg" },
      { name: "الخزامي", img: "notes/voyage/الخزامي.svg" },
      { name: "أوراق البنفسج", img: "notes/voyage/أوراق البنفسج.svg" }
    ],

    base: [
      { name: "حبوب التونكا", img: "notes/voyage/حبوب التونكا.svg" },
      { name: "الأخشاب", img: "notes/voyage/الأخشاب.svg" }
    ]
  },

  rating: 4
},
  strongerWithYou: {
  name: "سترونجر ويز يو",
  brand: "Giorgio Armani",
  simulation: "محاكاة (بديل للأصلي)",
  img: "men img/Stronger With You.svg",
  description: "عطر حلو ورومانسي بنفحات شرقية وخشبية.",
  sizes: [
    { size: "30 مل", price: 175 },
    { size: "50 مل", price: 225 },
    { size: "100 مل", price: 350 }
  ],

  descriptionDetails: {
    main: "عطر إمبوريو أرماني سترونجر وذ يو إنتنسلي من جورجيو أرماني هو عطر شرقي فوجير للرجال. أُطلق هذا العطر عام ٢٠١٩. تتكون مقدمة العطر من الفلفل الوردي والعرعر والبنفسج؛ وقلب العطر من التوفي والقرفة والخزامى والمريمية؛ وقاعدة العطر من الفانيليا والعنبر وحبوب التونكا والجلد المدبوغ.",

    top: [
      { name: "الفلفل الوردي", img: "notes/Stronger With You/الفلفل الوردي.svg" },
      { name: "العرعر", img: "notes/Stronger With You/العرعر.svg" },
      { name: "البنفسج", img: "notes/Stronger With You/البنفسج.svg" },
      
    ],

    middle: [
      { name: "الطوفي", img: "notes/Stronger With You/الطوفي.svg" },
      { name: "القرفة", img: "notes/Stronger With You/القرفة.svg" },
      { name: "الخزامي", img: "notes/Stronger With You/الخزامي.svg" },
      { name: "المريمية", img: "notes/Stronger With You/المريمية.svg" }
    ],

    base: [
      { name: "الفانيليا", img: "notes/Stronger With You/الفانيليا.svg" },
      { name: "العنبر", img: "notes/Stronger With You/العنبر.svg" },
      { name: "حبوب التونكا", img: "notes/Stronger With You/حبوب التونكا.svg" },
      { name: "جلد الغزال (الجلد المدبوغ)", img: "notes/Stronger With You/جلد الغزال (الجلد المدبوغ).svg" },
    ]
  },

  rating: 4
},
  jimmyChoo: {
  name: "جيمي شو",
  brand: "Jimmy Choo",
  simulation: "محاكاة (بديل للأصلي)",
  img: "men img/Jimmy Choo.svg",
  description: "عطر جذاب وعصري يناسب المناسبات الخاصة.",
  sizes: [
    { size: "30 مل", price: 175 },
    { size: "50 مل", price: 225 },
    { size: "100 مل", price: 350 }
  ],

  descriptionDetails: {
    main: "عطر جيمي تشو مان إنتنس من جيمي تشو هو عطر رجالي. أُطلق عطر جيمي تشو مان إنتنس عام ٢٠١٦. تتكون مقدمة العطر من الشمام والخزامى واليوسفي؛ وقلب العطر من الفلفل الأسود وإبرة الراعي والشيح؛ وقاعدة العطر من فول التونكا والباتشولي واللابدانوم.",

    top: [
      { name: "شمام", img: "notes/jimmy choo/شمام.svg" },
      { name: "الخزامي", img: "notes/jimmy choo/الخزامي.svg" },
      { name: "الماندرين (اليوسفي)", img: "notes/jimmy choo/الماندرين (اليوسفي).svg" }
    ],

    middle: [
      { name: "الفلفل الأسود", img: "notes/jimmy choo/الفلفل الأسود.svg" },
      { name: "الشيح", img: "notes/jimmy choo/الشيح.svg" },
      { name: "إبره الراعي", img: "notes/jimmy choo/إبره الراعي.svg" }
    ],

    base: [
      { name: "الباتشولي", img: "notes/jimmy choo/الباتشولي.svg" },
      { name: "حبوب التونكا", img: "notes/jimmy choo/حبوب التونكا.svg" },
      { name: "اللابدانوم", img: "notes/jimmy choo/اللابدانوم.svg" }
    ]
  },

  rating: 4
},
  tommyHilfiger: {
  name: "تومي هيل",
  brand: "Tommy Hilfiger",
  simulation: "محاكاة (بديل للأصلي)",
  img: "men img/Tommy Hilfiger.svg",
  description: "عطر أنيق بعطرية منعشة ومميزة، مثالي لكل الأوقات.",
  sizes: [
    { size: "30 مل", price: 175 },
    { size: "50 مل", price: 225 },
    { size: "100 مل", price: 350 }
  ],

  descriptionDetails: {
    main: "عطر تومي من تومي هيلفيغر هو عطر حمضي عطري للرجال. أُطلق تومي عام ١٩٩٥. ابتكره آني بوزانتيان وألبرتو موريلاس. تتكون مقدمة العطر من النعناع والبرغموت والجريب فروت والخزامى؛ وقلب العطر من تفاح جراني سميث والتوت البري والورد؛ وقاعدة العطر من زهرة القطن والصبار والعنبر.",

    top: [
      { name: "النعناع", img: "notes/tommy hilfiger/النعناع.svg" },
      { name: "البرغموت", img: "notes/tommy hilfiger/البرغموت.svg" },
      { name: "الجريب فروت", img: "notes/tommy hilfiger/الجريب فروت.svg" },
      { name: "الخزامي", img: "notes/tommy hilfiger/الخزامي.svg" }
    ],

    middle: [
      { name: "تفاح جراني سميث", img: "notes/tommy hilfiger/تفاح جراني سميث.svg" },
      { name: "التوت البري", img: "notes/tommy hilfiger/التوت البري.svg" },
      { name: "الورد", img: "notes/tommy hilfiger/الورد.svg" }
    ],

    base: [
      { name: "العنبر", img: "notes/tommy hilfiger/العنبر.svg" },
      { name: "الصبار", img: "notes/tommy hilfiger/الصبار.svg" },
      { name: "زهرة القطن", img: "notes/tommy hilfiger/زهرة القطن.svg" }
    ]
  },

  rating: 4
},
  aquaDiGio: {
  name: "اكوا دي چيُو",
  brand: "Giorgio Armani",
  simulation: "محاكاة (بديل للأصلي)",
  img: "men img/Acqua di Giò.svg",
  description: "عطر مائي منعش مستوحى من البحر والطبيعة، أيقونة رجالية لا تنتهي.",
  sizes: [
    { size: "30 مل", price: 175 },
    { size: "50 مل", price: 225 },
    { size: "100 مل", price: 350 }
  ],

  descriptionDetails: {
    main: "عطر أكوا دي جيو من جورجيو أرماني هو عطر أروماتي مائي للرجال. أُطلق أكوا دي جيو عام ١٩٩٦. ابتكره كل من ألبرتو موريلاس، وآنيك ميناردو، وكريستيان دوسولييه. تتكون مقدمة العطر من الليمون الأخضر، والليمون، والبرغموت، والياسمين، والبرتقال، واليوسفي، وزهر البرتقال؛ أما قلب العطر فيتكون من نفحات بحرية، والياسمين، والكالون، وإكليل الجبل، والخوخ، والفريزيا، والياسمين الأصفر، وزهرة بخور مريم، والبنفسج، والكزبرة، والورد، وجوزة الطيب، وزهرة المينيونيت؛ بينما تتكون قاعدة العطر من المسك الأبيض، وخشب الأرز، وطحلب السنديان، والباتشولي، والعنبر.",

    top: [
      { name: "الليم - الزيزفون", img: "notes/aqua di gio/الليم - الزيزفون.svg" },
      { name: "الليمون", img: "notes/aqua di gio/الليمون.svg" },
      { name: "البرغموت", img: "notes/aqua di gio/البرغموت.svg" },
      { name: "الياسمين", img: "notes/aqua di gio/الياسمين.svg" },
      { name: "البرتقال", img: "notes/aqua di gio/البرتقال.svg" },
      { name: "الماندرين (اليوسفي)", img: "notes/aqua di gio/الماندرين (اليوسفي).svg" },
      { name: "النيرولي", img: "notes/aqua di gio/النيرولي.svg" }
      
    ],

    middle: [
      { name: "نسيم البحر", img: "notes/aqua di gio/نسيم البحر.svg" },
      { name: "الياسمين", img: "notes/aqua di gio/الياسمين.svg" },
      { name: "جزئ الكالون", img: "notes/aqua di gio/جزئ الكالون.svg" },
      { name: "إكليل الجبل", img: "notes/aqua di gio/إكليل الجبل.svg" },
      { name: "الخوخ", img: "notes/aqua di gio/الخوخ.svg" },
      { name: "الفريزيا", img: "notes/aqua di gio/الفريزيا.svg" },
      { name: "الصفير", img: "notes/aqua di gio/الصفير.svg" },
      { name: "زهر بخور مريم", img: "notes/aqua di gio/زهر بخور مريم.svg" },
      { name: "البنفسج", img: "notes/aqua di gio/البنفسج.svg" },
      { name: "الكزبرة", img: "notes/aqua di gio/الكزبرة.svg" },
      { name: "الورد", img: "notes/aqua di gio/الورد.svg" },
      { name: "جوزه الطيب", img: "notes/aqua di gio/جوزه الطيب.svg" },
      { name: "ريزيدا", img: "notes/aqua di gio/ريزيدا.svg" }
    ],

    base: [
      { name: "خشب الأرز", img: "notes/aqua di gio/خشب الأرز.svg" },
      { name: "الباتشولي", img: "notes/aqua di gio/الباتشولي.svg" },
      { name: "المسك الأبيض", img: "notes/aqua di gio/المسك الأبيض.svg" },
      { name: "طحلب البلوط (طحلب السنديان)", img: "notes/aqua di gio/طحلب البلوط (طحلب السنديان).svg" },
      { name: "العنبر", img: "notes/aqua di gio/العنبر.svg" }
    ]
  },

  rating: 5
},
  sheils: {
  name: "شيلز",
  brand: "Remy Marquis",
  simulation: "محاكاة (بديل للأصلي)",
  img: "men img/Shalis.svg",
  description: "عطر رجالي فاخر بتوليفة فريدة من الروائح المميزة.",
  sizes: [
    { size: "30 مل", price: 175 },
    { size: "50 مل", price: 225 },
    { size: "100 مل", price: 350 }
  ],
  // قسم الوصف والروائح (يمكن تعديله لاحقًا وإضافة الصور)
  descriptionDetails: {
    main: "عطر شاليس من ريمي ماركيز هو عطر أروماتي فوجير للرجال. تتكون مقدمة العطر من التفاح والجريب فروت واليوسفي؛ أما قلب العطر فيتكون من الريحان والخزامى؛ بينما تتكون قاعدة العطر من خشب الصندل وجوزة الطيب وطحلب البلوط.",
    top: [
      { name: "التفاح", img: "notes/sheils/التفاح.svg" },
      { name: "الجريب فروت", img: "notes/sheils/الجريب فروت.svg" },
      { name: "الماندرين (اليوسفي)", img: "notes/sheils/الماندرين (اليوسفي).svg" }
    ],
    middle: [
      { name: "الريحان", img: "notes/sheils/الريحان.svg" },
      { name: "الخزامي", img: "notes/sheils/الخزامي.svg" }
    ],
    base: [
      { name: "خشب الصندل", img: "notes/sheils/خشب الصندل.svg" },
      { name: "جوزه الطيب", img: "notes/sheils/جوزه الطيب.svg" },
      { name: "طحلب البلوط (طحلب السنديان)", img: "notes/sheils/طحلب البلوط (طحلب السنديان).svg" }
    ]
  },
  rating: 3 // يمكن تعديل النجوم حسب رغبتك
},
 labidus: {
  name: "لابيدوس",
  brand: "Ted Lapidus",
  simulation: "محاكاة (بديل للأصلي)",
  img: "men img/Lapidus .svg",
  description: "عطر فاخر بتوليفة مميزة من الروائح الرجالية الكلاسيكية.",
  sizes: [
    { size: "30 مل", price: 175 },
    { size: "50 مل", price: 225 },
    { size: "100 مل", price: 350 }
  ],

  descriptionDetails: {
    main: "عطر لابيدوس بور أوم من تيد لابيدوس هو عطر شرقي للرجال. أُطلق عطر لابيدوس بور أوم عام ١٩٨٧. مصمم هذا العطر هو مارتن غراس. تتكون مقدمة العطر من الأناناس والخزامى والشيح وتوت العرعر والريحان والليمون والبرغموت؛ أما قلب العطر فيتكون من العسل والبخور وشجرة الصنوبر والورد وخشب الورد البرازيلي والياسمين والكراوية وجذر السوسن وزنبق الوادي والبيتيغرين؛ بينما تتكون قاعدة العطر من التبغ والباتشولي وطحلب السنديان والمسك والعنبر وخشب الصندل وحبوب التونكا وخشب الأرز",

    top: [
      { name: "الأناناس", img: "notes/labidus/الأناناس.svg" },
      { name: "الخزامي", img: "notes/labidus/الخزامي.svg" },
      { name: "الشيح", img: "notes/labidus/الشيح.svg" },
      { name: "توت العرعر", img: "notes/labidus/توت العرعر.svg" },
      { name: "الريحان", img: "notes/labidus/الريحان.svg" },
      { name: "الليمون", img: "notes/labidus/الليمون.svg" },
      { name: "البرغموت", img: "notes/labidus/البرغموت.svg" }
    ],

    middle: [
      { name: "العسل", img: "notes/labidus/العسل.svg" },
      { name: "البخور", img: "notes/labidus/البخور.svg" },
      { name: "أشجار الصنوبر", img: "notes/labidus/أشجار الصنوبر.svg" },
      { name: "الورد", img: "notes/labidus/الورد.svg" },
      { name: "خشب الورد البرازيلي", img: "notes/labidus/خشب الورد البرازيلي.svg" },
      { name: "الياسمين", img: "notes/labidus/الياسمين.svg" },
      { name: "الكاراوية", img: "notes/labidus/الكاراوية.svg" },
      { name: "جذور السوسن", img: "notes/labidus/جذور السوسن.svg" },
      { name: "زنابق الوادي", img: "notes/labidus/زنابق الوادي.svg" },
      { name: "البيتيتغرين", img: "notes/labidus/البيتيتغرين.svg" }
    ],

    base: [
      { name: "العنبر", img: "notes/labidus/العنبر.svg" },
      { name: "المسك", img: "notes/labidus/المسك.svg" },
      { name: "خشب الصندل", img: "notes/labidus/خشب الصندل.svg" },
      { name: "الباتشولي", img: "notes/labidus/الباتشولي.svg" },
      { name: "التبغ", img: "notes/labidus/التبغ.svg" },
      { name: "طحلب البلوط (طحلب السنديان)", img: "notes/labidus/طحلب البلوط (طحلب السنديان).svg" },
      { name: "حبوب التونكا", img: "notes/labidus/حبوب التونكا.svg" },
      { name: "خشب الأرز", img: "notes/labidus/خشب الأرز.svg" },
    ]
  },

  rating: 4
},
  sculpture: {
  name: "اسكلبشر",
  brand: "Nikos",
  simulation: "محاكاة (بديل للأصلي)",
  img: "men img/Sculpture.svg",
  description: "عطر شبابي أنيق مع لمسة عطرية مميزة.",
  sizes: [
    { size: "30 مل", price: 175 },
    { size: "50 مل", price: 225 },
    { size: "100 مل", price: 350 }
  ],
  descriptionDetails: {
    main: "عطر اسكلبشر من نيكوس هو عطر شرقي فوجير للرجال اطلق عام ١٩٩٥. مصمم هذا العطر هو ميشيل ألمايراك. تتكون مقدمة العطر من زهر البرتقال والليمون والبرغموت واليوسفي؛ أما قلب العطر فيتكون من الياسمين وزنبق الوادي وإبرة الراعي والورد؛ بينما تتكون قاعدة العطر من فول التونكا والجاوي والعنبر وخشب الأرز.",
    top: [
      { name: "زهر البرتقال", img: "notes/sculpture/زهر البرتقال.svg" },
      { name: "البرغموت", img: "notes/sculpture/البرغموت.svg" },
      { name: "الليمون", img: "notes/sculpture/الليمون.svg" },
      { name: "الماندرين (اليوسفي)", img: "notes/sculpture/الماندرين (اليوسفي).svg" }
    ],
    middle: [
      { name: "الياسمين", img: "notes/sculpture/الياسمين.svg" },
      { name: "زنابق الوادي", img: "notes/sculpture/زنابق الوادي.svg" },
      { name: "إبره الراعي", img: "notes/sculpture/إبره الراعي.svg" },
      { name: "الورد", img: "notes/sculpture/الورد.svg" },
    ],
    base: [
      { name: "حبوب التونكا", img: "notes/sculpture/حبوب التونكا.svg" },
      { name: "خشب الأرز", img: "notes/sculpture/خشب الأرز.svg" },
      { name: "البنزوين - الجاوي", img: "notes/sculpture/البنزوين - الجاوي.svg" },
      { name: "العنبر", img: "notes/sculpture/العنبر.svg" }
    ]
  },
  rating: 4
},
 oneManShow: {
  name: "وان مان شو",
  brand: "Jacques Bogart",
  simulation: "محاكاة (بديل للأصلي)",
  img: "men img/One Man Show.svg",
  description: "عطر جريء وكلاسيكي يعكس قوة الشخصية والرجولة.",
  sizes: [
    { size: "30 مل", price: 175 },
    { size: "50 مل", price: 225 },
    { size: "100 مل", price: 350 }
  ],

  descriptionDetails: {
    main: "عطر ون مان شو من جاك بوغارت هو عطر شيبر رجالي. أُطلق عام ١٩٨٠. مصمم هذا العطر هو روجر بيليغرينو. تتكون مقدمة العطر من الريحان، والبرغموت، والشيح، والكراوية، والغالابانوم، وخشب الورد البرازيلي؛ أما قلب العطر فيتكون من إبر الصنوبر، والقرنفل، والباتشولي، وجوزة الطيب، والتوابل، ونجيل الهند، وإبرة الراعي، واللابدانوم، والورد، والياسمين؛ بينما تتكون قاعدة العطر من طحلب البلوط، والجلد، وخشب الأرز، وخشب الصندل، والستيراكس، والكاستوريوم، والعنبر، وحبوب التونكا، وجوز الهند، والفانيليا.",

    top: [
      { name: "الريحان", img: "notes/oneManShow/الريحان.svg" },
      { name: "البرغموت", img: "notes/oneManShow/البرغموت.svg" },
      { name: "الشيح", img: "notes/oneManShow/الشيح.svg" },
      { name: "الكاراوية", img: "notes/oneManShow/الكاراوية.svg" },
      { name: "الغلابانوم", img: "notes/oneManShow/الغلابانوم.svg" },
      { name: "خشب الورد البرازيلي", img: "notes/oneManShow/خشب الورد البرازيلي.svg" }
    ],

    middle: [
      { name: "أشواك الصنوبر", img: "notes/oneManShow/أشواك الصنوبر.svg" },
      { name: "زهر القرنفل", img: "notes/oneManShow/زهر القرنفل.svg" },
      { name: "الباتشولي", img: "notes/oneManShow/الباتشولي.svg" },
      { name: "جوزه الطيب", img: "notes/oneManShow/جوزه الطيب.svg" },
      { name: "التوابل", img: "notes/oneManShow/التوابل.svg" },
      { name: "نجيل الهند", img: "notes/oneManShow/نجيل الهند.svg" },
      { name: "إبره الراعي", img: "notes/oneManShow/إبره الراعي.svg" },
      { name: "اللابدانوم", img: "notes/oneManShow/اللابدانوم.svg" },
      { name: "الورد", img: "notes/oneManShow/الورد.svg" },
      { name: "الياسمين", img: "notes/oneManShow/الياسمين.svg" }
    ],

    base: [
      { name: "طحلب البلوط (طحلب السنديان)", img: "notes/oneManShow/طحلب البلوط (طحلب السنديان).svg" },
      { name: "الجلود", img: "notes/oneManShow/الجلود.svg" },
      { name: "خشب الأرز", img: "notes/oneManShow/خشب الأرز.svg" },
      { name: "خشب الصندل", img: "notes/oneManShow/خشب الصندل.svg" },
      { name: "ستيراكس (العبهر)", img: "notes/oneManShow/ستيراكس (العبهر).svg" },
      { name: "القندس", img: "notes/oneManShow/القندس.svg" },
      { name: "العنبر", img: "notes/oneManShow/العنبر.svg" },
      { name: "حبوب التونكا", img: "notes/oneManShow/حبوب التونكا.svg" },
      { name: "جوز الهند", img: "notes/oneManShow/جوز الهند.svg" },
      { name: "الفانيليا", img: "notes/oneManShow/الفانيليا.svg" }
    ]
  },
  rating: 4
},
  cigar: {
  name: "سيجار",
  brand: "Rémy Latour",
  simulation: "محاكاة (بديل للأصلي)",
  img: "men img/Cigar.svg",
  description: "عطر داكن وغني بطابع رجولي قوي، يجمع بين التبغ والأخشاب بنفحات دافئة وجذابة.",
  sizes: [
    { size: "30 مل", price: 175 },
    { size: "50 مل", price: 225 },
    { size: "100 مل", price: 350 }
  ],

  descriptionDetails: {
    main: "عطر سيجار من ريمي لاتور هو عطر عطري فاكهي للرجال. أُطلق سيجار عام 1996. تتكون مقدمة العطر من البرقوق والأناناس والبرغموت والكمثرى وليمون أمالفي؛ أما قلب العطر فيتكون من ورق الغار والقطيفة وإبرة الراعي والياسمين؛ بينما تتكون قاعدة العطر من التبغ والباتشولي وخشب الصندل وخشب الأرز الفرجيني والمسك",

    top: [
      { name: "البرقوق", img: "notes/cigar/البرقوق.svg" },
      { name: "الأناناس", img: "notes/cigar/الأناناس.svg" },
      { name: "البرغموت", img: "notes/cigar/البرغموت.svg" },
      { name: "الكمثري", img: "notes/cigar/الكمثري.svg" },
      { name: "الليمون", img: "notes/cigar/الليمون.svg" }
    ],

    middle: [
      { name: "ورق اللورا", img: "notes/cigar/ورق اللورا.svg" },
      { name: "زهر القطيفة", img: "notes/cigar/زهر القطيفة.svg" },
      { name: "إبره الراعي", img: "notes/cigar/إبره الراعي.svg" },
      { name: "الياسمين", img: "notes/cigar/الياسمين.svg" }
    ],

    base: [
      { name: "التبغ", img: "notes/cigar/التبغ.svg" },
      { name: "الباتشولي", img: "notes/cigar/الباتشولي.svg" },
      { name: "خشب الصندل", img: "notes/cigar/خشب الصندل.svg" },
      { name: "خشب الأرز من فرجينيا", img: "notes/cigar/خشب الأرز من فرجينيا.svg" },
      { name: "المسك", img: "notes/cigar/المسك.svg" }
    ]
  },

  rating: 4
},
  acerRoux: {
  name: "اكسيريوس روج",
  brand: "Givenchy",
  simulation: "محاكاة (بديل للأصلي)",
  img: "men img/Xeryus Rouge.svg",
  description: "عطر رجالي أنيق برائحة قوية وجذابة لجميع المناسبات.",
  sizes: [
    { size: "30 مل", price: 175 },
    { size: "50 مل", price: 225 },
    { size: "100 مل", price: 350 }
  ],

  descriptionDetails: {
    main: "عطر اكسيريوس روج من جيفنشي هو عطر شرقي فوجير للرجال. أُطلق زيريوس روج عام ١٩٩٥. ابتكرت هذا العطر أنيك ميناردو. تتكون مقدمة العطر من الصبار والبرتقال الصيني والطرخون؛ وقلب العطر من الفلفل الحلو وإبرة الراعي الأفريقية وخشب الأرز؛ وقاعدة العطر من خشب الصندل وخشب الأرز والمسك الأبيض",

    top: [
      { name: "الصبار", img: "notes/acerRoux/الصبار.svg" },
      { name: "البرتقال الصيني", img: "notes/acerRoux/البرتقال الصيني.svg" },
      { name: "الطرخون", img: "notes/acerRoux/الطرخون.svg" }
    ],

    middle: [
      { name: "الفلفل الحلو الاسباني", img: "notes/acerRoux/الفلفل الحلو الاسباني.svg" },
      { name: "إبره الراعي الأفريقيه", img: "notes/acerRoux/إبره الراعي الأفريقيه.svg" },
      { name: "خشب الأرز", img: "notes/acerRoux/خشب الأرز.svg" }
    ],

    base: [
      { name: "خشب الصندل", img: "notes/acerRoux/خشب الصندل.svg" },
      { name: "خشب الأرز", img: "notes/acerRoux/خشب الأرز.svg" },
      { name: "المسك الأبيض", img: "notes/acerRoux/المسك الأبيض.svg" }
    ]
  },

  rating: 4
},
  silverScent: {
  name: "سيلفر سنت",
  brand: "Jacques Bogart",
  simulation: "محاكاة (بديل للأصلي)",
  img: "men img/Silver Scent.svg",
  description: "عطر فاخر بنفحات خشبية وزهرية، يجمع بين الأناقة والجاذبية.",
  sizes: [
    { size: "30 مل", price: 175 },
    { size: "50 مل", price: 225 },
    { size: "100 مل", price: 350 }
  ],

  descriptionDetails: {
    main: "عطر سيلفر سنت من جاك بوغارت هو عطر شرقي خشبي للرجال. أُطلق عطر سيلفر سنت عام 2006. تتكون مقدمة العطر من زهر البرتقال والليمون؛ وقلب العطر من الخزامى والهيل وجوزة الطيب وإكليل الجبل والكزبرة وإبرة الراعي؛ وقاعدة العطر من الليتشي وحبوب التونكا وخشب الساج ونجيل الهند",

    top: [
      { name: "زهر البرتقال", img: "notes/silver scent/زهر البرتقال.svg" },
      { name: "الليمون", img: "notes/silver scent/الليمون.svg" }
    ],

    middle: [
      { name: "الخزامي", img: "notes/silver scent/الخزامي.svg" },
      { name: "الهيل", img: "notes/silver scent/الهيل.svg" },
      { name: "جوزه الطيب", img: "notes/silver scent/جوزه الطيب.svg" },
      { name: "إكليل الجبل", img: "notes/silver scent/إكليل الجبل.svg" },
      { name: "الكزبرة", img: "notes/silver scent/الكزبرة.svg" },
      { name: "إبره الراعي", img: "notes/silver scent/إبره الراعي.svg" }
    ],

    base: [
      { name: "الليتشي", img: "notes/silver scent/الليتشي.svg" },
      { name: "حبوب التونكا", img: "notes/silver scent/حبوب التونكا.svg" },
      { name: "خشب الساج", img: "notes/silver scent/خشب الساج.svg" },
      { name: "نجيل الهند", img: "notes/silver scent/نجيل الهند.svg" }
    ]
  },

  rating: 4
},
  creedSilverMountainWater: {
  name: "كريد سيلڤر ماونتن وتر",
  brand: "Creed",
  simulation: "محاكاة (بديل للأصلي)",
  img: "men img/Silver Mountain Water.svg",
  description: "عطر فاخر كلاسيكي بنفحات الفواكه والخشب.",
  sizes: [
    { size: "30 مل", price: 175 },
    { size: "50 مل", price: 225 },
    { size: "100 مل", price: 350 }
  ],

  // قسم الوصف والروائح
  descriptionDetails: {
    main: "عطر سيلفر ماونتن ووتر من كريد هو عطر عطري للجنسين. أُطلق سيلفر ماونتن ووتر عام ١٩٩٥. ابتكره أوليفييه كريد وبيير بوردون. تتكون مقدمة العطر من البرغموت واليوسفي، وقلبه من الشاي الأخضر والكشمش الأسود، وقاعدته من المسك وخشب الصندل والبيتيغرين والغالابانوم",
    
    top: [
      { name: "البرغموت", img: "notes/creedSilverMountainWater/البرغموت.svg" },
      { name: "الماندرين (اليوسفي)", img: "notes/creedSilverMountainWater/الماندرين (اليوسفي).svg" }
    ],

    middle: [
      { name: "الشاي الأخضر", img: "notes/creedSilverMountainWater/الشاي الأخضر.svg" },
      { name: "الكشمش الأسود", img: "notes/creedSilverMountainWater/الكشمش الأسود.svg" }
    ],

    base: [
      { name: "المسك", img: "notes/creedSilverMountainWater/المسك.svg" },
      { name: "خشب الصندل", img: "notes/creedSilverMountainWater/خشب الصندل.svg" },
      { name: "البيتيتغرين", img: "notes/creedSilverMountainWater/البيتيتغرين.svg" },
      { name: "الغلابانوم", img: "notes/creedSilverMountainWater/الغلابانوم.svg" }
    ]
  },

  rating: 5 // نجوم مضيئة من 1 إلى 5
},
  lacosteWhite: {
  name: "لاكوست وايت",
  brand: "Lacoste Fragrances",
  simulation: "محاكاة (بديل للأصلي)",
  img: "men img/Lacoste White.svg",
  description: "عطر شبابي منعش وخفيف.",
  sizes: [
    { size: "30 مل", price: 175 },
    { size: "50 مل", price: 225 },
    { size: "100 مل", price: 350 }
  ],

  // قسم الوصف والروائح
  descriptionDetails: {
    main: "عطر أو دو لاكوست إل 12.12 وايت من لاكوست للعطور هو عطر خشبي عطري للرجال. أُطلق هذا العطر عام 2011. تتكون مقدمة العطر من الجريب فروت وإكليل الجبل والهيل؛ وقلب العطر من الإيلنغ يلانغ ومسك الروم؛ وقاعدة العطر من خشب الأرز الفرجيني والجلد المدبوغ ونجيل الهند والجلد",

    top: [
      { name: "الجريب فروت", img: "notes/lacosteWhite/الجريب فروت.svg" },
      { name: "إكليل الجبل", img: "notes/lacosteWhite/إكليل الجبل.svg" },
      { name: "الهيل", img: "notes/lacosteWhite/الهيل.svg" }
    ],

    middle: [
      { name: "الإيلنغ", img: "notes/lacosteWhite/الإيلنغ.svg" },
      { name: "مسك الروم", img: "notes/lacosteWhite/مسك الروم.svg" }
    ],

    base: [
      { name: "خشب الأرز من فرجينيا", img: "notes/lacosteWhite/خشب الأرز من فرجينيا.svg" },
      { name: "جلد الغزال (الجلد المدبوغ)", img: "notes/lacosteWhite/جلد الغزال (الجلد المدبوغ).svg" },
      { name: "نجيل الهند", img: "notes/lacosteWhite/نجيل الهند.svg" },
      { name: "الجلود", img: "notes/lacosteWhite/الجلود.svg" }
    ]
  },

  rating: 4 // نجوم مضيئة من 1 إلى 5
},
  lacosteBlack: {
  name: "لاكوست بلاك",
  brand: "Lacoste Fragrances",
  simulation: "محاكاة (بديل للأصلي)",
  img: "men img/Lacoste Black.svg",
  description: "عطر رجولي أنيق وخشبي.",
  sizes: [
    { size: "30 مل", price: 175 },
    { size: "50 مل", price: 225 },
    { size: "100 مل", price: 350 }
  ],

  // قسم الوصف والروائح
  descriptionDetails: {
    main: "عطر أو دو لاكوست إل 12.12 نوار من لاكوست للعطور هو عطر خشبي عطري للرجال. أُطلق هذا العطر عام 2013. تتكون مقدمة العطر من البطيخ، وقلبه من الريحان والخزامى واللويزة، وقاعدته من الشوكولاتة الداكنة والكشميران والباتشولي والكومارين",
    
    top: [
      { name: "البطيخ", img: "notes/lacosteBlack/البطيخ.svg" }
    ],

    middle: [
      { name: "الريحان", img: "notes/lacosteBlack/الريحان.svg" },
      { name: "الخزامي", img: "notes/lacosteBlack/الخزامي.svg" },
      { name: "الفيربينا", img: "notes/lacosteBlack/الفيربينا.svg" }
    ],

    base: [
      { name: "الشيكولاتة الداكنة", img: "notes/lacosteBlack/الشيكولاتة الداكنة.svg" },
      { name: "أخشاب الكشمير", img: "notes/lacosteBlack/أخشاب الكشمير.svg" },
      { name: "الباتشولي", img: "notes/lacosteBlack/الباتشولي.svg" },
      { name: "الكومارين", img: "notes/lacosteBlack/الكومارين.svg" }
    ]
  },

  rating: 4 // نجوم مضيئة من 1 إلى 5
},
  lacosteEssential: {
  name: "لاكوست استنشيال",
  brand: "Lacoste Fragrances",
  simulation: "محاكاة (بديل للأصلي)",
  img: "men img/Lacoste Essential .svg",
  description: "عطر كلاسيكي شبابي برائحة منعشة.",
  sizes: [
    { size: "30 مل", price: 175 },
    { size: "50 مل", price: 225 },
    { size: "100 مل", price: 350 }
  ],

  // قسم الوصف والروائح
  descriptionDetails: {
    main: "عطر إسينشال من لاكوست للعطور هو عطر خشبي عطري للرجال. أُطلق إسينشال عام ٢٠٠٥. مصمم هذا العطر هو لوران بروير. تتكون مقدمة العطر من البرغموت، والقرفة الصينية، وأوراق الطماطم، واليوسفي؛ أما قلب العطر فيتكون من الورد والفلفل؛ بينما تتكون قاعدة العطر من خشب الصندل والباتشولي",

    top: [
      { name: "البرغموت", img: "notes/lacosteEssential/البرغموت.svg" },
      { name: "القرفة الصينية", img: "notes/lacosteEssential/القرفة الصينية.svg" },
      { name: "أوراق الطماطم", img: "notes/lacosteEssential/أوراق الطماطم.svg" },
      { name: "تانجرين (اليوسفي)", img: "notes/lacosteEssential/تانجرين (اليوسفي).svg" }
    ],

    middle: [
      { name: "الورد", img: "notes/lacosteEssential/الورد.svg" },
      { name: "الفلفل", img: "notes/lacosteEssential/الفلفل.svg" }
    ],

    base: [
      { name: "خشب الصندل", img: "notes/lacosteEssential/خشب الصندل.svg" },
      { name: "الباتشولي", img: "notes/lacosteEssential/الباتشولي.svg" }
    ]
  },

  rating: 4 // نجوم مضيئة من 1 إلى 5
},
  creedAventus: {
  name: "كريد افنتوس",
  brand: "Creed",
  simulation: "محاكاة (بديل للأصلي)",
  img: "men img/Creed Aventus.svg",
  description: "عطر فاخر شهير بنفحات فواكه وخشب.",
  sizes: [
    { size: "30 مل", price: 175 },
    { size: "50 مل", price: 225 },
    { size: "100 مل", price: 350 }
  ],

  // قسم الوصف والروائح
  descriptionDetails: {
    main: "أفينتوس من كريد هو عطر شيبر فاكهي للرجال. أُطلق أفينتوس عام ٢٠١٠. ابتكره جان كريستوف هيرولت وإروين كريد. تتكون مقدمة العطر من البرغموت، الكشمش الأسود، التفاح، الليمون، والفلفل الوردي؛ أما قلب العطر فيتكون من الأناناس، الباتشولي، والياسمين المغربي؛ بينما تتكون قاعدة العطر من البتولا، المسك، طحلب البلوط، خشب الأرز، والأمبروكسان",

    top: [
      { name: "البرغموت", img: "notes/creedAventus/البرغموت.svg" },
      { name: "الكشمش الأسود", img: "notes/creedAventus/الكشمش الأسود.svg" },
      { name: "التفاح", img: "notes/creedAventus/التفاح.svg" },
      { name: "الليمون", img: "notes/creedAventus/الليمون.svg" },
      { name: "الفلفل الوردي", img: "notes/creedAventus/الفلفل الوردي.svg" }
    ],

    middle: [
      { name: "الأناناس", img: "notes/creedAventus/الأناناس.svg" },
      { name: "الباتشولي", img: "notes/creedAventus/الباتشولي.svg" },
      { name: "الياسمين المغربي", img: "notes/creedAventus/الياسمين المغربي.svg" }
    ],

    base: [
      { name: "أخشاب البتولا", img: "notes/creedAventus/أخشاب البتولا.svg" },
      { name: "المسك", img: "notes/creedAventus/المسك.svg" },
      { name: "طحلب البلوط (طحلب السنديان)", img: "notes/creedAventus/طحلب البلوط (طحلب السنديان).svg" },
      { name: "خشب الأرز", img: "notes/creedAventus/خشب الأرز.svg" },
      { name: "الأمبروكسان", img: "notes/creedAventus/الأمبروكسان.svg" }
    ]
  },

  rating: 5 // نجوم مضيئة من 1 إلى 5
},
  erosVersace: {
  name: "ايروس فيرزاتشي",
  brand: "Versace",
  simulation: "محاكاة (بديل للأصلي)",
  img: "men img/Versace Eros.svg",
  description: "عطر حيوي شبابي برائحة منعشة وخلفيات خشبية.",
  sizes: [
    { size: "30 مل", price: 175 },
    { size: "50 مل", price: 225 },
    { size: "100 مل", price: 350 }
  ],

  // قسم الوصف والروائح
  descriptionDetails: {
    main: "عطر إيروس من فرزاتشي هو عطر أروماتي فوجير للرجال. أُطلق إيروس عام ٢٠١٢. مصمم هذا العطر هو أوريليان غيشارد. تتكون مقدمة العطر من النعناع والتفاح الأخضر والليمون؛ وقلب العطر من حبوب التونكا والأمبروكسان وإبرة الراعي؛ وقاعدة العطر من فانيليا مدغشقر وخشب الأرز الفرجيني وخشب الأرز الأطلسي ونجيل الهند وطحلب البلوط",

    top: [
      { name: "النعناع", img: "notes/erosVersace/النعناع.svg" },
      { name: "التفاح الأخضر", img: "notes/erosVersace/التفاح الأخضر.svg" },
      { name: "الليمون", img: "notes/erosVersace/الليمون.svg" }
    ],

    middle: [
      { name: "حبوب التونكا", img: "notes/erosVersace/حبوب التونكا.svg" },
      { name: "الأمبروكسان", img: "notes/erosVersace/الأمبروكسان.svg" },
      { name: "إبره الراعي", img: "notes/erosVersace/إبره الراعي.svg" }
    ],

    base: [
      { name: "فانيليا مدغشقر", img: "notes/erosVersace/فانيليا مدغشقر.svg" },
      { name: "خشب الأرز من فرجينيا", img: "notes/erosVersace/خشب الأرز من فرجينيا.svg" },
      { name: "خشب الأرز الأطلسي", img: "notes/erosVersace/خشب الأرز الأطلسي.svg" },
      { name: "نجيل الهند", img: "notes/erosVersace/نجيل الهند.svg" },
      { name: "طحلب البلوط (طحلب السنديان)", img: "notes/erosVersace/طحلب البلوط (طحلب السنديان).svg" }
    ]
  },

  rating: 5 // نجوم مضيئة من 1 إلى 5
},
};

const womenProducts = { // This was a redeclaration, removed the 'const' keyword
fantasy: {
  name: "فنتازيا",
  brand: "Britney Spears",
  simulation: "محاكاة (بديل للأصلي)",
  img: "women img/Fantasy.svg",
  description: "عطر نسائي أنثوي برائحة ساحرة حلوة تناسب جميع الأوقات والمناسبات.",
  sizes: [
    { size: "30 مل", price: 175 },
    { size: "50 مل", price: 225 },
    { size: "100 مل", price: 350 }
  ],

  descriptionDetails: {
    main: "عطر فانتاسي من بريتني سبيرز هو عطر زهري فاكهي ذو نفحات حلوة للنساء. أُطلق فانتاسي عام ٢٠٠٥. مصمم هذا العطر هو جيمس كريفدا. تتكون مقدمة العطر من الكيوي والليتشي الأحمر والسفرجل؛ وقلب العطر من الشوكولاتة البيضاء والكعك والأوركيد والياسمين؛ وقاعدة العطر من المسك وجذور السوسن ونفحات خشبية",

    top: [
      { name: "الكيوي", img: "notes/fantasy/الكيوي.svg" },
      { name: "الليتشي الأحمر", img: "notes/fantasy/الليتشي الأحمر.svg" },
      { name: "السفرجل", img: "notes/fantasy/السفرجل.svg" }
    ],

    middle: [
      { name: "الشوكولاتة البيضاء", img: "notes/fantasy/الشيكولاته البيضاء.svg" },
      { name: "الكب كيك", img: "notes/fantasy/الكاب كيك.svg" },
      { name: "الأوركيد", img: "notes/fantasy/الأوركيد.svg" },
      { name: "الياسمين", img: "notes/fantasy/الياسمين.svg" }
    ],

    base: [
      { name: "المسك", img: "notes/fantasy/المسك.svg" },
      { name: "الأخشاب", img: "notes/fantasy/الأخشاب.svg" },
      { name: "جذر السوسن", img: "notes/fantasy/جذور السوسن.svg" }
    ]
  },

  rating: 4
},

   burberryHer: {
  name: "بربري هير",
  brand: "Burberry",
  simulation: "محاكاة (بديل للأصلي)",
  img: "women img/Burberry Her.svg",
  description: "عطر أنثوي راقي برائحة زهرية وفواكه منعشة، يناسب كل الأوقات.",
  sizes: [
    { size: "30 مل", price: 175 },
    { size: "50 مل", price: 225 },
    { size: "100 مل", price: 350 }
  ],

  descriptionDetails: {
    main: "عطر بربري هير هو عطر زهري فاكهي ذو نفحات حلوة للنساء اطلق عام 2018. مصمم هذا العطر هو فرانسيس كوركدجيان. تتكون مقدمة العطر من الفراولة، والتوت، والتوت الأسود، والكرز الحامض، والكشمش الأسود، واليوسفي، والليمون؛ أما قلب العطر فيتكون من البنفسج والياسمين؛ بينما تتكون قاعدة العطر من المسك، والفانيليا، والكشميران، ونفحات خشبية، والعنبر، وطحلب السنديان، والباتشولي.",

    top: [
      { name: "الفراوله", img: "notes/burberryHer/الفراوله.svg" },
      { name: "ثمر العليق", img: "notes/burberryHer/ثمر العليق.svg" },
      { name: "توت العليق", img: "notes/burberryHer/توت العليق.svg" },
      { name: "الكرز الحامض", img: "notes/burberryHer/الكرز الحامض.svg" },
      { name: "الكشمش الأسود", img: "notes/burberryHer/الكشمش الأسود.svg" },
      { name: "الماندرين (اليوسفي)", img: "notes/burberryHer/الماندرين (اليوسفي).svg" },
      { name: "الليمون", img: "notes/burberryHer/الليمون.svg" }
    ],

    middle: [
      { name: "البنفسج", img: "notes/burberryHer/البنفسج.svg" },
      { name: "الياسمين", img: "notes/burberryHer/الياسمين.svg" }
    ],

    base: [
      { name: "المسك", img: "notes/burberryHer/المسك.svg" },
      { name: "الفانيليا", img: "notes/burberryHer/الفانيليا.svg" },
      { name: "أخشاب الكشمير", img: "notes/burberryHer/أخشاب الكشمير.svg" },
      { name: "الأخشاب", img: "notes/burberryHer/الأخشاب.svg" },
      { name: "العنبر", img: "notes/burberryHer/العنبر.svg" },
      { name: "طحلب البلوط (طحلب السنديان)", img: "notes/burberryHer/طحلب البلوط (طحلب السنديان).svg" },
      { name: "الباتشولي", img: "notes/burberryHer/الباتشولي.svg" }
    ]
  },

  rating: 4
},
manseraRoseVanilla: {
  name: "مانسيرا روز فانيليا",
  brand: "Mansera",
  simulation: "محاكاة (بديل للأصلي)",
  img: "women img/Roses Vanille.svg",
  description: "عطر أنثوي فاخر يجمع بين نفحات الورد والفانيليا الغنية والفواحة، يناسب كل الأوقات.",
  sizes: [
    { size: "30 مل", price: 175 },
    { size: "50 مل", price: 225 },
    { size: "100 مل", price: 350 }
  ],

  descriptionDetails: {
    main: "عطر روزز فانيلا من مانسيرا هو عطر شرقي برائحة الفانيليا للنساء. أُطلق روزز فانيلا عام ٢٠١١. مصمم هذا العطر هو بيير مونتال. تتكون مقدمة العطر من الليمون الإيطالي، وقلبه من الورد التركي، وقاعدته من الفانيليا والمسك الأبيض وخشب الأرز",
      top: [
        { name: "الليمون الإيطالي", img: "notes/Roses Vanille/الليمون الإيطالي.svg" },
      ],
      middle: [
        { name: "الورد التركي", img: "notes/Roses Vanille/الورد التركي.svg" },
      ],
      base: [
        { name: "المسك الأبيض", img: "notes/Roses Vanille/المسك الأبيض.svg" },
        { name: "خشب الأرز", img: "notes/Roses Vanille/خشب الأرز.svg" },
        { name: "الفانيليا", img: "notes/Roses Vanille/الفانيليا.svg" },
      ]
    },

  rating: 5
},

  midnight: {
  name: "ميدنايت",
  brand: "Lancôme",
  simulation: "محاكاة (بديل للأصلي)",
  img: "women img/MID NIGHT.svg",
  description: "عطر أنثوي جذاب بلمسة فاكهية زهرية دافئة يناسب السهرات والمناسبات الخاصة.",
  sizes: [
    { size: "30 مل", price: 175 },
    { size: "50 مل", price: 225 },
    { size: "100 مل", price: 350 }
  ],

  descriptionDetails: {
    main: "عطر تريزور ميدنايت روز من لانكوم هو عطر زهري خشبي مسكي للنساء. أُطلق تريزور ميدنايت روز عام ٢٠١١. تتكون مقدمة العطر من التوت والورد؛ وقلب العطر من الكشمش الأسود والفلفل الوردي والفاوانيا والياسمين؛ وقاعدة العطر من الفانيليا والمسك وخشب الأرز الفرجيني",

    top: [
      { name: "توت العليق (Raspberry)", img: "notes/midnight/توت العليق.svg" },
      { name: "الورد (Rose)", img: "notes/midnight/الورد.svg" }
    ],

    middle: [
      { name: "براعم الكشمش الأسود (Cassis Bud)", img: "notes/midnight/الكشمش الأسود.svg" },
      { name: "الفلفل الوردي (Pink Pepper)", img: "notes/midnight/الفلفل الوردي.svg" },
      { name: "الفاوانيا (Peony)", img: "notes/midnight/الفاوانيا.svg" },
      { name: "الياسمين (Jasmine)", img: "notes/midnight/الياسمين.svg" }
    ],

    base: [
      { name: "خشب الأرز الفرجيني (Virginia Cedar)", img: "notes/midnight/خشب الأرز من فرجينيا.svg" },
      { name: "المسك (Musk)", img: "notes/midnight/المسك.svg" },
      { name: "الفانيليا (Vanilla)", img: "notes/midnight/الفانيليا.svg" }
    ]
  },

  rating: 4
},

 moonSparkle: {
  name: "مون سباركل",
  brand: "Escada",
  simulation: "محاكاة (بديل للأصلي)",
  img: "women img/Moon Sparkle.svg",
  description: "عطر شبابي منعش بلمسة فاكهية مشرقة.",
  sizes: [
    { size: "30 مل", price: 175 },
    { size: "50 مل", price: 225 },
    { size: "100 مل", price: 350 }
  ],

  descriptionDetails: {
    main: "عطر إسكادا مون سباركل من إسكادا هو عطر زهري فاكهي للنساء. أُطلق عطر إسكادا مون سباركل عام ٢٠٠٧. مصمم هذا العطر هو أوريليان غيشارد. تتكون مقدمة العطر من الفراولة، الكشمش الأسود، التفاح الأحمر، والحمضيات؛ أما قلب العطر فيتكون من زهرة البازلاء الحلوة، الفريزيا، الياسمين، والورد؛ بينما تتكون قاعدة العطر من التوت، المسك، خشب الصندل، والعنبر",

    top: [
      { name: "فراولة", img: "notes/moonSparkle/فراولة.svg" },
      { name: "الكشمش الأسود", img: "notes/moonSparkle/الكشمش الأسود.svg" },
      { name: "تفاح أحمر", img: "notes/moonSparkle/التفاح الأحمر.svg" },
      { name: "حمضيات", img: "notes/moonSparkle/حمضيات.svg" }
    ],

    middle: [
      { name: "بازلاء عطرية (Sweet Pea)", img: "notes/moonSparkle/بازلاء.svg" },
      { name: "فريزيا", img: "notes/moonSparkle/فريزيا.svg" },
      { name: "ياسمين", img: "notes/moonSparkle/الياسمين.svg" },
      { name: "ورد", img: "notes/moonSparkle/الوردة.svg" }
    ],

    base: [
      { name: "توت العليق", img: "notes/moonSparkle/توت العليق.svg" },
      { name: "المسك", img: "notes/moonSparkle/المسك.svg" },
      { name: "خشب الصندل", img: "notes/moonSparkle/خشب الصندل.svg" },
      { name: "العنبر", img: "notes/moonSparkle/العنبر.svg" }
    ]
  },

  rating: 4
},

  sorbettoRosso: {
  name: "سوربيتو روسو",
  brand: "Escada",
  simulation: "محاكاة (بديل للأصلي)",
  img: "women img/Sorbetto Rosso.svg",
  description: "عطر فاكهي حيوي منعش بطابع البحر والفاكهة، مناسب لفصل الصيف والمناسبات اليومية.",
  sizes: [
    { size: "30 مل", price: 175 },
    { size: "50 مل", price: 225 },
    { size: "100 مل", price: 350 }
  ],

  descriptionDetails: {
    main: "عطر سوربيتو روسو من إسكادا هو عطر فواكه عطري للنساء. أُطلق سوربيتو روسو عام ٢٠١٨. تتكون مقدمة العطر من الكمثرى، والكالون، واليوسفي؛ أما قلب العطر فيتكون من البطيخ، ونفحات مائية، والفراولة، والتفاح، وملح البحر، وزهرة التياري، والهيديون، والورد؛ بينما تتكون قاعدة العطر من البرالين، والمسك، والعنبر",
    
    top: [
      { name: "الكمثري", img: "notes/sorbettoRosso/الكمثري.svg" },
      { name: "كالون (Calone)", img: "notes/sorbettoRosso/جزئ الكالون.svg" },
      { name: "اليوسفي (تانجرين)", img: "notes/sorbettoRosso/تانجرين (اليوسفي)تانجرين (اليوسفي).svg" }
    ],
    
    middle: [
      { name: "البطيخ", img: "notes/sorbettoRosso/البطيخ.svg" },
      { name: "نوتات مائية", img: "notes/sorbettoRosso/رائحه الماء.svg" },
      { name: "الفراولة", img: "notes/sorbettoRosso/الفراوله.svg" },
      { name: "التفاح", img: "notes/sorbettoRosso/التفاح.svg" },
      { name: "أملاح البحر", img: "notes/sorbettoRosso/أملاح البحر.svg" },
      { name: "زهرة تياري", img: "notes/sorbettoRosso/زهر تياري.svg" },
      { name: "هيديون", img: "notes/sorbettoRosso/جزئ هديون.svg" },
      { name: "الورد", img: "notes/sorbettoRosso/الورد.svg" }
    ],
    
    base: [
      { name: "حلوي اللوز (Praline)", img: "notes/sorbettoRosso/حلوي اللوز.svg" },
      { name: "المسك", img: "notes/sorbettoRosso/المسك.svg" },
      { name: "العنبر", img: "notes/sorbettoRosso/العنبر.svg" }
    ]
  },

  rating: 4
},

  escape: {
  name: "اسكيب",
  brand: "Calvin Klein",
  simulation: "محاكاة (بديل للأصلي)",
  img: "women img/Escape.svg",
  description: "عطر زهري – فاكهي مع لمسات خفيفة منعشة يناسب الاستخدام اليومي والمناسبات الخاصة.",
  sizes: [
    { size: "30 مل", price: 175 },
    { size: "50 مل", price: 225 },
    { size: "100 مل", price: 350 }
  ],

  descriptionDetails: {
    main: "عطر إسكيب من كالفن كلاين هو عطر زهري مائي للنساء. أُطلق عام ١٩٩١. مصمم هذا العطر هو كلود دير. تتكون مقدمة العطر من الشمام، البابونج، القطيفة، المشمش، الزنبق، طحلب السنديان، التفاح، الكزبرة، اليوسفي، الإيلنغ، الكشمش الأسود، الليتشي، والقرفة الصينية. أما قلب العطر فيتكون من الخوخ، زنبق الوادي، القرنفل، الورد، الياسمين، والقرنفل. بينما تتكون قاعدة العطر من طحلب السنديان، المسك، خشب الصندل، العنبر، نجيل الهند، الأرز، والفانيليا",

    top: [
      { name: "شمام", img: "notes/escape/شمام.svg" },
      { name: "البابونج (كاموميل)", img: "notes/escape/البابونج.svg" },
      { name: "القطيفة", img: "notes/escape/القطيفة.svg" },
      { name: "زهر القطيفة", img: "notes/escape/زهر القطيفة.svg" },
      { name: "المشمش", img: "notes/escape/المشمش.svg" },
      { name: "الصفير", img: "notes/escape/الصفير.svg" },
      { name: "طحلب البلوط (طحلب السنديان)", img: "notes/escape/طحلب البلوط (طحلب السنديان).svg" },
      { name: "التفاح", img: "notes/escape/التفاح.svg" },
      { name: "الكزبرة", img: "notes/escape/الكزبرة.svg" },
      { name: "الماندرين", img: "notes/escape/الماندرين.svg" },
      { name: "الإيلنغ", img: "notes/escape/الإيلنغ.svg" },
      { name: "الكشمش الأسود", img: "notes/escape/الكشمش الأسود.svg" },
      { name: "الليتشي", img: "notes/escape/الليتشي.svg" },
      { name: "القرفة الصينية", img: "notes/escape/القرفة الصينية.svg" }
    ],

    middle: [
      { name: "الخوخ", img: "notes/escape/الخوخ.svg" },
      { name: "زنابق الوادي", img: "notes/escape/زنابق الوادي.svg" },
      { name: "زهر القرنفل", img: "notes/escape/زهر القرنفل.svg" },
      { name: "الورد", img: "notes/escape/الورد.svg" },
      { name: "الياسمين", img: "notes/escape/الياسمين.svg" },
      { name: "القرنفل", img: "notes/escape/القرنفل.svg" }
    ],

    base: [
      { name: "طحلب البلوط", img: "notes/escape/طحلب البلوط (طحلب السنديان).svg" },
      { name: "المسك", img: "notes/escape/المسك.svg" },
      { name: "خشب الصندل", img: "notes/escape/خشب الصندل.svg" },
      { name: "العنبر", img: "notes/escape/العنبر.svg" },
      { name: "نجيل الهند", img: "notes/escape/نجيل الهند.svg" },
      { name: "خشب الأرز", img: "notes/escape/خشب الأرز.svg" },
      { name: "الفانيليا", img: "notes/escape/الفانيليا.svg" }
    ]
  },

  rating: 4
},

  crazyLove: {
    name: "كريزي لاف",
    brand: "Crazy Love",
    img: "women img/Crazy Love.svg",
    description: "عطر رومانسي دافئ بلمسة أنثوية جذابة.",
    sizes: [
      { size: "30 مل", price: 175 },
      { size: "50 مل", price: 225 },
      { size: "100 مل", price: 350 }
    ]
  },

  heavenly: {
  name: "هفنلي",
  brand: "Victoria's Secret",
  simulation: "محاكاة (بديل للأصلي)",
  img: "women img/Heavenly.svg",
  description: "عطر ناعم ومريح للنساء، يتميز بمزيج زهري ومسكي دفء يناسب الاستخدام اليومي والسهرات.",
  sizes: [
    { size: "30 مل", price: 175 },
    { size: "50 مل", price: 225 },
    { size: "100 مل", price: 350 }
  ],

  descriptionDetails: {
    main: "عطر من فيكتوريا سيكريت هو عطر نسائي. تم إطلاقه عام 2023. تتكون مقدمة العطر من الياسمين، وقلبه من المسك، وقاعدته من الفانيليا وخشب الصندل",

    top: [
      { name: "الياسمين (Jasmine)", img: "notes/heavenly/الياسمين.svg" }
    ],

    middle: [
      { name: "المسك (Musk)", img: "notes/heavenly/المسك.svg" }
    ],

    base: [
      { name: "الفانيليا (Vanilla)", img: "notes/heavenly/الفانيليا.svg" },
      { name: "خشب الصندل (Sandalwood)", img: "notes/heavenly/خشب الصندل.svg" }
    ]
  },

  rating: 4
},

  secretCharm: {
  name: "سيكرت شارم",
  brand: "Victoria's Secret",
  simulation: "محاكاة (بديل للأصلي)",
  img: "women img/Secret Charm.svg",
  description: "عطر أنثوي ناعم ومنعش برائحة زهرية طبيعية تدوم برقة.",
  sizes: [
    { size: "30 مل", price: 175 },
    { size: "50 مل", price: 225 },
    { size: "100 مل", price: 350 }
  ],

  descriptionDetails: {
    main: "عطر سيكريت تشارم من فيكتوريا سيكريت هو عطر زهري فاكهي للنساء",

    top: [
      { name: "الياسمين (Jasmine)", img: "notes/secretCharm/الياسمين.svg" }
    ],

    middle: [
      { name: "زهور العسل (Honeysuckle)", img: "notes/secretCharm/زهر العسل - صريمة الجدي.svg" },
    ],

    base: [
      { name: "الكاموميل (Chamomile)", img: "notes/secretCharm/الكاموميل.svg" },
      { name: "الصبار (Aloe Vera)", img: "notes/secretCharm/الصبار.svg" }
    ]
  },

  rating: 4
},

 laVieBelle: {
  name: "لافي إي بيل",
  brand: "Lancôme",
  simulation: "محاكاة (بديل للأصلي)",
  img: "women img/La Vie est Belle.svg",
  description: "عطر فاخر بلمسة أنثوية ساحرة يجمع بين النوتات الفاكهية والزهورية مع قاعدة دافئة وجذابة.",
  sizes: [
    { size: "30 مل", price: 175 },
    { size: "50 مل", price: 225 },
    { size: "100 مل", price: 350 }
  ],

  descriptionDetails: {
    main: "عطر لا في إي بيل من لانكوم هو عطر زهري فاكهي ذو نفحات حلوة للنساء. أُطلق عام ٢٠١٢. ابتكره أوليفييه بولج، ودومينيك روبيون، وآن فليبو. تتكون مقدمة العطر من الكشمش الأسود والكمثرى؛ وقلبه من السوسن والياسمين وزهر البرتقال؛ وقاعدته من البرالين والفانيليا والباتشولي وحبوب التونكا",

    top: [
      { name: "الكشمش الأسود (Black Currant)", img: "notes/laVieBelle/الكشمش الأسود.svg" },
      { name: "الكمثرى (Pear)", img: "notes/laVieBelle/الكمثري.svg" }
    ],

    middle: [
      { name: "السوسن (Iris)", img: "notes/laVieBelle/السوسن.svg" },
      { name: "الياسمين (Jasmine)", img: "notes/laVieBelle/الياسمين.svg" },
      { name: "زهر البرتقال (Orange Blossom)", img: "notes/laVieBelle/زهر البرتقال.svg" }
    ],

    base: [
      { name: "البرالين (Praline)", img: "notes/laVieBelle/حلوي اللوز.svg" },
      { name: "الفانيليا (Vanilla)", img: "notes/laVieBelle/الفانيليا.svg" },
      { name: "الباتشولي (Patchouli)", img: "notes/laVieBelle/الباتشولي.svg" },
      { name: "حبوب التونكا (Tonka Bean)", img: "notes/laVieBelle/حبوب التونكا.svg" }
    ]
  },

  rating: 5
},

  jadore: {
  name: "جادور",
  brand: "Dior",
  simulation: "محاكاة (بديل للأصلي)",
  img: "women img/Jadore.svg",
  description: "عطر أنيق وفاخر يعبر عن الأنوثة الكلاسيكية والأنوثة الحديثة في تركيبة زهريّة فاخرة.",
  sizes: [
    { size: "30 مل", price: 175 },
    { size: "50 مل", price: 225 },
    { size: "100 مل", price: 350 }
  ],

  descriptionDetails: {
    main: "عطر جادور من ديور هو عطر زهري فاكهي للنساء. أُطلق جادور عام ١٩٩٩، وهو من ابتكار خبيرة العطور كاليس بيكر. تتكون مقدمة العطر من الكمثرى، والشمام، والماغنوليا، والخوخ، واليوسفي، والبرغموت؛ أما قلب العطر فيتكون من الياسمين، وزنبق الوادي، ومسك الروم، والفريزيا، والورد، والأوركيد، والبنفسج، والبرقوق؛ بينما تتكون قاعدة العطر من المسك، والفانيليا، وخشب الأرز، والتوت الأسود. حاز هذا العطر على جائزة FiFi لأفضل حملة إعلانية وطنية/تلفزيونية لعام ٢٠٠٧",

    top: [
      { name: "الكمثرى (Pear)", img: "notes/jadore/الكمثري.svg" },
      { name: "الشمام (Melon)", img: "notes/jadore/شمام.svg" },
      { name: "الماغنوليا (Magnolia)", img: "notes/jadore/الماغنوليا.svg" },
      { name: "الخوخ (Peach)", img: "notes/jadore/الخوخ.svg" },
      { name: "اليوسفي (Mandarin)", img: "notes/jadore/الماندرين (اليوسفي).svg" },
      { name: "البرغموت (Bergamot)", img: "notes/jadore/البرغموت.svg" }
    ],

    middle: [
      { name: "الياسمين (Jasmine)", img: "notes/jadore/الياسمين.svg" },
      { name: "زنابق الوادي (Lily-of-the-Valley)", img: "notes/jadore/زنابق الوادي.svg" },
      { name: "مسك الروم (Tuberose)", img: "notes/jadore/مسك الروم.svg" },
      { name: "الفريزيا (Freesia)", img: "notes/jadore/الفريزيا.svg" },
      { name: "الورد (Rose)", img: "notes/jadore/الورد.svg" },
      { name: "الأوركيد (Orchid)", img: "notes/jadore/الأوركيد.svg" },
      { name: "البنفسج (Violet)", img: "notes/jadore/البنفسج.svg" },
      { name: "البرقوق (Plum)", img: "notes/jadore/البرقوق.svg" }
    ],

    base: [
      { name: "المسك (Musk)", img: "notes/jadore/المسك.svg" },
      { name: "الفانيليا (Vanilla)", img: "notes/jadore/الفانيليا.svg" },
      { name: "خشب الأرز (Cedar)", img: "notes/jadore/خشب الأرز.svg" },
      { name: "التوت البري (Blackberry)", img: "notes/jadore/توت العليق.svg" }
    ]
  },

  rating: 5
},

 robertoCavalli: {
  name: "روبيرتو كافلي",
  brand: "Roberto Cavalli",
  simulation: "محاكاة (بديل للأصلي)",
  img: "women img/Roberto Cavalli.svg",
  description: "عطر نسائي أنيق وفاخر بلمسة جريئة وأنثوية تناسب السهرات والمناسبات الخاصة.",
  sizes: [
    { size: "30 مل", price: 175 },
    { size: "50 مل", price: 225 },
    { size: "100 مل", price: 350 }
  ],

  descriptionDetails: {
    main: "عطر روبرتو كافالي أو دو بارفان من روبرتو كافالي هو عطر شرقي زهري للنساء. أُطلق عطر روبرتو كافالي أو دو بارفان عام ٢٠١٢. ابتكرت هذا العطر لويز تيرنر. تتكون مقدمة العطر من الفلفل الوردي، وقلبه من زهر البرتقال الأفريقي، وقاعدته من الفانيليا والجاوي وحبوب التونكا",

    top: [
      { name: "الفلفل الوردي (Pink Pepper)", img: "notes/roberto-cavalli/الفلفل الوردي.svg" }
    ],

    middle: [
      { name: "زهرة البرتقال الأفريقي (African Orange Flower)", img: "notes/roberto-cavalli/زهر البرتقال الأفريقي.svg" }
    ],

    base: [
      { name: "الفانيليا (Vanilla)", img: "notes/roberto-cavalli/الفانيليا.svg" },
      { name: "البنزوين – الجاوي (Benzoin & Guaiac)", img: "notes/roberto-cavalli/البنزوين - الجاوي.svg" },
      { name: "حبوب التونكا (Tonka Bean)", img: "notes/roberto-cavalli/حبوب التونكا.svg" }
    ]
  },

  rating: 4
},

verySexyNow: {
  name: "ڤيري سكسي ناو",
  brand: "Victoria's Secret",
  simulation: "محاكاة (بديل للأصلي)",
  img: "women img/Very Sexy Now_.svg",
  description: "عطر نسائي جذاب برائحة أنثوية مثيرة ذات طابع زهري-فاكهي منعش.",
  sizes: [
    { size: "30 مل", price: 175 },
    { size: "50 مل", price: 225 },
    { size: "100 مل", price: 350 }
  ],

  descriptionDetails: {
    main: "من فيكتوريا سيكريت هو عطر زهري فاكهي للنساء تتكون مقدمة العطر من الجوافة، وقلبه من الزهور، وقاعدته من جوز الهند",

    top: [
      { name: "الجوافة", img: "notes/very-sexy-now/الجوافه.svg" }
    ],

    middle: [
      { name: "الزهور", img: "notes/very-sexy-now/الزهور.svg" }
    ],

    base: [
      { name: "جوز الهند", img: "notes/very-sexy-now/جوز الهند.svg" }
    ]
  },

  rating: 4
},

 yara: {
  name: "يارا",
  simulation: "محاكاة (بديل للأصلي)",
  brand: "Lattafa Perfumes",
  img: "women img/YARA.svg",
  description: "عطر نسائي ناعم برائحة فانيليا ومسك مع لمحات فاكهية وزهرية تناسب الاستخدام اليومي.",
  sizes: [
    { size: "30 مل", price: 175 },
    { size: "50 مل", price: 225 },
    { size: "100 مل", price: 350 }
  ],

  descriptionDetails: {
    main: "عطر يارا من لطافة للعطور هو عطر شرقي برائحة الفانيليا للنساء. أُطلق عطر يارا في عام 2020. تتكون مقدمة العطر من الأوركيد، والهليوتروب، واليوسفي؛ أما قلب العطر فيتكون من نفحات حلوة وفواكه استوائية؛ بينما تتكون قاعدة العطر من الفانيليا، والمسك، وخشب الصندل",

    top: [
      { name: "الأوركيد (Orchid)", img: "notes/yara/الأوركيد.svg" },
      { name: "الهيلوتروب (Heliotrope)", img: "notes/yara/الهيلوتروب.svg" },
      { name: "اليوسفي (Tangerine)", img: "notes/yara/تانجرين (اليوسفي).svg" }
    ],

    middle: [
      { name: "اتفاق غورماند (Gourmand Accord)", img: "notes/yara/اتفاق غورماند.svg" },
      { name: "الفواكه الإستوائیة (Tropical Fruits)", img: "notes/yara/الفواكه الإستوائيه.svg" }
    ],

    base: [
      { name: "الفانيليا (Vanilla)", img: "notes/yara/الفانيليا.svg" },
      { name: "المسك (Musk)", img: "notes/yara/المسك.svg" },
      { name: "خشب الصندل (Sandalwood)", img: "notes/yara/خشب الصندل.svg" }
    ]
  },

  rating: 4
},

  yaraCandy: {
  name: "يارا كاندي",
  brand: "Lattafa Perfumes",
  simulation: "محاكاة (بديل للأصلي)",
  img: "women img/_YARA CANDY.svg",
  description: "عطر نسائي حلو وسكري برائحة جذابة ومنعشة بطابع فاكهي-جورماند.",
  sizes: [
    { size: "30 مل", price: 175 },
    { size: "50 مل", price: 225 },
    { size: "100 مل", price: 350 }
  ],

  descriptionDetails: {
    main: "عطر يارا كاندي من لطافة للعطور هو عطر زهري فاكهي ذو نفحات حلوة للنساء. هذا عطر جديد، تم إطلاقه عام ٢٠٢٤. تتكون مقدمة العطر من الكشمش الأسود واليوسفي الأخضر، وقلبه من حلوى الفراولة الفوارة والغاردينيا، وقاعدته من الفانيليا والمسك والعنبر وخشب الصندل",

    top: [
      { name: "الكشمش الأسود", img: "notes/yara-candy/الكشمش الأسود.svg" },
      { name: "الماندرين الأخضر", img: "notes/yara-candy/الماندرين الأخضر.svg" }
    ],

    middle: [
      { name: "حلوى الفراولة الفوارة", img: "notes/yara-candy/حلوى الفراولة الفوارة.svg" },
      { name: "الغاردينيا", img: "notes/yara-candy/الغاردينيا.svg" }
    ],

    base: [
      { name: "الفانيليا", img: "notes/yara-candy/الفانيليا.svg" },
      { name: "المسك", img: "notes/yara-candy/المسك.svg" },
      { name: "العنبر", img: "notes/yara-candy/العنبر.svg" },
      { name: "خشب الصندل", img: "notes/yara-candy/خشب الصندل.svg" }
    ]
  },

  rating: 4
},

  hawai: {
  name: "هواي",
  brand: "Bath & Body Works",
  simulation: "محاكاة (بديل للأصلي)",
  img: "women img/_Hawaii.svg",
  description: "عطر نسائي منعش بروح صيفية خفيفة بطابع فواكهي-بحري منعش.",
  sizes: [
    { size: "30 مل", price: 175 },
    { size: "50 مل", price: 225 },
    { size: "100 مل", price: 350 }
  ],

  descriptionDetails: {
    main: "عطر هاواي من باث آند بودي وركس هو عطر مائي عطري للنساء. أُطلق عطر هاواي عام ٢٠١٣. تتكون مقدمة العطر من الكرز الماراشينو والبرتقال والليمون؛ وقلب العطر من نفحات البحر والخوخ والأناناس وتوت الآساي؛ وقاعدة العطر من نفحات الأوزون وجوز الهند والفانيليا والرم",

    top: [
      { name: "كرز ماراشينو (Maraschino Cherry)", img: "notes/hawai/كرز ماراشينو.svg" },
      { name: "البرتقال (Orange)", img: "notes/hawai/البرتقال.svg" },
      { name: "الليمون (Lemon)", img: "notes/hawai/الليمون.svg" }
    ],

    middle: [
      { name: "نسيم البحر (Sea Breeze)", img: "notes/hawai/نسيم البحر.svg" },
      { name: "البرقوق (Plum)", img: "notes/hawai/البرقوق.svg" },
      { name: "الأناناس (Pineapple)", img: "notes/hawai/الأناناس.svg" },
      { name: "توت الأكاي (Acai Berry)", img: "notes/hawai/توت الأكاي.svg" }
    ],

    base: [
      { name: "النوتات الأوزونية (Ozonic Notes)", img: "notes/hawai/نوتات أوزونية.svg" },
      { name: "جوز الهند (Coconut)", img: "notes/hawai/جوز الهند.svg" },
      { name: "الفانيليا (Vanilla)", img: "notes/hawai/الفانيليا.svg" },
      { name: "الروم (Rum)", img: "notes/hawai/الروم.svg" }
    ]
  },

  rating: 4
},

  fraway: {
  name: "فراواي",
  brand: "Avon",
  simulation: "محاكاة (بديل للأصلي)",
  img: "women img/_Far Away.svg",
  description: "عطر أنيق برائحة دافئة وزهرية-شرقية تناسب جميع الأوقات، يقدم توليفة غنية من الفواكه والزهور مع لمسات دافئة في القاعدة.",
  sizes: [
    { size: "30 مل", price: 175 },
    { size: "50 مل", price: 225 },
    { size: "100 مل", price: 350 }
  ],

  descriptionDetails: {
    main: "عطر فار أواي من آفون هو عطر شرقي زهري للنساء. أُطلق فار أواي عام ١٩٩٤. ابتكره رينيه مورغنثالر وخافيير رينارد. تتكون مقدمة العطر من جوز الهند، والإيلنغ، والخوخ، والكارو كاروندي، والبرتقال؛ أما قلب العطر فيتكون من الياسمين، والغاردينيا، والبنفسج، والفريزيا، والأوسمانثوس، والورد؛ بينما تتكون قاعدة العطر من الفانيليا، وخشب الصندل، والعنبر، والمسك",

    top: [
      { name: "جوز الهند (Coconut)", img: "notes/fraway/جوز الهند.svg" },
      { name: "الإيلنغ (Ylang-ylang)", img: "notes/fraway/الإيلنغ.svg" },
      { name: "الخوش (Peach)", img: "notes/fraway/الخوخ.svg" },
      { name: "كارو-كاروند (Karo Karounde)", img: "notes/fraway/كارو-كاروند.svg" },
      { name: "البرتقال (Orange)", img: "notes/fraway/البرتقال.svg" }
    ],

    middle: [
      { name: "الياسمين (Jasmine)", img: "notes/fraway/الياسمين.svg" },
      { name: "الغاردينيا (Gardenia)", img: "notes/fraway/الغاردينيا.svg" },
      { name: "البنفسج (Violet)", img: "notes/fraway/البنفسج.svg" },
      { name: "الفريزيا (Freesia)", img: "notes/fraway/الفريزيا.svg" },
      { name: "الأوسمانثوس (Osmanthus)", img: "notes/fraway/أوسمانثوس.svg" },
      { name: "الورد (Rose)", img: "notes/fraway/الورد.svg" }
    ],

    base: [
      { name: "الفانيليا (Vanilla)", img: "notes/fraway/الفانيليا.svg" },
      { name: "خشب الصندل (Sandalwood)", img: "notes/fraway/خشب الصندل.svg" },
      { name: "العنبر (Amber)", img: "notes/fraway/العنبر.svg" },
      { name: "المسك (Musk)", img: "notes/fraway/المسك.svg" }
    ]
  },

  rating: 4
},

  "pure-seduction": {
  name: "بيور سيدكشن",
  brand: "Victoria's Secret",
  simulation: "محاكاة (بديل للأصلي)",
  img: "women img/Pure Seduction.svg",
  description: "عطر نسائي فاكهي-زهري جذاب يجمع بين نفحات البرقوق والفريزيا مع قاعدة مهدئة من الكاموميل.",
  sizes: [
    { size: "30 مل", price: 175 },
    { size: "50 مل", price: 225 },
    { size: "100 مل", price: 350 }
  ],

  descriptionDetails: {
    main: "من فيكتوريا سيكريت هو عطر زهري فاكهي للنساء",

    top: [
      { name: "البرقوق (Plum)", img: "notes/pure-seduction/البرقوق.svg" },
      { name: "الفريزيا (Freesia)", img: "notes/pure-seduction/الفريزيا.svg" }
    ],

    middle: [
      { name: "الفريزيا (Freesia)", img: "notes/pure-seduction/الفريزيا.svg" }
    ],

    base: [
      { name: "الكاموميل (Chamomile)", img: "notes/pure-seduction/الكاموميل.svg" }
    ]
  },

  rating: 4
},

  "libre": {
  name: "ليبر",
  brand: "Yves Saint Laurent",
  simulation: "محاكاة (بديل للأصلي)",
  img: "women img/Libre.svg",
  description: "عطر نسائي فاخر يجمع بين القوة والأنوثة في توليفة زهرية-حمضية-فانيليا أنيقة.",
  sizes: [
    { size: "30 مل", price: 175 },
    { size: "50 مل", price: 225 },
    { size: "100 مل", price: 350 }
  ],

  descriptionDetails: {
    main: "عطر ليبر من إيف سان لوران هو عطر شرقي فوغير للنساء. أُطلق ليبر عام ٢٠١٩. ابتكره آن فليبو وكارلوس بينايم. تتكون مقدمة العطر من الخزامى، واليوسفي، والكشمش الأسود، والبيتيغرين؛ أما قلب العطر فيتكون من الخزامى، وزهر البرتقال، والياسمين؛ بينما تتكون قاعدة العطر من فانيليا مدغشقر، والمسك، وخشب الأرز، والعنبر",

    top: [
      { name: "الخزامي (Lavender)", img: "notes/libre/الخزامي.svg" },
      { name: "الماندرين (اليوسفي)", img: "notes/libre/الماندرين (اليوسفي).svg" },
      { name: "الكشمش الأسود (Black Currant)", img: "notes/libre/الكشمش الأسود.svg" },
      { name: "البيتيغرين (Petitgrain)", img: "notes/libre/البيتيتغرين.svg" }
    ],

    middle: [
      { name: "الخزامي (Lavender)", img: "notes/libre/الخزامي.svg" },
      { name: "زهر البرتقال (Orange Blossom)", img: "notes/libre/زهر البرتقال.svg" },
      { name: "الياسمين (Jasmine)", img: "notes/libre/الياسمين.svg" }
    ],

    base: [
      { name: "فانيليا مدغشقر (Madagascar Vanilla)", img: "notes/libre/فانيليا مدغشقر.svg" },
      { name: "المسك (Musk)", img: "notes/libre/المسك.svg" },
      { name: "خشب الأرز (Cedarwood)", img: "notes/libre/خشب الأرز.svg" },
      { name: "الآمبرغريس (Ambergris)", img: "notes/libre/الآمبرغريس.svg" }
    ]
  },

  rating: 4
},

  olympia: {
  name: "اولمبيا",
  brand: "Rabanne",
  simulation: "محاكاة (بديل للأصلي)",
  img: "women img/Olympéa.svg",
  description: "عطر أنثوي شرقي - زهري دافئ برائحة فانيليا مالحة جذابة.",

  sizes: [
    { size: "30 مل", price: 175 },
    { size: "50 مل", price: 225 },
    { size: "100 مل", price: 350 }
  ],

  descriptionDetails: {
    main: "عطر أولمبيا من رابان هو عطر شرقي زهري للنساء. أُطلق عطر أولمبيا عام ٢٠١٥. ابتكره كل من لوك دونغ، وآن فليبو، ودومينيك روبيون. تتكون مقدمة العطر من الياسمين المائي، واليوسفي الأخضر، وزهر الزنجبيل؛ أما قلب العطر فيتكوّن من الفانيليا والملح؛ بينما تتكون قاعدة العطر من خشب الكشمير، والعنبر، وخشب الصندل",
    top: [
      { name: "الياسمين المائي", img: "notes/olympia/الياسمين المائي.svg" },
      { name: "الماندرين الأخضر", img: "notes/olympia/الماندرين الأخضر.svg" },
      { name: "زهور الزنجبيل", img: "notes/olympia/زهور الزنجبيل.svg" }
    ],

    middle: [
      { name: "الفانيليا", img: "notes/olympia/الفانيليا.svg" },
      { name: "الملح", img: "notes/olympia/الملح.svg" }
    ],

    base: [
      { name: "أخشاب الكشمير", img: "notes/olympia/أخشاب الكشمير.svg" },
      { name: "الآمبرغريس", img: "notes/olympia/الآمبرغريس.svg" },
      { name: "خشب الصندل", img: "notes/olympia/خشب الصندل.svg" }
    ]
  },

  rating: 4
},

  "pink-sugar": {
  name: "بينك شوجر",
  brand: "Aquolina",
  simulation: "محاكاة (بديل للأصلي)",
  img: "women img/Pink Sugar.svg",
  description: "عطر سكري شبابي بلمسة حلوة جذابة من نكهات الفواكه والحلوى.",
  sizes: [
    { size: "30 مل", price: 175 },
    { size: "50 مل", price: 225 },
    { size: "100 مل", price: 350 }
  ],

  descriptionDetails: {
    main: "عطر بينك شوجر من أكولينا هو عطر زهري فاكهي ذو نفحات حلوة للنساء. أُطلق بينك شوجر عام ٢٠٠٤. ابتكره جيفودان وشيامالا ميزونديو. تتكون مقدمة العطر من توت العليق والبرتقال والبرغموت وأوراق التين؛ أما قلب العطر فيتكون من حلوى القطن والعرقسوس والفراولة والتوت الأحمر وزنبق الوادي؛ بينما تتكون قاعدة العطر من الكراميل والفانيليا والمسك وحبوب التونكا وخشب الصندل",

    top: [
      { name: "توت العليق", img: "notes/pinkSugar/توت العليق.svg" },
      { name: "البرتقال", img: "notes/pinkSugar/البرتقال.svg" },
      { name: "البرغموت", img: "notes/pinkSugar/البرغموت.svg" },
      { name: "أوراق التين", img: "notes/pinkSugar/أوراق التين.svg" }
    ],

    middle: [
      { name: "غزل البنات", img: "notes/pinkSugar/غزل البنات.svg" },
      { name: "الفراولة", img: "notes/pinkSugar/الفراوله.svg" },
      { name: "زنابق الوادي", img: "notes/pinkSugar/زنابق الوادي.svg" },
      { name: "التوت الأحمر", img: "notes/pinkSugar/التوت الأحمر.svg" },
      { name: "العرقسوس", img: "notes/pinkSugar/العرقسوس.svg" }
    ],

    base: [
      { name: "الكراميل", img: "notes/pinkSugar/الكاراميل.svg" },
      { name: "الفانيليا", img: "notes/pinkSugar/الفانيليا.svg" },
      { name: "المسك", img: "notes/pinkSugar/المسك.svg" },
      { name: "حبوب التونكا", img: "notes/pinkSugar/حبوب التونكا.svg" },
      { name: "خشب الصندل", img: "notes/pinkSugar/خشب الصندل.svg" }
    ]
  },

  rating: 4
},

  organza: {
  name: "اورجانزا",
  brand: "Givenchy",
  simulation: "محاكاة (بديل للأصلي)",
  img: "women img/Organza.svg",
  description: "عطر كلاسيك أنيق بلمسة أنثوية راقية يجمع بين الزهور البيضاء، التوابل والقاعدة الخشبية-العنبرية.",
  sizes: [
    { size: "30 مل", price: 175 },
    { size: "50 مل", price: 225 },
    { size: "100 مل", price: 350 }
  ],

  descriptionDetails: {
    main: "عطر أورغانزا من جيفنشي هو عطر شرقي زهري للنساء. أُطلق أورغانزا عام ١٩٩٦. مصممة هذا العطر هي صوفي لابيه. تتكون مقدمة العطر من جوزة الطيب، الغاردينيا، زهر البرتقال الأفريقي، نفحات خضراء، والبرغموت؛ أما قلب العطر فيتكون من مسك الروم، الياسمين، زهر العسل، السوسن، الفاوانيا، وجوزة الطيب؛ بينما تتكون قاعدة العطر من الفانيليا، العنبر، نفحات خشبية، خشب الغاياك، وخشب الأرز الفرجيني",

    top: [
      { name: "البرغموت (Bergamot)", img: "notes/organza/البرغموت.svg" },
      { name: "زهرة البرتقال الأفريقي (African Orange Flower)", img: "notes/organza/زهر البرتقال الأفريقي.svg" },
      { name: "الغاردينيا (Gardenia)", img: "notes/organza/الغاردينيا.svg" },
      { name: "جوزة الطيب (Nutmeg)", img: "notes/organza/جوزه الطيب.svg" },
      { name: "النوتات الخضراء (Green Notes)", img: "notes/organza/النوتات الخضراء.svg" }
    ],

    middle: [
      { name: "مُسك الروم (Honey Musk / Honey Suckle)", img: "notes/organza/مسك الروم.svg" },
      { name: "الياسمين (Jasmine)", img: "notes/organza/الياسمين.svg" },
      { name: "زهر العسل (Honeysuckle)", img: "notes/organza/زهر العسل - صريمة الجدي.svg" },
      { name: "السوسن (Iris)", img: "notes/organza/السوسن.svg" },
      { name: "الفاوانيا (Peony)", img: "notes/organza/الفاوانيا.svg" },
      { name: "البسباسة (Violet / Powdery florals)", img: "notes/organza/بسباسة.svg" }
    ],

    base: [
      { name: "الفانيليا (Vanilla)", img: "notes/organza/الفانيليا.svg" },
      { name: "العنبر (Amber)", img: "notes/organza/العنبر.svg" },
      { name: "الأخشاب (Woodsy Notes)", img: "notes/organza/الأخشاب.svg" },
      { name: "أخشاب الغاياك (Guaiac Wood)", img: "notes/organza/أخشاب الغاياك.svg" },
      { name: "خشب الأرز من فرجينيا (Virginia Cedar)", img: "notes/organza/خشب الأرز من فرجينيا.svg" }
    ]
  },

  rating: 4
},

 "rare-gold": {
  name: "رير جولد",
  brand: "Avon",
  simulation: "محاكاة (بديل للأصلي)",
  img: "women img/Rare Gold.svg",
  description: "عطر نسائي كلاسيكي فاخر برائحة زهرية-خشبية دافئة ومميزة.",

  sizes: [
    { size: "30 مل", price: 175 },
    { size: "50 مل", price: 225 },
    { size: "100 مل", price: 350 }
  ],

  descriptionDetails: {
    main: "عطر زهري ألدهيدي للنساء، أُطلق عام ١٩٩٥. مصمم هذا العطر هو أوليفييه كريسب. تتكون مقدمة العطر من الإيلنغ، والخوخ، واليوسفي، والبرغموت؛ أما قلب العطر فيتكون من مسك الروم، والألدهيدات، والياسمين، وزهر البرتقال، والغاردينيا، وزنبق الوادي؛ بينما تتكون قاعدة العطر من العنبر، وخشب الصندل، والفانيليا، ونفحات خشبية، والمسك",

    top: [
      { name: "الإيلنغ (Ylang-ylang)", img: "notes/rare-gold/الإيلنغ.svg" },
      { name: "الخوخ (Peach)", img: "notes/rare-gold/الخوخ.svg" },
      { name: "اليوسفي (Mandarin Orange)", img: "notes/rare-gold/الماندرين (اليوسفي).svg" },
      { name: "البرغموت (Bergamot)", img: "notes/rare-gold/البرغموت.svg" }
    ],

    middle: [
      { name: "زنابق الوادي (Lily-of-the-Valley)", img: "notes/rare-gold/زنابق الوادي.svg" },
      { name: "الياسمين (Jasmine)", img: "notes/rare-gold/الياسمين.svg" },
      { name: "زهر البرتقال (Orange Blossom)", img: "notes/rare-gold/زهر البرتقال.svg" },
      { name: "الغاردينيا (Gardenia)", img: "notes/rare-gold/الغاردينيا.svg" },
      { name: "الألدهيدات (Aldehydes)", img: "notes/rare-gold/الألدهيدات.svg" },
      { name: "التيوبروز (Tuberose)", img: "notes/rare-gold/مسك الروم.svg" }
    ],

    base: [
      { name: "العنبر (Amber)", img: "notes/rare-gold/العنبر.svg" },
      { name: "خشب الصندل (Sandalwood)", img: "notes/rare-gold/خشب الصندل.svg" },
      { name: "الفانيليا (Vanilla)", img: "notes/rare-gold/الفانيليا.svg" },
      { name: "الأخشاب العامة (Woodsy Notes)", img: "notes/rare-gold/الأخشاب.svg" },
      { name: "المسك (Musk)", img: "notes/rare-gold/المسك.svg" }
    ]
  },

  rating: 4
},

  "good-girl": {
    name: "جود جيرل",
  brand: "Carolina Herrera",
  simulation: "محاكاة (بديل للأصلي)",
  img: "women img/Good Girl.svg",
  description: "عطر جريء ومثير بلمسة أنثوية قوية وأناقة بارزة.",
  sizes: [
    { size: "30 مل", price: 175 },
    { size: "50 مل", price: 225 },
    { size: "100 مل", price: 350 }
  ],

  descriptionDetails: {
    main: "عطر جود جيرل من كارولينا هيريرا هو عطر شرقي زهري للنساء. أُطلق عام ٢٠١٦، وهو من ابتكار لويز تيرنر وكوينتين بيش. تتكون مقدمة العطر من اللوز والقهوة والبرغموت والليمون؛ وقلب العطر من مسك الروم والياسمين السامباك وزهر البرتقال والورد البلغاري والسوسن؛ وقاعدة العطر من حبوب التونكا والكاكاو والفانيليا والبرالين وخشب الصندل والمسك والعنبر وخشب الكشمير والباتشولي والقرفة وخشب الأرز",

    top: [
      { name: "اللوز (Almond)", img: "notes/goodGirl/اللوز.svg" },
      { name: "القهوة (Coffee)", img: "notes/goodGirl/القهوه.svg" },
      { name: "البرغموت (Bergamot)", img: "notes/goodGirl/البرغموت.svg" },
      { name: "الليمون (Lemon)", img: "notes/goodGirl/الليمون.svg" }
    ],

    middle: [
      { name: "الياسمين سامباك (Jasmine Sambac)", img: "notes/goodGirl/ياسمين سامباك.svg" },
      { name: "مسك الروم (Tuberose)", img: "notes/goodGirl/مسك الروم.svg" },
      { name: "الورد البلغاري (Bulgarian Rose)", img: "notes/goodGirl/الورد البلغاري.svg" },
      { name: " السوسن (iris)", img: "notes/goodGirl/السوسن.svg" },
      { name: "زهرة البرتقال (Orange Blossom)", img: "notes/goodGirl/زهر البرتقال.svg" }
    ],

    base: [
      { name: "حبوب التونكا (Tonka Bean)", img: "notes/goodGirl/حبوب التونكا.svg" },
      { name: "الكاكاو (Cocoa)", img: "notes/goodGirl/الكاكاو.svg" },
      { name: "الفانيليا (Vanilla)", img: "notes/goodGirl/الفانيليا.svg" },
      { name: "خشب الصندل (Sandalwood)", img: "notes/goodGirl/خشب الصندل.svg" },
      { name: "الباتشولي (Patchouli)", img: "notes/goodGirl/الباتشولي.svg" },
      { name: "المسك (Musk)", img: "notes/goodGirl/المسك.svg" },
      { name: "العنبر (Amber)", img: "notes/goodGirl/العنبر.svg" },
      { name: "خشب الأرز (Cedar)", img: "notes/goodGirl/خشب الأرز.svg" },
      { name: "القرفة (Cinnamon)", img: "notes/goodGirl/القرفة.svg" },
      { name: "خشب الكشمير (Cashmere Wood)", img: "notes/goodGirl/أخشاب الكشمير.svg" }
    ]
  },

  rating: 5
},

  "see-passion": {
  name: "سي باشن",
  brand: "Giorgio Armani",
  simulation: "محاكاة (بديل للأصلي)",
  img: "women img/Sì Passione.svg",
  description: "عطر أنثوي أنيق برائحة جذابة وحيوية يناسب المرأة الواثقة والمفعمة بالشغف.",
  sizes: [
    { size: "30 مل", price: 175 },
    { size: "50 مل", price: 225 },
    { size: "100 مل", price: 350 }
  ],

  descriptionDetails: {
    main: "عطر سي باشون من جورجيو أرماني هو عطر زهري فاكهي للنساء. أُطلق عام ٢٠١٧، وهو من ابتكار كريستين ناجل وجولي ماسيه. تتكون مقدمة العطر من الكمثرى، الكشمش الأسود، الفلفل الوردي، والجريب فروت؛ أما قلب العطر فيتكون من الأناناس، الورد، الياسمين، وزهرة رقيب الشمس؛ بينما تتكون قاعدة العطر من الفانيليا، خشب الأرز، الباتشولي، وخشب العنبر",

    top: [
      { name: "الكمثرى (Pear)", img: "notes/see-passion/الكمثري.svg" },
      { name: "الكشمش الأسود (Black Currant)", img: "notes/see-passion/الكشمش الأسود.svg" },
      { name: "الفلفل الوردي (Pink Pepper)", img: "notes/see-passion/الفلفل الوردي.svg" },
      { name: "الجريب فروت (Grapefruit)", img: "notes/see-passion/الجريب فروت.svg" }
    ],

    middle: [
      { name: "الأناناس (Pineapple)", img: "notes/see-passion/الأناناس.svg" },
      { name: "الورد (Rose)", img: "notes/see-passion/الورد.svg" },
      { name: "الياسمين (Jasmine)", img: "notes/see-passion/الياسمين.svg" },
      { name: "الهليوتروب (Heliotrope)", img: "notes/see-passion/الهيلوتروب.svg" }
    ],

    base: [
      { name: "الفانيليا (Vanilla)", img: "notes/see-passion/الفانيليا.svg" },
      { name: "خشب الأرز (Cedarwood)", img: "notes/see-passion/خشب الأرز.svg" },
      { name: "العنبر الخشبي (Amberwood)", img: "notes/see-passion/خشب العنبر.svg" },
      { name: "الباتشولي (Patchouli)", img: "notes/see-passion/الباتشولي.svg" }
    ]
  },

  rating: 4
},
"see-armani": {
  name: "سي أرماني",
  brand: "Giorgio Armani",
  simulation: "محاكاة (بديل للأصلي)",
  img: "women img/Sì Armani.svg",
  description: "عطر كلاسيك راقي يعكس الأناقة والجاذبية بأسلوب أنثوي راقي.",
  sizes: [
    { size: "30 مل", price: 175 },
    { size: "50 مل", price: 225 },
    { size: "100 مل", price: 350 }
  ],

  descriptionDetails: {
    main: "عطر  من جورجيو أرماني هو عطر شيبر فاكهي للنساء. أُطلق عام ٢٠١٣. مصممة هذا العطر هي كريستين ناجل. مقدمة العطر: الكشمش الأسود؛ قلب العطر: ورد مايو والفريزيا؛ قاعدة العطر: الفانيليا والباتشولي ونفحات خشبية وأمبروكسان",

    top: [
      { name: "الكشمش الأسود (Blackcurrant / Cassis)", img: "notes/see-armani/الكشمش الأسود.svg" },
      // بعض المصادر ذكرت أنه ممكن يكون له لمسات من البرغموت أو اليوسفي في الإصدارات القديمة، لكن الكشمش الأسود هو العنصر الرئيسي. 0
    ],

    middle: [
      { name: "وردة مايو (May Rose)", img: "notes/see-armani/ورد ماي.svg" },
      { name: "زهرة الفريزيا (Freesia)", img: "notes/see-armani/الفريزيا.svg" }
    ],

    base: [
      { name: "الفانيليا (Vanilla)", img: "notes/see-armani/الفانيليا.svg" },
      { name: "الباتشولي (Patchouli)", img: "notes/see-armani/الباتشولي.svg" },
      { name: "أمبروكسان (Ambroxan)", img: "notes/see-armani/الأمبروكسان.svg" }
    ]
  },

  rating: 4
},

  bonbon: {
  name: "بونبون",
  brand: "Viktor & Rolf",
  simulation: "محاكاة (بديل للأصلي)",
  img: "women img/Bonbon.svg",
  description: "عطر حلو ودافئ بلمسة أنثوية جذابة بطابع حلوى الكراميل والفواكه.",
  sizes: [
    { size: "30 مل", price: 175 },
    { size: "50 مل", price: 225 },
    { size: "100 مل", price: 350 }
  ],

  descriptionDetails: {
    main: "عطر بونبون من فيكتور آند رولف هو عطر زهري فاكهي ذو نفحات حلوة للنساء. أُطلق بونبون عام ٢٠١٤. ابتكره كل من سيسيل ماتون وسيرج ماجولييه. تتكون مقدمة العطر من الخوخ واليوسفي والبرتقال؛ وقلب العطر من الكراميل وزهر البرتقال والياسمين؛ وقاعدة العطر من العنبر وخشب الصندل وخشب الغاياك وخشب الأرز",

    top: [
      { name: "الخوخ (Peach)", img: "notes/bonbon/الخوخ.svg" },
      { name: "الماندرين (Mandarin Orange)", img: "notes/bonbon/الماندرين (اليوسفي).svg" },
      { name: "البرتقال (Orange)", img: "notes/bonbon/البرتقال.svg" }
    ],

    middle: [
      { name: "الكراميل (Caramel)", img: "notes/bonbon/الكاراميل.svg" },
      { name: "زهر البرتقال (Orange Blossom)", img: "notes/bonbon/زهر البرتقال.svg" },
      { name: "الياسمين (Jasmine)", img: "notes/bonbon/الياسمين.svg" }
    ],

    base: [
      { name: "العنبر (Amber)", img: "notes/bonbon/العنبر.svg" },
      { name: "خشب الصندل (Sandalwood)", img: "notes/bonbon/خشب الصندل.svg" },
      { name: "أخشاب الغاياك (Guaiac Wood)", img: "notes/bonbon/أخشاب الغاياك.svg" },
      { name: "خشب الأرز (Cedarwood)", img: "notes/bonbon/خشب الأرز.svg" }
    ]
  },

  rating: 4
},

 scandal: {
  name: "سكاندل",
  brand: "Jean Paul Gaultier",
  simulation: "محاكاة (بديل للأصلي)",
  img: "women img/SCANDAL.svg",
  description: "عطر جريء وقوي مناسب للشخصيات الواثقة بلمسة حلوة جذابة.",
  sizes: [
    { size: "30 مل", price: 175 },
    { size: "50 مل", price: 225 },
    { size: "100 مل", price: 350 }
  ],

  descriptionDetails: {
    main: "عطر سكاندال من جان بول غوتييه هو عطر زهري قبرصي للنساء. أُطلق سكاندال عام ٢٠١٧. ابتكره كل من دافني بوجي، وفابريس بيليغرين، وكريستوف رينو. تتكون مقدمة العطر من البرتقال الأحمر واليوسفي؛ وقلبه من العسل، والغاردينيا، وزهر البرتقال، والياسمين، والخوخ؛ أما قاعدته فتتكون من شمع العسل، والكراميل، والباتشولي، والعرقسوس",

    top: [
      { name: "البرتقال الأحمر (Blood Orange)", img: "notes/scandal/البرتقال الأحمر.svg" },
      { name: "اليوسفي (Mandarin Orange)", img: "notes/scandal/الماندرين (اليوسفي).svg" }
    ],

    middle: [
      { name: "العسل (Honey)", img: "notes/scandal/العسل.svg" },
      { name: "الغاردينيا (Gardenia)", img: "notes/scandal/الغاردينيا.svg" },
      { name: "زهر البرتقال (Orange Blossom)", img: "notes/scandal/زهر البرتقال.svg" },
      { name: "الياسمين (Jasmine)", img: "notes/scandal/الياسمين.svg" },
      { name: "الخوخ (Peach)", img: "notes/scandal/الخوخ.svg" }
    ],

    base: [
      { name: "شمع العسل (Beeswax)", img: "notes/scandal/شمع العسل.svg" },
      { name: "الكراميل (Caramel)", img: "notes/scandal/الكاراميل.svg" },
      { name: "الباتشولي (Patchouli)", img: "notes/scandal/الباتشولي.svg" },
      { name: "العرقسوس (Licorice)", img: "notes/scandal/العرقسوس.svg" }
    ]
  },

  rating: 4
},

  "ralph-lauren": {
  name: "لارف لارين",
  brand: "Ralph Lauren",
  simulation: "محاكاة (بديل للأصلي)",
  img: "women img/_Ralph Lauren.svg",
  description: "عطر أنيق بروح كلاسيكية فاخرة ممزوج بزهور بيضاء وفواكه منعشة.",
  sizes: [
    { size: "30 مل", price: 175 },
    { size: "50 مل", price: 225 },
    { size: "100 مل", price: 350 }
  ],

  descriptionDetails: {
    main: "عطر وومان باي رالف لورين هو عطر زهري للنساء. أُطلق هذا العطر عام ٢٠١٧، وهو من ابتكار آن فليبو. تتكون مقدمة العطر من الكمثرى والكشمش الأسود والراوند، وقلبه من مسك الروم وزهر البرتقال والورد التركي، وقاعدته من البندق وخشب الصندل ونفحات خشبية",

    top: [
      { name: "الكمثري (Pear)", img: "notes/ralph-lauren/الكمثري.svg" },
      { name: "الكشمش الأسود (Black Currant)", img: "notes/ralph-lauren/الكشمش الأسود.svg" },
      { name: "الراوند (Rhubarb)", img: "notes/ralph-lauren/الراوند.svg" }
    ],

    middle: [
      { name: "مسك الروم (Tuberose)", img: "notes/ralph-lauren/مسك الروم.svg" },
      { name: "زهر البرتقال (Orange Blossom)", img: "notes/ralph-lauren/زهر البرتقال.svg" },
      { name: "الورد التركي (Turkish Rose)", img: "notes/ralph-lauren/الورد التركي.svg" }
    ],

    base: [
      { name: "البندق (Hazelnut)", img: "notes/ralph-lauren/البندق.svg" },
      { name: "خشب الصندل (Sandalwood)", img: "notes/ralph-lauren/خشب الصندل.svg" },
      { name: "الأخشاب (Woody Notes)", img: "notes/ralph-lauren/الأخشاب.svg" }
    ]
  },

  rating: 4
},

  "paris-hilton": {
  name: "باريس هيلتون",
  brand: "Paris Hilton",
  simulation: "محاكاة (بديل للأصلي)",
  img: "women img/Paris Hilton.svg",
  description: "عطر شبابي أنثوي بلمسة مرحة ومنعشة بطابع زهري–فاكهي كلاسيكي.",
  sizes: [
    { size: "30 مل", price: 175 },
    { size: "50 مل", price: 225 },
    { size: "100 مل", price: 350 }
  ],

  descriptionDetails: {
    main: "عطر باريس هيلتون من باريس هيلتون هو عطر زهري فاكهي للنساء. أُطلق باريس هيلتون عام ٢٠٠٥. ابتكره ستيف ديميركادو وجيمس كريفدا. تتكون مقدمة العطر من الشمام والتفاح والخوخ؛ وقلبه من الفريزيا والميموزا والياسمين وزنبق الوادي والزنبق ومسك الروم؛ وقاعدته من المسك والإيلنغ وخشب الصندل وطحلب السنديان",

    top: [
      { name: "شمام (Melon)", img: "notes/paris-hilton/شمام.svg" },
      { name: "التفاح (Apple)", img: "notes/paris-hilton/التفاح.svg" },
      { name: "الخوخ (Peach)", img: "notes/paris-hilton/الخوخ.svg" }
    ],

    middle: [
      { name: "الفريزيا (Freesia)", img: "notes/paris-hilton/الفريزيا.svg" },
      { name: "الميموزا (Mimosa)", img: "notes/paris-hilton/الميموزا.svg" },
      { name: "الياسمين (Jasmine)", img: "notes/paris-hilton/الياسمين.svg" },
      { name: "زنابق الوادي (Lily‑of‑the‑Valley)", img: "notes/paris-hilton/زنابق الوادي.svg" },
      { name: "الزنبق (Lily)", img: "notes/paris-hilton/الزنبق.svg" },
      { name: "مِسك الروم (Tuberose)", img: "notes/paris-hilton/مسك الروم.svg" }
    ],

    base: [
      { name: "المسك (Musk)", img: "notes/paris-hilton/المسك.svg" },
      { name: "الإيلنغ (Ylang‑ylang)", img: "notes/paris-hilton/الإيلنغ.svg" },
      { name: "خشب الصندل (Sandalwood)", img: "notes/paris-hilton/خشب الصندل.svg" },
      { name: "طحلب البلوط (Oakmoss)", img: "notes/paris-hilton/طحلب البلوط (طحلب السنديان).svg" }
    ]
  },

  rating: 4
},

 "gucci-rush": {
  name: "جوتشي راش",
  brand: "Gucci",
  simulation: "محاكاة (بديل للأصلي)",
  img: "women img/Gucci Rush.svg",
  description: "عطر قوي وجذاب بلمسة فاخرة يناسب المرأة الواثقة والأنيقة.",
  sizes: [
    { size: "30 مل", price: 175 },
    { size: "50 مل", price: 225 },
    { size: "100 مل", price: 350 }
  ],

  descriptionDetails: {
    main: "عطر غوتشي راش من غوتشي هو عطر شيبر فاكهي للنساء. أُطلق غوتشي راش عام ١٩٩٩. مصمم هذا العطر هو ميشيل ألمايراك. تتكون مقدمة العطر من الخوخ، والغاردينيا الكاليفورنية، وبتلات الفريزيا الأفريقية؛ أما قلب العطر فيتكون من الكزبرة، والورد الدمشقي، والياسمين؛ بينما تتكون قاعدة العطر من الباتشولي، والفانيليا الطبيعية، ونجيل الهند",

    top: [
      { name: "الخَوخ (Peach)", img: "notes/gucci-rush/الخوخ.svg" },
      { name: "غاردينيا كاليفورنيا (California Gardenia)", img: "notes/gucci-rush/غاردينيا كاليفورنيا.svg" },
      { name: "بتلات الفريزيا الأفريقية (African Freesia)", img: "notes/gucci-rush/بتلات الفريزيا الأفريقيه.svg" }
    ],

    middle: [
      { name: "الكزبرة (Coriander)", img: "notes/gucci-rush/الكزبرة.svg" },
      { name: "الورد الدمشقي (Damask Rose)", img: "notes/gucci-rush/الورد الدمشقي.svg" },
      { name: "الياسمين (Jasmine)", img: "notes/gucci-rush/الياسمين.svg" }
    ],

    base: [
      { name: "الباتشولي (Patchouli)", img: "notes/gucci-rush/الباتشولي.svg" },
      { name: "الفانيليا الطبيعية (Natural Vanilla)", img: "notes/gucci-rush/الفانيليا الطبيعية.svg" },
      { name: "نجيل الهند (Vetiver)", img: "notes/gucci-rush/نجيل الهند.svg" }
    ]
  },

  rating: 4
},

  "gucci-flora": {
  name: "جوتشي فلورا",
  brand: "Gucci",
  simulation: "محاكاة (بديل للأصلي)",
  img: "women img/Gucci Flora.svg",
  description: "عطر زهري–فاكهي أنثوي أنيق يجمع بين الزهور الحمضية والمكونات الخشبية الدافئة.",
  sizes: [
    { size: "30 مل", price: 175 },
    { size: "50 مل", price: 225 },
    { size: "100 مل", price: 350 }
  ],

  descriptionDetails: {
    main: "عطر فلورا من غوتشي أو دو بارفان هو عطر زهري للنساء. أُطلق عطر فلورا من غوتشي أو دو بارفان عام ٢٠١٠. تتكون مقدمة العطر من الفاوانيا والحمضيات واليوسفي؛ وقلب العطر من الأوسمانثوس والورد؛ وقاعدة العطر من خشب الصندل والباتشولي",

    top: [
      { name: "الفاوانيا", img: "notes/gucci-flora/الفاوانيا.svg" },
      { name: "الحمضيات", img: "notes/gucci-flora/الحمضيات.svg" },
      { name: "اليوسفي (الماندرين)", img: "notes/gucci-flora/الماندرين (اليوسفي).svg" }
    ],

    middle: [
      { name: "الأوسمانثوس", img: "notes/gucci-flora/أوسمانثوس.svg" },
      { name: "الورد", img: "notes/gucci-flora/الورد.svg" }
    ],

    base: [
      { name: "خشب الصندل", img: "notes/gucci-flora/خشب الصندل.svg" },
      { name: "الباتشولي", img: "notes/gucci-flora/الباتشولي.svg" }
    ]
  },

  rating: 4
},

  "white-chocolate": {
  name: "وايت شوكليت",
  brand: "Vior",
  img: "women img/White Chocola.svg",
  description: "عطر حلو ودافئ برائحة شوكولاتة مميزة ومزيج أنيق من الفانيليا والزهور.",
  section: "women",
  sizes: [
    { size: "30 مل", price: 175 },
    { size: "50 مل", price: 225 },
    { size: "100 مل", price: 350 }
  ],

  descriptionDetails: {
    main: "عطر وايت شوكولا من فيور هو عطر شرقي برائحة الفانيليا مناسب للجنسين. تتكون مقدمة العطر من اليوسفي وجوزة الطيب، وقلبه من الشوكولاتة البيضاء والفانيليا، وقاعدته من زهر اللوز وزهر الخوخ وزهر الكرز والميموزا",

    top: [
      { name: "اليوسفي (Mandarin Orange)", img: "notes/white-chocola/الماندرين (اليوسفي).svg" },
      { name: "جوزة الطيب (Nutmeg)", img: "notes/white-chocola/جوزه الطيب.svg" }
    ],

    middle: [
      { name: "الشوكولاتة البيضاء (White Chocolate)", img: "notes/white-chocola/الشيكولاته البيضاء.svg" },
      { name: "الفانيليا (Vanilla)", img: "notes/white-chocola/الفانيليا.svg" }
    ],

    base: [
      { name: "زهر اللوز (Almond Blossom)", img: "notes/white-chocola/زهر اللوز.svg" },
      { name: "زهر الخوخ (Peach Blossom)", img: "notes/white-chocola/زهر الخوخ.svg" },
      { name: "زهر الكرز (Cherry Blossom)", img: "notes/white-chocola/زهر الكرز.svg" },
      { name: "الميموزا (Mimosa)", img: "notes/white-chocola/الميموزا.svg" }
    ]
  },

  rating: 4
},
  "black-opium": {
  name: "بلاك اوبيوم",
  simulation: "محاكاة (بديل للأصلي)",
  brand: "Yves Saint Laurent",
  img: "women img/Black Opium.svg",
  description: "عطر أنثوي جريء بلمسة فاخرة ومميزة يجمع بين القهوة والفانيليا والزهور البيضاء.",
  sizes: [
    { size: "30 مل", price: 175 },
    { size: "50 مل", price: 225 },
    { size: "100 مل", price: 350 }
  ],

  descriptionDetails: {
    main: "عطر بلاك أوبيوم من إيف سان لوران هو عطر شرقي برائحة الفانيليا للنساء. أُطلق بلاك أوبيوم عام ٢٠١٤. ابتكره كل من ناتالي لورسون، وماري سلاماني، وأوليفييه كريسب، وهونورين بلان. تتكون مقدمة العطر من الكمثرى والفلفل الوردي وزهر البرتقال؛ وقلب العطر من القهوة والياسمين واللوز المر والعرقسوس؛ وقاعدة العطر من الفانيليا والباتشولي وخشب الكشمير وخشب الأرز",

    top: [
      { name: "الكمثرى (Pear)", img: "notes/black-opium/الكمثري.svg" },
      { name: "الفلفل الوردي (Pink Pepper)", img: "notes/black-opium/الفلفل الوردي.svg" },
      { name: "زهر البرتقال (Orange Blossom)", img: "notes/black-opium/زهر البرتقال.svg" }
    ],

    middle: [
      { name: "القهوة (Coffee)", img: "notes/black-opium/القهوه.svg" },
      { name: "الياسمين (Jasmine)", img: "notes/black-opium/الياسمين.svg" },
      { name: "اللوز المر (Bitter Almond)", img: "notes/black-opium/اللوز المر.svg" },
      { name: "العرقسوس (Licorice)", img: "notes/black-opium/العرقسوس.svg" }
    ],

    base: [
      { name: "الفانيليا (Vanilla)", img: "notes/black-opium/الفانيليا.svg" },
      { name: "الباتشولي (Patchouli)", img: "notes/black-opium/الباتشولي.svg" },
      { name: "أخشاب الكشمير (Cashmere Wood)", img: "notes/black-opium/أخشاب الكشمير.svg" },
      { name: "خشب الأرز (Cedarwood)", img: "notes/black-opium/خشب الأرز.svg" }
    ]
  },

  rating: 4
},

madawi: {
  name: "مضاوي",
  brand: "Arabian Oud",
  simulation: "محاكاة (بديل للأصلي)",
  img: "women img/Madawi.svg",
  description: "عطر نسائي شرقي فاكهي وزهري دافئ وراقي يناسب جميع الأوقات.",
  sizes: [
    { size: "30 مل", price: 250 },
    { size: "50 مل", price: 350 },
    { size: "100 مل", price: 450 }
  ],

  descriptionDetails: {
    main: "عطر مداوي من أرابيان عود هو عطر نسائي. أُطلق عطر مداوي عام ٢٠١٧. تتكون مقدمة العطر من الخوخ وزهر التفاح؛ وقلب العطر من زهر الأناناس؛ وقاعدة العطر من الورد البري والمسك والباتشولي",

    top: [
      { name: "الخوخ (Peach)", img: "notes/madawi/الخوخ.svg" },
      { name: "زهر التفاح (Apple Blossom)", img: "notes/madawi/زهر التفاح.svg" }
    ],

    middle: [
      { name: "زهر الأناناس (Pineapple Blossom)", img: "notes/madawi/زهر الأناناس.svg" }
    ],

    base: [
      { name: "الورد البري (Wild Rose)", img: "notes/madawi/الورد البري.svg" },
      { name: "المسك (Musk)", img: "notes/madawi/المسك.svg" },
      { name: "الباتشولي (Patchouli)", img: "notes/madawi/الباتشولي.svg" }
    ]
  },

  rating: 4
},

wasal: {
  name: "وصال",
  brand: "Ajmal",
  simulation: "محاكاة (بديل للأصلي)",
  img: "women img/Wisal.svg",
  description: "عطر شرقي زهري أنيق يناسب الاستخدام اليومي والمناسبات بروح شرقية جذابة.",
  sizes: [
    { size: "30 مل", price: 250 },
    { size: "50 مل", price: 350 },
    { size: "100 مل", price: 450 }
  ],
  descriptionDetails: {
    main: "عطر وصال من أجمل هو عطر زهري للنساء. تم إطلاق عطر وصال في عام 2010",
    top: [
      { name: "الورد", img: "notes/wasal/الورد.svg" },
      { name: "التوابل", img: "notes/wasal/التوابل.svg" }
    ],
    middle: [
      { name: "المسك", img: "notes/wasal/المسك.svg" },
      { name: "النوتات الزهرية", img: "notes/wasal/النوتات الزهرية.svg" },
    ],
    base: [
      { name: "خشب الصندل", img: "notes/wasal/خشب الصندل.svg" },
    ]
  },
  rating: 4
},

alfLayla: {
  name: "الف ليلة و ليلة",
  brand: "Ajmal",
  simulation: "محاكاة (بديل للأصلي)",
  img: "women img/1001Nights.svg",
  description: "عطر شرقي عودي-دافئ يجمع بين النفحات الشرقية الغنية والتوابل والودع مع لمسة أنثوية راقية.",
  sizes: [
    { size: "30 مل", price: 250 },
    { size: "50 مل", price: 350 },
    { size: "100 مل", price: 450 }
  ],

  descriptionDetails: {
    main: "عطر ألف ليل وليل من أجمل هو عطر زهري خشبي مسكي للنساء. أُطلق عطر ألف ليل وليل خلال العقد الأول من الألفية الثانية. مصمم هذا العطر هو نذير أجمل",

    top: [
      { name: "المسك", img: "notes/alfLayla/المسك.svg" },
      { name: "التوابل (Spices)", img: "notes/alfLayla/التوابل.svg" }
    ],

    middle: [
      { name: "النوتات الزهرية (Floral Notes)", img: "notes/alfLayla/النوتات الزهرية.svg" },
    ],

    base: [
      { name: "الأخشاب", img: "notes/alfLayla/الأخشاب.svg" },
    ]
  },

  rating: 4
},

shohrah: {
  name: "شهرة",
  brand: "Rasasi",
  simulation: "محاكاة (بديل للأصلي)",
  img: "women img/Shohra.svg",
  description: "عطر شرقي زهري دافئ وأنثوي يجمع بين الفواكه والزهور والمسك.",
  sizes: [
    { size: "30 مل", price: 250 },
    { size: "50 مل", price: 350 },
    { size: "100 مل", price: 450 }
  ],

  descriptionDetails: {
    main: "عطر شهرة بور فام من رصاصي هو عطر زهري قبرصي للنساء. تتكون مقدمة العطر من الليمون والمريمية؛ وقلب العطر من زنبق الوادي والياسمين والسوسن؛ وقاعدة العطر من الباتشولي والمسك والعود والعنبر",

     top: [
      { name: "الليمون", img: "notes/shohrah/الليمون.svg" },
      { name: "المريمية (Sage)", img: "notes/shohrah/المريمية.svg" }
    ],

    middle: [
      { name: "زنابق الوادي (Lily of the Valley)", img: "notes/shohrah/زنابق الوادي.svg" },
      { name: "الياسمين (Jasmine)", img: "notes/shohrah/الياسمين.svg" },
      { name: "السوسن (Iris)", img: "notes/shohrah/السوسن.svg" }
    ],

    base: [
      { name: "الباتشولي (Patchouli)", img: "notes/shohrah/الباتشولي.svg" },
      { name: "المسك (Musk)", img: "notes/shohrah/المسك.svg" },
      { name: "العود (Oud)", img: "notes/shohrah/العود.svg" },
      { name: "الآمبرغريس (Ambergris)", img: "notes/shohrah/الآمبرغريس.svg" }
    ]
  },


  rating: 4
},

  // يمكن إضافة باقي المنتجات بنفس الأسلوب
};
const unisexProducts = {
  kalemat: {
    name: "كلمات",
    brand: "Arabian Oud",
    simulation: "محاكاة (بديل للأصلي)",
    img: "unisex img/Kalemat.svg",
    description: "عطر تركيب شرقي مميز بروائح غنية وفاخرة تناسب جميع الأوقات.",
    sizes: [
      { size: "30 مل", price: 250 },
      { size: "50 مل", price: 350 },
      { size: "100 مل", price: 450 }
    ],
    descriptionDetails: {
      main: "كلمات من أرابيان عود هو عطر شرقي للجنسين. تتكون مقدمة العطر من التوت الأزرق واليانسون؛ أما قلب العطر فيتكون من خشب الكشمير والنفحات الزهرية وإكليل الجبل؛ بينما تتكون قاعدة العطر من العنبر والعسل والمسك",
      top: [
        { name: "التوت الأزرق", img: "notes/kalemat/التوت الأزرق.svg" },
        { name: "الينسون", img: "notes/kalemat/الينسون.svg" }
      ],
      middle: [
        { name: "أخشاب الكشمير", img: "notes/kalemat/أخشاب الكشمير.svg" },
        { name: "النوتات الزهرية", img: "notes/kalemat/النوتات الزهرية.svg" },
        { name: "إكليل الجبل", img: "notes/kalemat/إكليل الجبل.svg" }
      ],
      base: [
        { name: "العنبر", img: "notes/kalemat/العنبر.svg" },
        { name: "المسك", img: "notes/kalemat/المسك.svg" },
        { name: "العسل", img: "notes/kalemat/العسل.svg" }
      ]
    },
    rating: 4
  },

  khomrah: {
    name: "خمره",
    brand: "Lattafa Perfumes",
    simulation: "محاكاة (بديل للأصلي)",
    img: "unisex img/Khomrah.svg",
    description: "عطر شرقي فخم يناسب جميع الأوقات للجنسين.",
    sizes: [
      { size: "30 مل", price: 250 },
      { size: "50 مل", price: 350 },
      { size: "100 مل", price: 450 }
    ],
    descriptionDetails: {
      main: "عطر خمره من لطافة للعطور هو عطر شرقي حار للجنسين. أُطلق عطر خامرا عام ٢٠٢٢. تتكون مقدمة العطر من القرفة وجوزة الطيب والبرغموت؛ وقلب العطر من التمر والبرالين ومسك الروم والماهوجني؛ وقاعدة العطر من الفانيليا وحبوب التونكا وخشب العنبر والمر والجاوي وخشب الأكيجالا",
      top: [
        { name: "القرفة", img: "notes/khomrah/القرفة.svg" },
        { name: "جوزه الطيب", img: "notes/khomrah/جوزه الطيب.svg" },
        { name: "البرغموت", img: "notes/khomrah/البرغموت.svg" }
      ],
      middle: [
        { name: "التمر/البلح", img: "notes/khomrah/التمر.svg" },
        { name: "حلوي اللوز", img: "notes/khomrah/حلوي اللوز.svg" },
        { name: "مسك الروم", img: "notes/khomrah/مسك الروم.svg" },
        { name: "ماهونيال", img: "notes/khomrah/ماهونيال.svg" }
      ],
      base: [
        { name: "الفانيليا", img: "notes/khomrah/الفانيليا.svg" },
        { name: "حبوب التونكا", img: "notes/khomrah/حبوب التونكا.svg" },
        { name: "خشب العنبر", img: "notes/khomrah/خشب العنبر.svg" },
        { name: "المر", img: "notes/khomrah/المر.svg" },
        { name: "البنزوين - الجاوي", img: "notes/khomrah/البنزوين - الجاوي.svg" },
        { name: "أكيغالاوود", img: "notes/khomrah/أكيغالاوود.svg" }
      ]
    },
    rating: 4
  },

bouquet: {
  name: "بوكيه",
  brand: "Lancôme",
  simulation: "محاكاة (بديل للأصلي)",
  img: "unisex img/Bouquet.svg",
  description: "عطر شرقي زهري غني للجنسين بلمسة دافئة وفاخرة.",
  sizes: [
    { size: "30 مل", price: 250 },
    { size: "50 مل", price: 350 },
    { size: "100 مل", price: 450 }
  ],
  descriptionDetails: {
    main: "عطر عود بوكيه من لانكوم هو عطر شرقي خشبي للجنسين. أُطلق عطر عود بوكيه عام ٢٠١٦، وهو من ابتكار خبير العطور فابريس بيليغرين",

    top: [
      { name: "حلوي اللوز", img: "notes/bouquet/حلوي اللوز.svg" },
      { name: "الفانيليا", img: "notes/bouquet/الفانيليا.svg" }
    ],

    middle: [
      { name: "الورد", img: "notes/bouquet/الورد.svg" },
      { name: "العود", img: "notes/bouquet/العود.svg" }
    ],

    base: [
      { name: "أخشاب الغاياك", img: "notes/bouquet/أخشاب الغاياك.svg" },
      { name: "بسلم كوباهو", img: "notes/bouquet/بسلم كوباهو.svg" }
    ]
  },
  rating: 4
},

  blackAfghano: {
  name: "بلاك افغانو",
  brand: "Nasomatto",
  simulation: "محاكاة (بديل للأصلي)",
  img: "unisex img/Black Afgano.svg",
  description: "عطر غربي فاخر يناسب الجنسين، قوي وغامض بطابع داكن.",
  sizes: [
    { size: "30 مل", price: 175 },
    { size: "50 مل", price: 225 },
    { size: "100 مل", price: 350 }
  ],

  descriptionDetails: {
    main: "عطر بلاك أفغانو من ناسوماتو هو عطر خشبي عطري للجنسين. أُطلق بلاك أفغانو عام ٢٠٠٩، وهو من ابتكار أليساندرو غوالتيري. تتكون مقدمة العطر من القنب، والنفحات الخضراء، والدافانا، والزعفران، والزعتر؛ أما قلب العطر فيتكون من الراتنجات، والنفحات الخشبية، والتبغ، والقهوة، والقرفة، والبنفسج، والتوت؛ بينما تتكون قاعدة العطر من العود، والبخور، والعنبر، والنفحات الحيوانية، وخشب الغاياك، والمسك، والتونكا، وخشب الأرز، وبلسم الجرجان، والأمبروكسان، والفانيليا",

    top: [
      { name: "القنب", img: "notes/blackAfghano/القنب.svg" },
      { name: "النوتات الخضراء", img: "notes/blackAfghano/النوتات الخضراء.svg" },
      { name: "الدافانا", img: "notes/blackAfghano/الدافانا.svg" },
      { name: "الزعفران", img: "notes/blackAfghano/الزعفران.svg" },
      { name: "الزعتر", img: "notes/blackAfghano/الزعتر.svg" }
    ],

    middle: [
      { name: "الراتينجات", img: "notes/blackAfghano/الراتينجات.svg" },
      { name: "الأخشاب", img: "notes/blackAfghano/الأخشاب.svg" },
      { name: "التبغ", img: "notes/blackAfghano/التبغ.svg" },
      { name: "القهوة", img: "notes/blackAfghano/القهوه.svg" },
      { name: "القرفة", img: "notes/blackAfghano/القرفة.svg" },
      { name: "البنفسج", img: "notes/blackAfghano/البنفسج.svg" },
      { name: "توت العليق", img: "notes/blackAfghano/توت العليق.svg" }
    ],

    base: [
      { name: "العود", img: "notes/blackAfghano/العود.svg" },
      { name: "البخور", img: "notes/blackAfghano/البخور.svg" },
      { name: "العنبر", img: "notes/blackAfghano/العنبر.svg" },
      { name: "نوتة حيوانية", img: "notes/blackAfghano/نوتة حيوانية.svg" },
      { name: "أخشاب الغاياك", img: "notes/blackAfghano/أخشاب الغاياك.svg" },
      { name: "المسك", img: "notes/blackAfghano/المسك.svg" },
      { name: "حبوب التونكا", img: "notes/blackAfghano/حبوب التونكا.svg" },
      { name: "خشب الأرز", img: "notes/blackAfghano/خشب الأرز.svg" },
      { name: "بلسم غرجان", img: "notes/blackAfghano/بلسم غرجان.svg" },
      { name: "الأمبروكسان", img: "notes/blackAfghano/الأمبروكسان.svg" },
      { name: "الفانيليا", img: "notes/blackAfghano/الفانيليا.svg" }
    ]
  },

  rating: 4
},

arbaBora: {
  name: "اربا بورا",
  brand: "Xerjoff",
  simulation: "محاكاة (بديل للأصلي)",
  img: "unisex img/Erba Pura.svg",
  description: "عطر شرقي فاخر يناسب جميع الأوقات للجنسين.",
  sizes: [
    { size: "30 مل", price: 250 },
    { size: "50 مل", price: 350 },
    { size: "100 مل", price: 450 }
  ],

  descriptionDetails: {
    main: "عطر إربا بورا من زيرجوف هو عطر شرقي للجنسين. أُطلق عام ٢٠١٩، وهو من ابتكار كريستيان كاربونيل ولورا سانتاندير. تتكون مقدمة العطر من البرتقال الصقلي، والبرغموت الكالابري، والليمون الصقلي؛ أما قلب العطر فيتكون من الفواكه؛ بينما تتكون قاعدة العطر من المسك الأبيض، وفانيليا مدغشقر، والعنبر",

    top: [
      { name: "البرتقال الصقلي", img: "notes/arbaBora/البرتقال الصقلي.svg" },
      { name: "برغموت كالابريا", img: "notes/arbaBora/برغموت كالابريا.svg" },
      { name: "الليمون الصقلي", img: "notes/arbaBora/الليمون الصقلي.svg" }
    ],

    middle: [
      { name: "الفواكه", img: "notes/arbaBora/الفواكه.svg" }
    ],

    base: [
      { name: "المسك الأبيض", img: "notes/arbaBora/المسك الأبيض.svg" },
      { name: "فانيليا مدغشقر", img: "notes/arbaBora/فانيليا مدغشقر.svg" },
      { name: "العنبر", img: "notes/arbaBora/العنبر.svg" }
    ]
  },

  rating: 4
},

oudMode: {
  name: "عود مود",
  brand: "Lattafa Perfumes",
  simulation: "محاكاة (بديل للأصلي)",
  img: "unisex img/Oud Mood.svg",
  description: "عطر شرقي فاخر يناسب الجنسين، غني بالعود والمسك.",
  sizes: [
    { size: "30 مل", price: 250 },
    { size: "50 مل", price: 350 },
    { size: "100 مل", price: 450 }
  ],

  descriptionDetails: {
    main: "عطر عود مود من لطافة للعطور هو عطر للجنسين. تتكون مقدمة العطر من الورد والزعفران والفلفل الحلو؛ أما قلب العطر فيتكون من العود والكراميل والنفحات الزهرية والباتشولي؛ بينما تتكون قاعدة العطر من النفحات الخشبية والعنبر والراتنجات والبخور والمسك",

    top: [
      { name: "الورد", img: "notes/oudMode/الورد.svg" },
      { name: "الزعفران", img: "notes/oudMode/الزعفران.svg" },
      { name: "الفلفل الحلو الاسباني", img: "notes/oudMode/الفلفل الحلو الاسباني.svg" }
    ],

    middle: [
      { name: "العود", img: "notes/oudMode/العود.svg" },
      { name: "الكاراميل", img: "notes/oudMode/الكاراميل.svg" },
      { name: "النوتات الزهرية", img: "notes/oudMode/النوتات الزهرية.svg" },
      { name: "الباتشولي", img: "notes/oudMode/الباتشولي.svg" }
    ],

    base: [
      { name: "الأخشاب", img: "notes/oudMode/الأخشاب.svg" },
      { name: "العنبر", img: "notes/oudMode/العنبر.svg" },
      { name: "الراتينجات", img: "notes/oudMode/الراتينجات.svg" },
      { name: "البخور", img: "notes/oudMode/البخور.svg" },
      { name: "المسك", img: "notes/oudMode/المسك.svg" }
    ]
  },

  rating: 4
},

bukratRouge: {
  name: "بكرات روج 540",
  brand: "Maison Francis Kurkdjian",
  simulation: "محاكاة (بديل للأصلي)",
  img: "unisex img/Baccarat Rouge 540.svg",
  description: "عطر غربي فاخر يناسب الجنسين برائحة حلوة ودافئة.",
  sizes: [
    { size: "30 مل", price: 175 },
    { size: "50 مل", price: 225 },
    { size: "100 مل", price: 350 }
  ],
  descriptionDetails: {
    main: "عطر باكارات روج 540 إكسترا دو بارفان من دار فرانسيس كوركدجيان هو عطر شرقي زهري للجنسين. أُطلق هذا العطر عام 2017، وهو من ابتكار فرانسيس كوركدجيان. تتكون مقدمة العطر من اللوز المر والزعفران، وقلبه من الياسمين المصري وخشب الأرز الفرجيني، أما قاعدته فتتكون من العنبر والنفحات الخشبية والمسك والأمبروكسان والكشميران",

    top: [
      { name: "اللوز المر", img: "notes/bukratRouge/اللوز المر.svg" },
      { name: "الزعفران", img: "notes/bukratRouge/الزعفران.svg" }
    ],

    middle: [
      { name: "الفل", img: "notes/bukratRouge/الفل.svg" },
      { name: "خشب الأرز من فرجينيا", img: "notes/bukratRouge/خشب الأرز من فرجينيا.svg" }
    ],

    base: [
      { name: "الآمبرغريس", img: "notes/bukratRouge/الآمبرغريس.svg" },
      { name: "الأخشاب", img: "notes/bukratRouge/الأخشاب.svg" },
      { name: "المسك", img: "notes/bukratRouge/المسك.svg" },
      { name: "الأمبروكسان", img: "notes/bukratRouge/الأمبروكسان.svg" },
      { name: "أخشاب الكشمير", img: "notes/bukratRouge/أخشاب الكشمير.svg" }
    ]
  },
  rating: 4
},

tobaccoVanilla: {
  name: "توباكو فانيليا",
  brand: "Tom Ford",
  simulation: "محاكاة (بديل للأصلي)",
  img: "unisex img/Tobacco Vanille.svg",
  description: "عطر غربي غني يناسب الجنسين، مع نفحات التبغ والتوابل والفانيليا.",
  sizes: [
    { size: "30 مل", price: 175 },
    { size: "50 مل", price: 225 },
    { size: "100 مل", price: 350 }
  ],

  descriptionDetails: {
    main: "عطر توباكو فانيلا من توم فورد هو عطر شرقي حار للجنسين. أُطلق توباكو فانيلا عام ٢٠٠٧، وهو من ابتكار خبير العطور أوليفييه جيلوتين. تتكون مقدمة العطر من أوراق التبغ ونفحات حارة، وقلبه من الفانيليا والكاكاو وحبوب التونكا وزهر التبغ، وقاعدته من الفواكه المجففة والنفحات الخشبية",

    top: [
      { name: "أوراق التبغ", img: "notes/tobaccoVanilla/أوراق التبغ.svg" },
      { name: "رائحة التوابل", img: "notes/tobaccoVanilla/رائحه التوابل.svg" }
    ],

    middle: [
      { name: "الفانيليا", img: "notes/tobaccoVanilla/الفانيليا.svg" },
      { name: "الكاكاو", img: "notes/tobaccoVanilla/الكاكاو.svg" },
      { name: "حبوب التونكا", img: "notes/tobaccoVanilla/حبوب التونكا.svg" },
      { name: "زهر التبغ", img: "notes/tobaccoVanilla/زهر التبغ.svg" }
    ],

    base: [
      { name: "الفواكه المجففة", img: "notes/tobaccoVanilla/الفواكه المجففة.svg" },
      { name: "الأخشاب", img: "notes/tobaccoVanilla/الأخشاب.svg" }
    ]
  },

  rating: 4
},

miskAbyad: {
  name: "مسك أبيض",
  brand: "Swiss Arabian",
  img: "unisex img/Musk.svg",
  description: "عطر شرقي ناعم يناسب الجنسين.",
  sizes: [
    { size: "30 مل", price: 250 },
    { size: "50 مل", price: 350 },
    { size: "100 مل", price: 450 }
  ],
  descriptionDetails: {
    main: "مسك أبيض عطر خفيف وناعم للجنسين.",
    top: [
      { name: "الإيلنغ", img: "notes/miskAbyad/الإيلنغ.svg" }
    ],
    middle: [
      { name: "أوراق البنفسج", img: "notes/miskAbyad/أوراق البنفسج.svg" }
    ],
    base: [
      { name: "المسك", img: "notes/miskAbyad/المسك.svg" }
    ]
  },
  rating: 4
},

miskRoman: {
    name: "مسك رمان",
    brand: "Swiss Arabian",
    img: "unisex img/Musk.svg",
    description: "عطر شرقي غني يناسب الجنسين.",
    sizes: [
      { size: "30 مل", price: 250 },
      { size: "50 مل", price: 350 },
      { size: "100 مل", price: 450 }
    ],
    descriptionDetails: {
      main: "مسك رمان بنفحات الفواكه والزهور يناسب جميع الأوقات للجنسين.",
      top: [
        { name: "الرمان", img: "notes/miskRoman/الرمان.svg" },
        { name: "القرفة", img: "notes/miskRoman/القرفة.svg" }
      ],
      middle: [
        { name: "العود", img: "notes/miskRoman/العود.svg" },
        { name: "خشب الصندل", img: "notes/miskRoman/خشب الصندل.svg" }
      ],
      base: [
        { name: "المسك", img: "notes/miskRoman/المسك.svg" },
        { name: "الفانيليا", img: "notes/miskRoman/الفانيليا.svg" }
      ]
    },
    rating: 4
  }
  // وهكذا لبقية المنتجات…
};
// =====================
// المنتجات Semi (بدون اختيار حجم)
// =====================
const semiProducts = {
  aventus: {
    name: "كريد أفينتوس",
    brand: "Creed",
    img: "semi img/Aventus Creed.svg",
    description: "عطر فاخر للنساء والرجال، يجمع بين الروائح الخشبية والفواكه الغنية.",
    price: 650, // السعر ثابت للـ Semi
    isSemi: true,
    descriptionDetails: {
      main: "أفينتوس من كريد هو عطر شيبر فاكهي للرجال. أُطلق أفينتوس عام ٢٠١٠. ابتكره جان كريستوف هيرولت وإروين كريد. تتكون مقدمة العطر من البرغموت، الكشمش الأسود، التفاح، الليمون، والفلفل الوردي؛ أما قلب العطر فيتكون من الأناناس، الباتشولي، والياسمين المغربي؛ بينما تتكون قاعدة العطر من البتولا، المسك، طحلب البلوط، خشب الأرز، والأمبروكسان",

      top: [
      { name: "البرغموت", img: "notes/creedAventus/البرغموت.svg" },
      { name: "الكشمش الأسود", img: "notes/creedAventus/الكشمش الأسود.svg" },
      { name: "التفاح", img: "notes/creedAventus/التفاح.svg" },
      { name: "الليمون", img: "notes/creedAventus/الليمون.svg" },
      { name: "الفلفل الوردي", img: "notes/creedAventus/الفلفل الوردي.svg" }
    ],

    middle: [
      { name: "الأناناس", img: "notes/creedAventus/الأناناس.svg" },
      { name: "الباتشولي", img: "notes/creedAventus/الباتشولي.svg" },
      { name: "الياسمين المغربي", img: "notes/creedAventus/الياسمين المغربي.svg" }
    ],

    base: [
      { name: "أخشاب البتولا", img: "notes/creedAventus/أخشاب البتولا.svg" },
      { name: "المسك", img: "notes/creedAventus/المسك.svg" },
      { name: "طحلب البلوط (طحلب السنديان)", img: "notes/creedAventus/طحلب البلوط (طحلب السنديان).svg" },
      { name: "خشب الأرز", img: "notes/creedAventus/خشب الأرز.svg" },
      { name: "الأمبروكسان", img: "notes/creedAventus/الأمبروكسان.svg" }
    ]
  },
    rating: 5
  },

  manseraRoseVanilla1: {
    name: "مانسيرا روز فانيليا",
    brand: "Mansera",
    img: "semi img/Mansera Rose Vanilla.svg",
    description: "عطر فاخر للنساء، يجمع بين نفحات الورد والفانيليا الغنية والفواحة.",
    price: 650, // السعر ثابت للـ Semi
    isSemi: true,
    descriptionDetails: {
      main: "عطر روزز فانيلا من مانسيرا هو عطر شرقي برائحة الفانيليا للنساء. أُطلق روزز فانيلا عام ٢٠١١. مصمم هذا العطر هو بيير مونتال. تتكون مقدمة العطر من الليمون الإيطالي، وقلبه من الورد التركي، وقاعدته من الفانيليا والمسك الأبيض وخشب الأرز",
      top: [
        { name: "الليمون الإيطالي", img: "notes/Roses Vanille/الليمون الإيطالي.svg" },
      ],
      middle: [
        { name: "الورد التركي", img: "notes/Roses Vanille/الورد التركي.svg" },
      ],
      base: [
        { name: "المسك الأبيض", img: "notes/Roses Vanille/المسك الأبيض.svg" },
        { name: "خشب الأرز", img: "notes/Roses Vanille/خشب الأرز.svg" },
        { name: "الفانيليا", img: "notes/Roses Vanille/الفانيليا.svg" },
      ]
    },
    rating: 5
  },

  manseraCocoVanilla: {
  name: "كوكو فانيلا",
  brand: "Mancera",
  img: "semi img/Mansera Coco Vanilla.svg",
  description: "عطر شرقي‑فانيليا أنثوي دافئ يجمع بين جوز الهند، الخوخ الأبيض، الزهور الاستوائية وقاعدة غنية بالفانيليا والمسك.",
  price: 650, // السعر ثابت للـ Semi
  isSemi: true,
  
  descriptionDetails: {
    main: "عطر كوكو فانيلا من مانسيرا هو عطر شرقي برائحة الفانيليا للنساء. أُطلق كوكو فانيلا عام ٢٠١٦. مصمم هذا العطر هو بيير مونتال. تتكون مقدمة العطر من جوز الهند والخوخ الأبيض؛ وقلب العطر من زهرة التياري والإيلنغ والياسمين؛ وقاعدة العطر من فانيليا مدغشقر والمسك الأبيض ونفحات خشبية",

    top: [
      { name: "جوز الهند", img: "notes/cocoVanille/جوز الهند.svg" },
      { name: "الخوخ الأبيض", img: "notes/cocoVanille/الخوخ الأبيض.svg" }
    ],

    middle: [
      { name: "زهرة التياري", img: "notes/cocoVanille/زهر تياري.svg" },
      { name: "الإيلنغ (Ylang‑Ylang)", img: "notes/cocoVanille/الإيلنغ.svg" },
      { name: "الياسمين", img: "notes/cocoVanille/الياسمين.svg" }
    ],

    base: [
      { name: "فانيليا مدغشقر", img: "notes/cocoVanille/فانيليا مدغشقر.svg" },
      { name: "المسك الأبيض", img: "notes/cocoVanille/المسك الأبيض.svg" },
      { name: "النوتات الخشبية", img: "notes/cocoVanille/الأخشاب.svg" }
    ]
  },

  rating: 4
},
seePassion: {
  name: "سي باشن",
  brand: "Giorgio Armani",
  img: "semi img/Sì Passione.svg",
  description: "عطر زهري‑فاكهي أنثوي يجمع بين الفواكه الغنية والورد والمسك لخلق رائحة أنيقة وجذابة.",
  price: 650, // السعر ثابت للـ Semi
  isSemi: true,

  descriptionDetails: {
    main: "عطر سي باشون من جورجيو أرماني هو عطر زهري فاكهي للنساء. أُطلق عام ٢٠١٧، وهو من ابتكار كريستين ناجل وجولي ماسيه. تتكون مقدمة العطر من الكمثرى، الكشمش الأسود، الفلفل الوردي، والجريب فروت؛ أما قلب العطر فيتكون من الأناناس، الورد، الياسمين، وزهرة رقيب الشمس؛ بينما تتكون قاعدة العطر من الفانيليا، خشب الأرز، الباتشولي، وخشب العنبر",

    top: [
      { name: "الكمثرى (Pear)", img: "notes/seePassion/الكمثري.svg" },
      { name: "الكشمش الأسود (Black Currant)", img: "notes/seePassion/الكشمش الأسود.svg" },
      { name: "الفلفل الوردي (Pink Pepper)", img: "notes/seePassion/الفلفل الوردي.svg" },
      { name: "الجريب فروت (Grapefruit)", img: "notes/seePassion/الجريب فروت.svg" }
    ],

    middle: [
      { name: "الأناناس (Pineapple)", img: "notes/seePassion/الأناناس.svg" },
      { name: "الورد (Rose)", img: "notes/seePassion/الورد.svg" },
      { name: "الياسمين (Jasmine)", img: "notes/seePassion/الياسمين.svg" },
      { name: "الهيليوتروب (Heliotrope)", img: "notes/seePassion/الهيلوتروب.svg" }
    ],

    base: [
      { name: "الفانيليا (Vanilla)", img: "notes/seePassion/الفانيليا.svg" },
      { name: "خشب الأرز (Cedar)", img: "notes/seePassion/خشب الأرز.svg" },
      { name: "الباتشولي (Patchouli)", img: "notes/seePassion/الباتشولي.svg" },
      { name: "خشب العنبر (Amberwood)", img: "notes/seePassion/خشب العنبر.svg" }
    ]
  },

  rating: 5
},
dunhillDesireReds: {
  name: "دنهيل ديزاير ريد",
  brand: "Alfred Dunhill",
  img: "semi img/Dunhill Desire for a Man.svg",
  description: "عطر ذكوري أنيق شرقي–خشبي يجمع بين النفحات الفاكهية والورود مع قاعدة دافئة من الفانيليا والمسك.",
  price: 650, // ثابت للـ Semi
  isSemi: true,
  descriptionDetails: {
    main: "عطر ديزاير فور أ مان من ألفريد دانهيل هو عطر شرقي خشبي للرجال. أُطلق هذا العطر عام 2000، وهو من ابتكار العطّار ميشيل ألمايراك. تتكون مقدمة العطر من التفاح والليمون والبرغموت وزهر البرتقال، وقلبه من الورد وخشب الساج والباتشولي، وقاعدته من الفانيليا والمسك",

    top: [
      { name: "التفاح", img: "notes/Dunhill Desire Red/التفاح.svg" },
      { name: "الليمون", img: "notes/Dunhill Desire Red/الليمون.svg" },
      { name: "البرغموت", img: "notes/Dunhill Desire Red/البرغموت.svg" },
      { name: "زهر البرتقال", img: "notes/Dunhill Desire Red/زهر البرتقال.svg" }
    ],

    middle: [
      { name: "الورد", img: "notes/Dunhill Desire Red/الورد.svg" },
      { name: "خشب الساج", img: "notes/Dunhill Desire Red/خشب الساج.svg" },
      { name: "الباتشولي", img: "notes/Dunhill Desire Red/الباتشولي.svg" },
    ],

    base: [
      { name: "الفانيليا", img: "notes/Dunhill Desire Red/الفانيليا.svg" },
      { name: "المسك", img: "notes/Dunhill Desire Red/المسك.svg" },
    ]
  },

  rating: 5
},
  
invictusss: {
  name: "باكو رابان إنفيكتوس",
  brand: "Paco Rabanne",
  img: "semi img/Paco Rabanne Invictus.svg",
  description: "عطر رجالي منعش وقوي بطابع بحري خشبي، يجمع بين الانتعاش والدفء في تركيبة عصرية جريئة.",
  price: 650, // ثابت للـ Semi
  isSemi: true,
  descriptionDetails: {
    main: "Invictus Rabanne عطر خشبي - مائي للرجال . Invictus صدر عام 2013. Invictus من توقيع Veronique Nyberg, Anne Flipo, Olivier Polge و Dominique Ropion. إفتتاحية العطر نسيم البحر, الجريب فروت و الماندرين (اليوسفي); قلب العطر ورق اللورا و الياسمين; قاعدة العطر تتكون من الآمبرغريس, أخشاب الغاياك, طحلب البلوط (طحلب السنديان) و الباتشولي.",

    top: [
      { name: "الجريب فروت", img: "notes/invictus/t.76 (1).svg" },
      { name: "الماندرين (اليوسفي)", img: "notes/invictus/t.82.svg" },
      { name: "نسيم البحر", img: "notes/invictus/n.svg" }
    ],

    middle: [
      { name: "الياسمين", img: "notes/invictus/t.14.svg" },
      { name: "ورق اللورا", img: "notes/invictus/t.128.svg" }
    ],

    base: [
      { name: "الآمبرغريس", img: "notes/invictus/الآمبرغريس.svg" },
      { name: "خشب الغاياك", img: "notes/invictus/أخشاب الغاياك.svg" },
      { name: "طحلب البلوط (طحلب السنديان)", img: "notes/invictus/طحلب البلوط (طحلب السنديان).svg" },
      { name: "الباتشولي", img: "notes/invictus/الباتشولي.svg" }
    ]
  },

  rating: 5
},

yslY: {
  name: "واي إيف سان لوران",
  brand: "Yves Saint Laurent",
  img: "semi img/Yves Saint Laurent Y.svg",
  description: "عطر رجالي عصري بعطر خشبي-أروماتيك يجمع بين الانتعاش والحيوية والدفء في قاعدة جذابة.",
  price: 650, // السعر ثابت للـ Semi
  isSemi: true,
  descriptionDetails: {
    main: "عطر  من إيف سان لوران هو عطر خشبي عطري للرجال. أُطلق عطر  من إيف سان لوران عام ٢٠١٧. مصمم هذا العطر هو دومينيك روبيون. تتكون مقدمة العطر من الألدهيدات والبرغموت والزنجبيل والليمون والنعناع؛ أما قلب العطر فيتكون من التفاح وأوراق البنفسج والأناناس والمريمية وإبرة الراعي؛ بينما تتكون قاعدة العطر من العنبر والمسك وخشب الأرز وشجرة التنوب البلسمي ونجيل الهند والبخور",

    top: [
      { name: "الألدهيدات", img: "notes/yslY/الألدهيدات.svg" },
      { name: "البرغموت", img: "notes/yslY/البرغموت.svg" },
      { name: "الزنجبيل", img: "notes/yslY/الزنجبيل.svg" },
      { name: "الليمون", img: "notes/yslY/الليمون.svg" },
      { name: "النعناع", img: "notes/yslY/النعناع.svg" }
    ],

    middle: [
      { name: "التفاح", img: "notes/yslY/التفاح.svg" },
      { name: "ورق البنفسج", img: "notes/yslY/أوراق البنفسج.svg" },
      { name: "الأناناس", img: "notes/yslY/الأناناس.svg" },
      { name: "المريمية", img: "notes/yslY/المريمية.svg" },
      { name: "إبرة الراعي (Geranium)", img: "notes/yslY/إبره الراعي.svg" }
    ],

    base: [
      { name: " الآمبرغريس(Ambergris)", img: "notes/yslY/الآمبرغريس.svg" },
      { name: "المسك", img: "notes/yslY/المسك.svg" },
      { name: "خشب الأرز", img: "notes/yslY/خشب الأرز.svg" },
      { name: "بلسم التنوب (Balsam Fir)", img: "notes/yslY/بلسم التنوب.svg" },
      { name: "البخور", img: "notes/yslY/البخور.svg" },
      { name: "نجيل الهند", img: "notes/yslY/نجيل الهند.svg" },
    ]
  },

  rating: 4
},

tresorMidnightRose: {
  name: "تريزور ميدنايت روز",
  brand: "Lancôme",
  img: "semi img/Tresor Midnight Rose.svg",
  description: "عطر نسائي زهري-فاكهي يجمع بين نفحات التوت والورد مع قلب عطري غني وقاعدة دافئة من الفانيليا والمسك والأخشاب.",
  price: 650, // السعر ثابت للـ Semi
  isSemi: true,
  descriptionDetails: {
    main: "عطر تريزور ميدنايت روز من لانكوم هو عطر زهري خشبي مسكي للنساء. أُطلق تريزور ميدنايت روز عام ٢٠١١. تتكون مقدمة العطر من التوت والورد؛ وقلب العطر من الكشمش الأسود والفلفل الوردي والفاوانيا والياسمين؛ وقاعدة العطر من الفانيليا والمسك وخشب الأرز الفرجيني",

    top: [
      { name: "توت العليق (Raspberry)", img: "notes/tresorMidnightRose/توت العليق.svg" },
      { name: "الورد (Rose)", img: "notes/tresorMidnightRose/الورد.svg" }
    ],

    middle: [
      { name: "الكشمش الأسود (Cassis)", img: "notes/tresorMidnightRose/الكشمش الأسود.svg" },
      { name: "الفلفل الوردي (Pink Pepper)", img: "notes/tresorMidnightRose/الفلفل الوردي.svg" },
      { name: "الفاوانيا (Peony)", img: "notes/tresorMidnightRose/الفاوانيا.svg" },
      { name: "الياسمين (Jasmine)", img: "notes/tresorMidnightRose/الياسمين.svg" }
    ],

    base: [
      { name: "الفانيليا (Vanilla)", img: "notes/tresorMidnightRose/الفانيليا.svg" },
      { name: "المسك (Musk)", img: "notes/tresorMidnightRose/المسك.svg" },
      { name: "خشب الأرز من فرجينيا (Virginia Cedarwood)", img: "notes/tresorMidnightRose/خشب الأرز من فرجينيا.svg" }
    ]
  },

  rating: 4
},

lacosteBlacks: {
  name: "لاكوست بلاك",
  brand: "Lacoste",
  img: "semi img/Lacoste Black.svg",
  description: "عطر رجالي خشبي-أروماتيك يجمع بين الانتعاش الفاكهي والعناصر العشبية مع قاعدة عميقة دافئة من الشوكولاتة الداكنة والأخشاب.",
  price: 650, // السعر ثابت للـ Semi
  isSemi: true,

  descriptionDetails: {
    main: "عطر أو دو لاكوست إل 12.12 نوار من لاكوست للعطور هو عطر خشبي عطري للرجال. أُطلق هذا العطر عام 2013. تتكون مقدمة العطر من البطيخ، وقلبه من الريحان والخزامى واللويزة، وقاعدته من الشوكولاتة الداكنة والكشميران والباتشولي والكومارين",
    
    top: [
      { name: "البطيخ", img: "notes/lacosteBlack/البطيخ.svg" }
    ],

    middle: [
      { name: "الريحان", img: "notes/lacosteBlack/الريحان.svg" },
      { name: "الخزامي", img: "notes/lacosteBlack/الخزامي.svg" },
      { name: "الفيربينا", img: "notes/lacosteBlack/الفيربينا.svg" }
    ],

    base: [
      { name: "الشيكولاتة الداكنة", img: "notes/lacosteBlack/الشيكولاتة الداكنة.svg" },
      { name: "أخشاب الكشمير", img: "notes/lacosteBlack/أخشاب الكشمير.svg" },
      { name: "الباتشولي", img: "notes/lacosteBlack/الباتشولي.svg" },
      { name: "الكومارين", img: "notes/lacosteBlack/الكومارين.svg" }
    ]
  },

  rating: 4
},

lacosteWhites: {
  name: "لاكوست وايت",
  brand: "Lacoste",
  img: "semi img/Lacoste White.svg",
  description: "عطر رجالي منعش وخشبي‑أروماتيك يعكس أناقة النظافة والطابع الرياضي بروائح حمضية وزهرية مع قاعدة دافئة أخشابية.",
  price: 650, // السعر ثابت للـ Semi
  isSemi: true,
   descriptionDetails: {
    main: "عطر أو دو لاكوست إل 12.12 وايت من لاكوست للعطور هو عطر خشبي عطري للرجال. أُطلق هذا العطر عام 2011. تتكون مقدمة العطر من الجريب فروت وإكليل الجبل والهيل؛ وقلب العطر من الإيلنغ يلانغ ومسك الروم؛ وقاعدة العطر من خشب الأرز الفرجيني والجلد المدبوغ ونجيل الهند والجلد",

    top: [
      { name: "الجريب فروت", img: "notes/lacosteWhite/الجريب فروت.svg" },
      { name: "إكليل الجبل", img: "notes/lacosteWhite/إكليل الجبل.svg" },
      { name: "الهيل", img: "notes/lacosteWhite/الهيل.svg" }
    ],

    middle: [
      { name: "الإيلنغ", img: "notes/lacosteWhite/الإيلنغ.svg" },
      { name: "مسك الروم", img: "notes/lacosteWhite/مسك الروم.svg" }
    ],

    base: [
      { name: "خشب الأرز من فرجينيا", img: "notes/lacosteWhite/خشب الأرز من فرجينيا.svg" },
      { name: "جلد الغزال (الجلد المدبوغ)", img: "notes/lacosteWhite/جلد الغزال (الجلد المدبوغ).svg" },
      { name: "نجيل الهند", img: "notes/lacosteWhite/نجيل الهند.svg" },
      { name: "الجلود", img: "notes/lacosteWhite/الجلود.svg" }
    ]
  },

  rating: 4
},

bleuDeChanel: {
  name: "بلو دي شانيل",
  brand: "Chanel",
  img: "semi img/Bleu de Chanel.svg",
  description: "عطر رجالي راقي يجمع بين الانتعاش الحمضي والتوابل الدافئة مع قاعدة خشبية عميقة تدوم طويلاً.",
  price: 650, // السعر ثابت للـ Semi
  isSemi: true,

  descriptionDetails: {
    main: "عطر بلو دو شانيل أو دو بارفان من شانيل هو عطر خشبي عطري للرجال. أُطلق بلو دو شانيل أو دو بارفان عام ٢٠١٤. مصمم هذا العطر هو جاك بولج. تتكون مقدمة العطر من الجريب فروت والليمون والنعناع والبرغموت والفلفل الوردي والألدهيدات والكزبرة؛ أما قلب العطر فيتكون من الزنجبيل وجوزة الطيب والياسمين والشمام؛ بينما تتكون قاعدة العطر من البخور والعنبر وخشب الأرز وخشب الصندل وخشب العنبر والباتشولي واللابدانوم",

    top: [
      { name: "الجريب فروت (Grapefruit)", img: "notes/bleuDeChanel/الجريب فروت.svg" },
      { name: "الليمون (Lemon)", img: "notes/bleuDeChanel/الليمون.svg" },
      { name: "النعناع (Mint)", img: "notes/bleuDeChanel/النعناع.svg" },
      { name: "البرغموت (Bergamot)", img: "notes/bleuDeChanel/البرغموت.svg" },
      { name: "الفلفل الوردي (Pink Pepper)", img: "notes/bleuDeChanel/الفلفل الوردي.svg" },
      { name: "الألدهيدات (Aldehydes)", img: "notes/bleuDeChanel/الألدهيدات.svg" },
      { name: "الكزبرة (Coriander)", img: "notes/bleuDeChanel/الكزبرة.svg" }
    ],

    middle: [
      { name: "الزنجبيل (Ginger)", img: "notes/bleuDeChanel/الزنجبيل.svg" },
      { name: "جوزة الطيب (Nutmeg)", img: "notes/bleuDeChanel/جوزه الطيب.svg" },
      { name: "الياسمين (Jasmine)", img: "notes/bleuDeChanel/الياسمين.svg" },
      { name: "الشمام (Melon)", img: "notes/bleuDeChanel/شمام.svg" }
    ],

    base: [
      { name: "البخور (Incense)", img: "notes/bleuDeChanel/البخور.svg" },
      { name: "العنبر (Amber)", img: "notes/bleuDeChanel/العنبر.svg" },
      { name: "خشب الأرز (Cedar)", img: "notes/bleuDeChanel/خشب الأرز.svg" },
      { name: "خشب الصندل (Sandalwood)", img: "notes/bleuDeChanel/خشب الصندل.svg" },
      { name: "خشب العنبر (Amberwood)", img: "notes/bleuDeChanel/خشب العنبر.svg" },
      { name: "الباتشولي (Patchouli)", img: "notes/bleuDeChanel/الباتشولي.svg" },
      { name: "اللابدانوم (Labdanum)", img: "notes/bleuDeChanel/اللابدانوم.svg" }
    ]
  },

  rating: 5
},

sauvages: {
  name: "سوفاج",
  brand: "Dior",
  img: "semi img/Sauvage.svg",
  description: "عطر رجالي خشبي‑أروماتيك منعش، يجمع بين النفحات الحمضية والتوابل الدافئة مع قاعدة قوية ومميزة.",
  price: 650, // السعر ثابت للـ Semi
  isSemi: true,

  descriptionDetails: {
    main: "عطر سوفاج من ديور هو عطر أروماتي فوجير للرجال. أُطلق سوفاج عام ٢٠١٥. مصمم هذا العطر هو فرانسوا ديماشي. تتكون مقدمة العطر من برغموت كالابريا والفلفل؛ وقلب العطر من فلفل سيشوان، والخزامى، والفلفل الوردي، ونجيل الهند، والباتشولي، وإبرة الراعي، والإيليمي؛ وقاعدة العطر من الأمبروكسان، وخشب الأرز، واللابدانوم.",

    top: [
      { name: "البرغموت الكالابري", img: "notes/sauvage/برغموت كالابريا.svg" },
      { name: "الفلفل", img: "notes/sauvage/الفلفل.svg" }
    ],

    middle: [
      { name: "الخزامي", img: "notes/sauvage/الخزامي.svg" },
      { name: "الفلفل الوردي", img: "notes/sauvage/الفلفل الوردي.svg" },
      { name: "نجيل الهند", img: "notes/sauvage/نجيل الهند.svg" },
      { name: "فلفل سيشوان", img: "notes/sauvage/فلفل سيشوان.svg" },
      { name: "الباتشولي", img: "notes/sauvage/الباتشولي.svg" },
      { name: "إبره الراعي", img: "notes/sauvage/إبره الراعي.svg" },
      { name: "الإليمي", img: "notes/sauvage/الإليمي.svg" },
    ],

    base: [
      { name: "الأمبروكسان", img: "notes/sauvage/الأمبروكسان.svg" },
      { name: "خشب الأرز", img: "notes/sauvage/خشب الأرز.svg" },
      { name: "اللابدانوم", img: "notes/sauvage/اللابدانوم.svg" }
    ]
  },

  rating: 5
},

libres: {
  name: "ليبر",
  brand: "Yves Saint Laurent",
  img: "semi img/Libre.svg",
  description: "عطر نسائي زهري‑أوروماتيكي أنيق يجمع بين النفحات الحمضية والورود مع قاعدة دافئة من الفانيليا والمسك والأخشاب.",
  price: 650, // السعر ثابت للـ Semi
  isSemi: true,
  descriptionDetails: {
    main: "عطر ليبر من إيف سان لوران هو عطر شرقي فوغير للنساء. أُطلق ليبر عام ٢٠١٩. ابتكره آن فليبو وكارلوس بينايم. تتكون مقدمة العطر من الخزامى، واليوسفي، والكشمش الأسود، والبيتيغرين؛ أما قلب العطر فيتكون من الخزامى، وزهر البرتقال، والياسمين؛ بينما تتكون قاعدة العطر من فانيليا مدغشقر، والمسك، وخشب الأرز، والعنبر",

    top: [
      { name: "الخزامي (Lavender)", img: "notes/libre/الخزامي.svg" },
      { name: "الماندرين (اليوسفي)", img: "notes/libre/الماندرين (اليوسفي).svg" },
      { name: "الكشمش الأسود (Black Currant)", img: "notes/libre/الكشمش الأسود.svg" },
      { name: "البيتيغرين (Petitgrain)", img: "notes/libre/البيتيتغرين.svg" }
    ],

    middle: [
      { name: "الخزامي (Lavender)", img: "notes/libre/الخزامي.svg" },
      { name: "زهر البرتقال (Orange Blossom)", img: "notes/libre/زهر البرتقال.svg" },
      { name: "الياسمين (Jasmine)", img: "notes/libre/الياسمين.svg" }
    ],

    base: [
      { name: "فانيليا مدغشقر (Madagascar Vanilla)", img: "notes/libre/فانيليا مدغشقر.svg" },
      { name: "المسك (Musk)", img: "notes/libre/المسك.svg" },
      { name: "خشب الأرز (Cedarwood)", img: "notes/libre/خشب الأرز.svg" },
      { name: "الآمبرغريس (Ambergris)", img: "notes/libre/الآمبرغريس.svg" }
    ]
  },


  rating: 4
},

burberryHers: {
  name: "بربري هير",
  brand: "Burberry",
  img: "semi img/Burberry Her.svg",
  description: "عطر نسائي فاكهي‑زهري أنيق يجمع بين النفحات الحلوة والفواكه الحمراء مع قاعدة دافئة من المسك والفانيليا والأخشاب.",
  price: 650, // السعر ثابت للـ Semi
  isSemi: true,
  descriptionDetails: {
    main: "عطر بربري هير هو عطر زهري فاكهي ذو نفحات حلوة للنساء اطلق عام 2018. مصمم هذا العطر هو فرانسيس كوركدجيان. تتكون مقدمة العطر من الفراولة، والتوت، والتوت الأسود، والكرز الحامض، والكشمش الأسود، واليوسفي، والليمون؛ أما قلب العطر فيتكون من البنفسج والياسمين؛ بينما تتكون قاعدة العطر من المسك، والفانيليا، والكشميران، ونفحات خشبية، والعنبر، وطحلب السنديان، والباتشولي.",

    top: [
      { name: "الفراوله", img: "notes/burberryHer/الفراوله.svg" },
      { name: "ثمر العليق", img: "notes/burberryHer/ثمر العليق.svg" },
      { name: "توت العليق", img: "notes/burberryHer/توت العليق.svg" },
      { name: "الكرز الحامض", img: "notes/burberryHer/الكرز الحامض.svg" },
      { name: "الكشمش الأسود", img: "notes/burberryHer/الكشمش الأسود.svg" },
      { name: "الماندرين (اليوسفي)", img: "notes/burberryHer/الماندرين (اليوسفي).svg" },
      { name: "الليمون", img: "notes/burberryHer/الليمون.svg" }
    ],

    middle: [
      { name: "البنفسج", img: "notes/burberryHer/البنفسج.svg" },
      { name: "الياسمين", img: "notes/burberryHer/الياسمين.svg" }
    ],

    base: [
      { name: "المسك", img: "notes/burberryHer/المسك.svg" },
      { name: "الفانيليا", img: "notes/burberryHer/الفانيليا.svg" },
      { name: "أخشاب الكشمير", img: "notes/burberryHer/أخشاب الكشمير.svg" },
      { name: "الأخشاب", img: "notes/burberryHer/الأخشاب.svg" },
      { name: "العنبر", img: "notes/burberryHer/العنبر.svg" },
      { name: "طحلب البلوط (طحلب السنديان)", img: "notes/burberryHer/طحلب البلوط (طحلب السنديان).svg" },
      { name: "الباتشولي", img: "notes/burberryHer/الباتشولي.svg" }
    ]
  },

  rating: 4
},

imperialValley: {
  name: "قصة إمبريال فالي",
  brand: "Gissah",
  img: "semi img/Imperial Valley.svg",
  description: "عطر شرقي خشبي للجنسين يجمع بين النفحات الحمضية والعود والمسك، مناسب لجميع الأوقات.",
  price: 650, // ثابت للـ Semi
  isSemi: true,
  descriptionDetails: {
    main: "عطر إمبريال فالي من جيساه هو عطر شرقي خشبي للجنسين. أُطلق إمبريال فالي عام ٢٠٢١. تتكون مقدمة العطر من البرغموت الصقلي والفلفل الوردي والدافانا؛ وقلب العطر من العود والعنبر الأبيض وإكليل الجبل؛ وقاعدة العطر من الجلد والمسك ونجيل الهند الهايتي.",

    top: [
      { name: "البرغموت الصقلي", img: "notes/imperialValley/البرغموت الصقلي.svg" },
      { name: "الفلفل الوردي", img: "notes/imperialValley/الفلفل الوردي.svg" },
      { name: "الدافانا", img: "notes/imperialValley/الدافانا.svg" }
    ],

    middle: [
      { name: "العود", img: "notes/imperialValley/العود.svg" },
      { name: "العنبر الأبيض", img: "notes/imperialValley/العنبر الأبيض.svg" },
      { name: "إكليل الجبل", img: "notes/imperialValley/إكليل الجبل.svg" }
    ],

    base: [
      { name: "الجلود", img: "notes/imperialValley/الجلود.svg" },
      { name: "المسك", img: "notes/imperialValley/المسك.svg" },
      { name: "نجيل الهند من هايتي", img: "notes/imperialValley/نجيل الهند من هايتي.svg" }
    ]
  },

  rating: 5
},

nexusXerjoff: {
  name: "نيكسوس زيرجوف",
  brand: "Xerjoff",
  img: "semi img/Nexus Xerjoff.svg",
  description: "عطر راقي للجنسين من Xerjoff يمزج بين النفحات الحمضية، العسل، والتبغ مع قاعدة فانيليا وتونكا دافئة وغنية.",
  price: 650, // السعر ثابت للـ Semi Original
  isSemi: true,

  descriptionDetails: {
    main: "عطر نيكسوس من زيرجوف هو عطر حمضي ذو نفحات حلوة، مناسب للجنسين. أُطلق عطر نيكسوس عام 2015. تتكون مقدمة العطر من الخزامى والبرغموت والليمون؛ وقلب العطر من العسل والقرفة والكشميران والياسمين السامباك؛ وقاعدة العطر من أوراق التبغ والفانيليا وحبوب التونكا",

    top: [
      { name: "الخزامى (Lavender)", img: "notes/nexusXerjoff/الخزامي.svg" },
      { name: "البرغموت (Bergamot)", img: "notes/nexusXerjoff/البرغموت.svg" },
      { name: "الليمون (Lemon)", img: "notes/nexusXerjoff/الليمون.svg" }
    ],

    middle: [
      { name: "العسل (Honey)", img: "notes/nexusXerjoff/العسل.svg" },
      { name: "القرفة (Cinnamon)", img: "notes/nexusXerjoff/القرفة.svg" },
      { name: "أخشاب الكشمير (Cashmeran)", img: "notes/nexusXerjoff/أخشاب الكشمير.svg" },
      { name: "الياسمين سامباك (Jasmine Sambac)", img: "notes/nexusXerjoff/ياسمين سامباك.svg" }
    ],

    base: [
      { name: "أوراق التبغ (Tobacco Leaf)", img: "notes/nexusXerjoff/أوراق التبغ.svg" },
      { name: "الفانيليا (Vanilla)", img: "notes/nexusXerjoff/الفانيليا.svg" },
      { name: "حبوب التونكا (Tonka Bean)", img: "notes/nexusXerjoff/حبوب التونكا.svg" }
    ]
  },

  rating: 5
},

versaceEross: {
  name: "فيرزاتشي إيروس",
  brand: "Versace",
  img: "semi img/Versace Eros.svg",
  description: "عطر رجالي شرقي‑أخشابي يجمع بين النفحات الحمضية المنعشة والتوابل الدافئة مع قاعدة فانيليا وأخشاب غنية.",
  price: 650, // السعر ثابت للـ Semi Original
  isSemi: true,

  descriptionDetails: {
    main: "عطر إيروس من فرزاتشي هو عطر أروماتي فوجير للرجال. أُطلق إيروس عام ٢٠١٢. مصمم هذا العطر هو أوريليان غيشارد. تتكون مقدمة العطر من النعناع والتفاح الأخضر والليمون؛ وقلب العطر من حبوب التونكا والأمبروكسان وإبرة الراعي؛ وقاعدة العطر من فانيليا مدغشقر وخشب الأرز الفرجيني وخشب الأرز الأطلسي ونجيل الهند وطحلب البلوط",

    top: [
      { name: "النعناع", img: "notes/erosVersace/النعناع.svg" },
      { name: "التفاح الأخضر", img: "notes/erosVersace/التفاح الأخضر.svg" },
      { name: "الليمون", img: "notes/erosVersace/الليمون.svg" }
    ],

    middle: [
      { name: "حبوب التونكا", img: "notes/erosVersace/حبوب التونكا.svg" },
      { name: "الأمبروكسان", img: "notes/erosVersace/الأمبروكسان.svg" },
      { name: "إبره الراعي", img: "notes/erosVersace/إبره الراعي.svg" }
    ],

    base: [
      { name: "فانيليا مدغشقر", img: "notes/erosVersace/فانيليا مدغشقر.svg" },
      { name: "خشب الأرز من فرجينيا", img: "notes/erosVersace/خشب الأرز من فرجينيا.svg" },
      { name: "خشب الأرز الأطلسي", img: "notes/erosVersace/خشب الأرز الأطلسي.svg" },
      { name: "نجيل الهند", img: "notes/erosVersace/نجيل الهند.svg" },
      { name: "طحلب البلوط (طحلب السنديان)", img: "notes/erosVersace/طحلب البلوط (طحلب السنديان).svg" }
    ]
  },

  rating: 5
},

baccaratRouge540: {
  name: "بكرات روج 540",
  brand: "Maison Francis Kurkdjian",
  img: "semi img/Baccarat Rouge 540.svg",
  description: "عطر فاخر للجنسين غني، يجمع بين النفحات الحمضية الزهرية والتوابل الدافئة مع قاعدة من العنبر والمسك والأخشاب.",
  price: 650, // السعر ثابت للـ Semi Original
  isSemi: true,

  descriptionDetails: {
    main: "عطر باكارات روج 540 إكسترا دو بارفان من دار فرانسيس كوركدجيان هو عطر شرقي زهري للجنسين. أُطلق هذا العطر عام 2017، وهو من ابتكار فرانسيس كوركدجيان. تتكون مقدمة العطر من اللوز المر والزعفران، وقلبه من الياسمين المصري وخشب الأرز الفرجيني، أما قاعدته فتتكون من العنبر والنفحات الخشبية والمسك والأمبروكسان والكشميران",

    top: [
      { name: "اللوز المر (Bitter Almond)", img: "notes/baccaratRouge540/اللوز المر.svg" },
      { name: "الزعفران (Saffron)", img: "notes/baccaratRouge540/الزعفران.svg" }
    ],

    middle: [
      { name: "الياسمين المصري (Egyptian Jasmine)", img: "notes/baccaratRouge540/الياسمين المصري.svg" },
      { name: "خشب الأرز فيرجينيا (Virginia Cedar)", img: "notes/baccaratRouge540/خشب الأرز من فرجينيا.svg" }
    ],

    base: [
      { name: "المسك (Musk)", img: "notes/baccaratRouge540/المسك.svg" },
      { name: "أمبروكسان (Ambroxan)", img: "notes/baccaratRouge540/الأمبروكسان.svg" },
      { name: "الأخشاب", img: "notes/baccaratRouge540/الأخشاب.svg" },
      { name: "أخشاب الكشمير", img: "notes/baccaratRouge540/أخشاب الكشمير.svg" },
      { name: "الآمبرغريس", img: "notes/baccaratRouge540/الآمبرغريس.svg" }
    ]
  },

  rating: 5
},

ultraMale: {
  name: "ألترا ميل",
  brand: "Jean Paul Gaultier",
  img: "semi img/Ultra Male.svg",
  description: "عطر رجالي شرقي‑فوجير يجمع بين النفحات الفاكهية والحارة مع قاعدة عميقة وحلوة تمنحه طابعاً جذاباً وفاخراً.",
  price: 650, // السعر ثابت للـ Semi Original
  isSemi: true,

  descriptionDetails: {
    main: "عطر ألترا ميل من جان بول غوتييه هو عطر شرقي فوجير للرجال. أُطلق ألترا ميل عام ٢٠١٥. مصمم هذا العطر هو فرانسيس كوركدجيان. تتكون مقدمة العطر من الكمثرى والخزامى والنعناع والبرغموت والليمون؛ أما قلب العطر فيتكون من القرفة والمريمية والكراوية؛ بينما تتكون قاعدة العطر من قشر الفانيليا السوداء والعنبر والباتشولي وخشب الأرز",

    top: [
      { name: "الكمثرى (Pear)", img: "notes/ultraMale/الكمثري.svg" },
      { name: "اللافندر (Lavender)", img: "notes/ultraMale/الخزامي.svg" },
      { name: "النعناع (Mint)", img: "notes/ultraMale/النعناع.svg" },
      { name: "البرغموت (Bergamot)", img: "notes/ultraMale/البرغموت.svg" },
      { name: "الليمون (Lemon)", img: "notes/ultraMale/الليمون.svg" }
    ],

    middle: [
      { name: "القرفة (Cinnamon)", img: "notes/ultraMale/القرفة.svg" },
      { name: "المريمية (Clary Sage)", img: "notes/ultraMale/المريمية.svg" },
      { name: "الكاراوية (Caraway)", img: "notes/ultraMale/الكاراوية.svg" }
    ],

    base: [
      { name: "قشرة الفانيليا السوداء (Black Vanilla Husk)", img: "notes/ultraMale/قشور الفانيليا السوداء.svg" },
      { name: "العنبر (Amber)", img: "notes/ultraMale/العنبر.svg" },
      { name: "الباتشولي (Patchouli)", img: "notes/ultraMale/الباتشولي.svg" },
      { name: "خشب الأرز (Cedar)", img: "notes/ultraMale/خشب الأرز.svg" }
    ]
  },

  rating: 5
},

};

document.addEventListener("DOMContentLoaded", () => {

  // =====================
  // قراءة الـ query من الرابط
  // =====================
  const urlParams = new URLSearchParams(window.location.search);
  const productKey = urlParams.get("product");

  // اختر المنتج الحالي من جميع الأقسام
  const product = menProducts[productKey] || womenProducts[productKey] || unisexProducts[productKey] || semiProducts[productKey];

  // =====================
  // تحديث تفاصيل المنتج
  // =====================
  if (product) {
    const imgEl = document.getElementById("product-img");
    const nameEl = document.getElementById("product-name");
    const brandEl = document.getElementById("product-brand");
    const descEl = document.getElementById("product-description");
    const sizesContainer = document.getElementById("product-sizes");
    const priceEl = document.getElementById("product-price");

    imgEl.src = product.img;
    imgEl.alt = product.name;
    nameEl.textContent = product.name;
    brandEl.textContent = product.brand;
    descEl.textContent = product.description;

    // =====================
    // إضافة simulation لو موجود
    // =====================
    if (product.simulation) {
      const simEl = document.createElement("div");
      simEl.classList.add("simulation");
      simEl.textContent = product.simulation;
      brandEl.insertAdjacentElement("afterend", simEl);
    }

    // =====================
    // عرض النجوم
    // =====================
    const ratingContainer = document.createElement("div");
    ratingContainer.classList.add("product-rating");
    for (let i = 1; i <= 5; i++) {
      const star = document.createElement("span");
      star.classList.add("star");
      star.textContent = "★";
      if (i <= product.rating) star.classList.add("filled");
      ratingContainer.appendChild(star);
    }
    nameEl.insertAdjacentElement("afterend", ratingContainer);

    // =====================
    // عرض الأحجام أو السعر مباشرة
    // =====================
    sizesContainer.innerHTML = "";

    if (product.isSemi) {
      sizesContainer.style.display = "none";
      priceEl.textContent = product.price + " ج.م";
    } else if (product.sizes && product.sizes.length > 0) {
      sizesContainer.style.display = "flex";
      product.sizes.forEach(s => {
        const btn = document.createElement("button");
        btn.classList.add("size-option");
        btn.dataset.price = s.price;
        btn.textContent = s.size;

        btn.addEventListener("click", () => {
          sizesContainer.querySelectorAll(".size-option").forEach(b => b.classList.remove("active"));
          btn.classList.add("active");
          priceEl.textContent = s.price + " ج.م";
        });

        sizesContainer.appendChild(btn);
      });

      // السعر يظهر صفر قبل اختيار الحجم
      priceEl.textContent = "0 ج.م";
    }

    // =====================
    // قسم الوصف والروائح
    // =====================
    const descriptionSection = document.createElement("section");
    descriptionSection.classList.add("product-description-details");

    function buildNotes(notesArray) {
      return notesArray.map(note => `
        <div class="note-item">
          <img src="${note.img}" alt="${note.name}">
          <span>${note.name}</span>
        </div>
      `).join("");
    }

    descriptionSection.innerHTML = `
      <div class="desc-block">
        <h3>الوصف</h3>
        <p>${product.descriptionDetails.main}</p>
      </div>

      <div class="desc-block">
        <h3>الروائح العطرية العليا</h3>
        <div class="notes-grid">${buildNotes(product.descriptionDetails.top)}</div>
      </div>

      <div class="desc-block">
        <h3>الروائح العطرية الوسطى</h3>
        <div class="notes-grid">${buildNotes(product.descriptionDetails.middle)}</div>
      </div>

      <div class="desc-block">
        <h3>الروائح العطرية الأساسية</h3>
        <div class="notes-grid">${buildNotes(product.descriptionDetails.base)}</div>
      </div>
    `;

    document.querySelector(".product-detail-page").appendChild(descriptionSection);

    // =====================
    // زر الإضافة للسلة
    // =====================
    const addToCartBtn = document.getElementById("add-to-cart-btn");
    addToCartBtn.addEventListener("click", () => {
      let price, sizeText;

      if (product.isSemi) {
        price = product.price;
        sizeText = "";
      } else {
        const selectedSize = sizesContainer.querySelector(".size-option.active");
        if (!selectedSize) {
          alert("من فضلك اختر الحجم أولاً!");
          return;
        }
        price = selectedSize.dataset.price;
        sizeText = selectedSize.textContent;
      }

      // استدعاء دالة addToCart من cart.js
      if (typeof addToCart === "function") {
        addToCart({
          name: product.name,
          price: parseFloat(price),
          img: product.img,
          size: sizeText
        });
      }
    });

  } else {
    document.querySelector(".product-detail-page").innerHTML = "<p>المنتج غير موجود</p>";
  }

  // ==========================
  // قسم الترشيحات
  // ==========================
  const recommendationsContainer = document.getElementById("recommendations");

  function showRecommendations(currentKey) {
    if (!recommendationsContainer) return;

    let sectionProducts;
    if (menProducts[currentKey] !== undefined) { 
      sectionProducts = menProducts;
    } else if (womenProducts[currentKey] !== undefined) { 
      sectionProducts = womenProducts;
    } else if (unisexProducts[currentKey] !== undefined) { 
      sectionProducts = unisexProducts;
    } else if (semiProducts[currentKey] !== undefined) { 
      sectionProducts = semiProducts;
    } else {
      sectionProducts = allProducts;
    }

    const entries = Object.entries(sectionProducts).filter(([key]) => key !== currentKey);
    const shuffled = entries.sort(() => 0.5 - Math.random());
    const recs = shuffled.slice(0, 10);

    recommendationsContainer.innerHTML = "";

    recs.forEach(([key, rec]) => {
      const card = document.createElement("div");
      card.className = "rec-card";
      card.innerHTML = `
        <img src="${rec.img}" alt="${rec.name}">
        <h4>${rec.name}</h4>
        <p>${rec.brand}</p>
        <p>0 ج.م</p>
      `;

      card.addEventListener("click", () => {
        window.location.href = `product.html?product=${key}`;
      });

      recommendationsContainer.appendChild(card);
    });
  }

  if (productKey) {
    showRecommendations(productKey);
  }

});
// ============================
// SIDEBAR TOGGLE
// ============================
const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");
const closeSidebar = document.getElementById("closeSidebar");
const overlay = document.getElementById("overlay");

if(hamburger && sidebar && closeSidebar && overlay){
  hamburger.addEventListener("click", () => {
    sidebar.classList.add("open");
    overlay.classList.add("show");
  });

  closeSidebar.addEventListener("click", () => {
    sidebar.classList.remove("open");
    overlay.classList.remove("show");
  });

  overlay.addEventListener("click", () => {
    sidebar.classList.remove("open");
    overlay.classList.remove("show");
  });
}

// ============================
// SIMULATION MENU TOGGLE
// ============================
const simulationToggle = document.getElementById("simulationToggle");
const simulationSubmenu = document.querySelector(".simulation-submenu");

if(simulationToggle && simulationSubmenu){
  simulationToggle.addEventListener("click", (e) => {
    e.preventDefault();
    simulationSubmenu.classList.toggle("hidden");
    simulationToggle.querySelector("ion-icon").classList.toggle("rotate");
  });
}
document.addEventListener("DOMContentLoaded", () => {
  const shopBtn = document.getElementById("shopBtn");
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay"); // نفس overlay الحالي
  const closeSidebar = document.getElementById("closeSidebar");

  if (!shopBtn || !sidebar || !overlay) return;

  // فتح السايدبار من زر تسوق الآن
  shopBtn.addEventListener("click", () => {
    sidebar.classList.add("active");
    overlay.classList.add("active");
  });

  // غلق السايدبار عند الضغط على × أو الخلفية
  function closeSidebarMenu() {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
  }

  overlay.addEventListener("click", closeSidebarMenu);
  closeSidebar.addEventListener("click", closeSidebarMenu);
});