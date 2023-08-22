import { useParams } from "react-router-dom";
import articles from "./article-content";

function ArticlePage() {
  const { articleId } = useParams();
  // const articleId = params.articleId;
  const article = articles.find((article) => article.name === articleId);
  return (
    <>
      <h1>{article.title}</h1>
      {article.content.map((p) => (
        <p>{p}</p>
      ))}
    </>
  );
}

export default ArticlePage;
