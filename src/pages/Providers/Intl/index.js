import { Fragment } from 'react';
import { connect } from 'react-redux';
import {
    addLocaleData,
    IntlProvider
} from 'react-intl';
import en from 'react-intl/locale-data/en';
import ru from 'react-intl/locale-data/ru';

import messages from 'app/locales';

addLocaleData([
    ...en,
    ...ru
]);

function mapStateToProps(state) {
    const { lang } = state.session;

    return {
        locale: lang,
        messages: messages[lang],
        textComponent: Fragment
    };
}

export default connect(mapStateToProps)(IntlProvider);
