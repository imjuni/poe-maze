const currencies = [
  {
    image: 'CurrencyIdentification.png',
    name: {
      en: 'Scroll of Widsom',
      ko: '감정 주문서',
    },
    exchange: {
      to: {
        'Potal Scroll': 3,
      },
      from: {},
    },
  },
  {
    image: 'CurrencyPortal.png',
    name: {
      en: 'Potal Scroll',
      ko: '포탈 스크롤',
    },
    exchange: {
      to: {
        'Orb of Transmutation': 7,
      },
      from: {
        'Scroll of Widsom': 3,
      },
    },
  },
  {
    image: 'CurrencyUpgradeToMagic.png',
    name: {
      en: 'Orb of Transmutation',
      ko: '진화의 오브',
    },
    exchange: {
      to: {
        'Orb of Augmentation': 4,
      },
      from: {
        'Potal Scroll': 7,
      },
    },
  },
  {
    image: 'CurrencyAddModToMagic.png',
    name: {
      en: 'Orb of Augmentation',
      ko: '확장의 오브',
    },
    exchange: {
      to: {
        'Orb of Alteration': 4,
      },
      from: {
        'Orb of Transmutation': 4,
      },
    },
  },
  {
    image: 'CurrencyRerollMagic.png',
    name: {
      en: 'Orb of Alteration',
      ko: '변화의 오브',
    },
    exchange: {
      to: {
        "Jeweller's Orb": 2,
      },
      from: {
        'Orb of Augmentation': 4,
      },
    },
  },
  {
    image: 'CurrencyRerollSocketNumbers.png',
    name: {
      en: "Jeweller's Orb",
      ko: '쥬얼러 오브',
    },
    exchange: {
      to: {
        'Orb of Fusing': 4,
        'Chromatic Orb': 3,
      },
      from: {
        'Orb of Alteration': 2,
      },
    },
  },
  {
    image: 'CurrencyRerollSocketLinks.png',
    name: {
      en: 'Orb of Fusing',
      ko: '연결의 오브',
    },
    exchange: {
      to: {
        'Orb of Chance': 1,
      },
      from: {
        "Jeweller's Orb": 4,
      },
    },
  },
  {
    image: 'CurrencyRerollSocketColours.png',
    name: {
      en: 'Chromatic Orb',
      ko: '색채의 오브',
    },
    exchange: {
      to: {},
      from: {
        "Jeweller's Orb": 3,
      },
    },
  },
  {
    image: 'CurrencyUpgradeRandomly.png',
    name: {
      en: 'Orb of Chance',
      ko: '기회의 오브',
    },
    exchange: {
      to: {
        'Orb of Scouring': 4,
      },
      from: {
        'Orb of Fusing': 1,
      },
    },
  },
  {
    image: 'CurrencyConvertToNormal.png',
    name: {
      en: 'Orb of Scouring',
      ko: '정제의 오브',
    },
    exchange: {
      to: {
        'Orb of Regret': 2,
      },
      from: {
        'Orb of Chance': 4,
      },
    },
  },
  {
    image: 'CurrencyPassiveSkillRefund.png',
    name: {
      en: 'Orb of Regret',
      ko: '후회의 오브',
    },
    exchange: {
      to: {
        'Orb of Alchemy': 1,
      },
      from: {
        'Orb of Scouring': 2,
      },
    },
  },
  {
    image: 'CurrencyWeaponQuality.png',
    name: {
      en: "Blacksmith's Whetstone",
      ko: '대장장이의 숫돌',
    },
    exchange: {
      to: {
        "Glassblower's Bauble": 8,
      },
      from: {
        "Armourer's Scrap": 3,
      },
    },
  },
  {
    image: 'CurrencyArmourQuality.png',
    name: {
      en: "Armourer's Scrap",
      ko: '방어구 장인의 고철',
    },
    exchange: {
      to: {
        "Blacksmith's Whetstone": 3,
      },
      from: {
        "Blacksmith's Whetstone": 1,
      },
    },
  },
  {
    image: 'CurrencyFlaskQuality.png',
    name: {
      en: "Glassblower's Bauble",
      ko: '유리직공의 방울',
    },
    exchange: {
      to: {},
      from: {
        "Blacksmith's Whetstone": 8,
      },
    },
  },
];

export default currencies;
