import React, { Fragment, useCallback, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import { Button, Block, Section } from '@/components';
import { localeContext } from '@/providers/Localization';

import messages from './Home.messages';

const comments = [
  {
    name: 'Test',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, laudantium delectus. Nihil animi molestiae, cumque eaque sit rerum laboriosam quam ea minima veritatis vitae aut ut cupiditate et nam voluptates.',
  },
  {
    name: 'Test 2',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, laudantium delectus. Nihil animi molestiae, cumque eaque sit rerum laboriosam quam ea minima veritatis vitae aut ut cupiditate et nam voluptates.',
  },
];

export const Home = () => {
  const { lang, setLang } = useContext(localeContext);

  const handleChangeLang = useCallback(
    () => setLang(lang === 'en' ? 'ru' : 'en'),
    [setLang, lang],
  );

  return (
    <Fragment>
      <Section>
        <Link to="/inner">Inner page</Link>
        <br />
        <Button onClick={handleChangeLang}>Change language {lang}</Button>
      </Section>
      <Section>
        <Block>
          {comments.map((c, i) => (
            <div key={i}>
              <p>{c.content}</p>
              <strong>{c.name}</strong>
              <br />
              <Button>
                <FormattedMessage {...messages['pages.home.click']} />
              </Button>
            </div>
          ))}
        </Block>
      </Section>
    </Fragment>
  );
};
