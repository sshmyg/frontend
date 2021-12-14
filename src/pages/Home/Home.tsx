import React, { Fragment, useCallback } from 'react';
import { Link } from 'react-router-dom';

import { useTranslation } from '@/hooks';
import { Button, Block, Section } from '@/components';

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

export const Home: React.FC = () => {
  const { t, i18n } = useTranslation();

  const handleChangeLang = useCallback(
    () => i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en'),
    [i18n],
  );

  return (
    <Fragment>
      <Section>
        <Link to="/inner">Inner page</Link>
        <br />
        <Button onClick={handleChangeLang}>
          Change language {i18n.language}
        </Button>
      </Section>
      <Section>
        <Block>
          {comments.map((c, i) => (
            <div key={i}>
              <p>{c.content}</p>
              <strong>{c.name}</strong>
              <br />
              <Button>{t('testButton')}</Button>
            </div>
          ))}
        </Block>
      </Section>
    </Fragment>
  );
};
