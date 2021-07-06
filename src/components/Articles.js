import React from 'react';
import { useParams, Switch, Route, useRouteMatch } from 'react-router-dom';
import useTeamsArticles from '../hooks/useTeamsArticles';
import Sidebar from './Sidebar';
import useArticle from '../hooks/useArticle';
import Loading from './Loading';

const Article = () => {
  const { teamId, articleId } = useParams();
  const { response: article, loading } = useArticle({ teamId, articleId });

  if (loading) {
    return null;
  }

  return (
    <div className='panel'>
      <article className='article'>
        <h1 className='header'>{article.title}</h1>
        <p>{article.body}</p>
      </article>
    </div>
  );
};

const Articles = () => {
  const { teamId } = useParams();
  const { response: articles, loading } = useTeamsArticles(teamId);
  const { path } = useRouteMatch();

  if (loading) {
    return <Loading />;
  }

  return (
    <div className='container two-column'>
      <Sidebar
        title='Articles'
        list={articles.map((article) => article.title)}
      />
      <Switch>
        <Route path={`${path}/:articleId`}>
          <Article />
        </Route>
        <Route path='*'>
          <div className='sidebar-instruction'>Select an article</div>
        </Route>
      </Switch>
    </div>
  );
};
export default Articles;
