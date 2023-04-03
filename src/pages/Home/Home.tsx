import React, { Fragment, useCallback } from 'react';

import { useTranslation } from '@/hooks';
import { Button, Block, Section, useOutletContext, Link } from '@/components';

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
  const { t, i18n } = useTranslation();
  const { testProp } = useOutletContext<{ testProp: string }>();

  const handleChangeLang = useCallback(
    () => i18n.changeLanguage(i18n.language === 'en' ? 'uk' : 'en'),
    [i18n],
  );

  const handleClick = useCallback(() => {
    console.log(testProp);
  }, [testProp]);

  return (
    <Fragment>
      <Section>
        {/* eslint-disable-next-line i18next/no-literal-string */}
        <Link to="/inner">Inner page</Link>
        <br />
        {/* eslint-disable-next-line i18next/no-literal-string */}
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
              <Button onClick={handleClick}>{t('testButton')}</Button>
            </div>
          ))}
        </Block>
      </Section>
    </Fragment>
  );
};
