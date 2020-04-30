import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import { useActions, useSelector } from 'app/hooks';

import * as sessionActions from 'app/redux/session/actions';
import * as commentsActions from 'app/redux/comments/actions';

import { Button } from 'app/components';

import messages from './Home.messages';

export const Home = () => {
  const { actionCommentAdd, setLang } = useActions({
    ...commentsActions,
    ...sessionActions,
  });
  const { lang, comments } = useSelector((state) => ({
    comments: state.comments,
    lang: state?.session?.lang,
    test: state?.some?.non?.existing?.path ?? 'test',
  }));

  return (
    <Fragment>
      <br />
      <br />
      <br />
      <Link to="/inner">Inner page</Link>
      <Button onClick={() => setLang(lang === 'en' ? 'ru' : 'en')}>
        Change language {lang}
      </Button>
      <br />
      <br />
      <br />
      {comments.map((c, i) => (
        <section key={i}>
          <p>{c.content}</p>
          <strong>{c.name}</strong>
          <Button
            onClick={() => {
              actionCommentAdd(`Text ${i}`);
            }}
          >
            <FormattedMessage {...messages['pages.home.click']} />
          </Button>
        </section>
      ))}
      <br />
      <br />
      <br />
    </Fragment>
  );
};
