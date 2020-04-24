const manager = require('react-intl-translations-manager');
const {
  default: manageTranslations,
  readMessageFiles,
  getDefaultMessages,
} = manager;

const defaultLanguage = 'en';
const messagesDirectory = 'build/messages';

manageTranslations({
  messagesDirectory,
  translationsDirectory: 'src/locales/messages',
  whitelistsDirectory: 'src/locales/whitelists',
  languages: ['en'],

  overrideCoreMethods: {
    provideWhitelistFile: (props) => {
      // Avoid reporting untranslated stuff in defaultLanguage
      if (props.lang === defaultLanguage) {
        const messageFiles = readMessageFiles(messagesDirectory);
        const messages = getDefaultMessages(messageFiles).messages;
        return Object.keys(messages);
      } else {
        // This is no good, unfortunately :(
        // You could do your own whitelist retrieval here..
        return [];
      }
    },
  },
});
