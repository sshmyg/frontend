import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import { AppState, Comment } from '@/types';

import { useActions, useSelector } from '@/hooks';

import { setLang } from '@/redux/session/actions';
import { addComment } from '@/redux/comments/actions';

import { Button, Block, Section } from '@/components';

import messages from './Home.messages';

export const Home: React.FC<{}> = () => {
  const actions = useActions({
    addComment,
    setLang,
  });
  const { lang, comments } = useSelector((state: AppState) => ({
    comments: state.comments,
    lang: state?.session?.lang,
  }));

  return (
    <Fragment>
      <Section>
        <Link to="/inner">Inner page</Link>
        <br />
        <Button onClick={() => actions.setLang(lang === 'en' ? 'ru' : 'en')}>
          Change language {lang}
        </Button>
      </Section>
      <Section>
        <Block>
          {comments.map((c: Comment, i: number) => (
            <div key={i}>
              <p>{c.content}</p>
              <strong>{c.name}</strong>
              <br />
              <Button
                onClick={() => {
                  actions.addComment({
                    text: `Text ${i}`,
                    name: `Name ${i}`,
                    date: Date.now(),
                  });
                }}
              >
                <FormattedMessage {...messages['pages.home.click']} />
              </Button>
            </div>
          ))}
        </Block>
      </Section>
    </Fragment>
  );
};
