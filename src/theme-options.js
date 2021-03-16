const navConfig = {
  'IFTNext': {
    url: 'https://www.ift.org/iftnext',
    description:
      'IFTNEXT is a heightened, purpose-driven commitment to bringing provocative ideas and discoveries together to inspire thoughtful, important conversations that challenge conventional approaches with the goal of informing global issues related to the science of food.'
  },
};

const footerNavConfig = {
  News: {
    href: 'https://www.traceability-dialogue.org',
    target: '_blank',
    rel: 'noopener noreferrer'
  }
};

module.exports = {
  siteName: "Food Ontology",
  subtitle: "Documentation",
  description: "A guide to GFTC's recommended standards and APIs",
  menuTitle: 'FOOD ONTOLOGY ECOSYSTEM',
  segmentApiKey: 'wgrIo8Bul0Ujl8USETG3DB6hONdy4kTg',
  algoliaApiKey: '0215604f45f349255c6d5dda932005b6',
  algoliaIndexName: 'traceability-dialogue_developer',
  baseUrl: 'https://docs.foodontology.com/',
  contentDir: '/source/',
  twitterHandle: 'IFT',
  spectrumHandle: 'ift',
  spectrumPath: '/doc-gdst',
  youtubeUrl: 'https://www.youtube.com/user/IFTlive',
  logoLink: 'https://www.foodontology.com/',
  defaultVersion: 'default',
  navConfig,
  footerNavConfig
};
