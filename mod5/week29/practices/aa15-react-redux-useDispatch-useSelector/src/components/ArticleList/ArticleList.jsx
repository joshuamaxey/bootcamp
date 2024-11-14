import useDispatch from "react-redux";
import loadArticles from "../../../src/store/articleReducer";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const ArticleList = () => {
  const dispatch = useDispatch();

  const articles = useSelector((state) => {
    return state.articleState.entries;
  });

  useEffect(() => {
    dispatch(loadArticles());
  }, [dispatch]);

  return (
    <div>
      <h1>Article List</h1>
      {articles.map(({ id, title }) => (
        <li key={id}>
          <NavLink to={`${id}`}>{title}</NavLink>
        </li>
      ))}
    </div>
  );
};

export default ArticleList;
