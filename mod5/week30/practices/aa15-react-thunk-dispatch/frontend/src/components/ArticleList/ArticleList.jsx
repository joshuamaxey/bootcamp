import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchArticles } from '../../store/articleReducer'; // import the 'thunk action creator' that we made in the articleReducer file (called fetchArticles)

const ArticleList = () => {
  const dispatch = useDispatch();
  const articles = useSelector(state=>state.articleState.entries);

  // update the 'dispatch' call INSIDE the useEffect below to dispatch teh returned thunk action from the fetchArticles thunk action creator
  useEffect(() => {
    // dispatch(loadArticles());
    dispatch(fetchArticles()) // dispatch the thunk action (returned from the thunk action creator (fetchArticles)) instead of the default 'loadArticles' action creator. Notice that we dispatch our thunk action creator within our react component in exactly the SAME way that we dispatch a regular action creator.
  }, [dispatch]);

  return (
    <div>
      <h1>Article List</h1>
      <ol>
        {articles.map(({ id, title }) => (
          <li key={id}><NavLink to={`${id}`}>{title}</NavLink></li>
        ))}
      </ol>
    </div>
  );
};

export default ArticleList;
