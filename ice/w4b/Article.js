class Article {

    constructor(props) {
      this.props = props;
    }
    render() {
      return `<Article>
        <ArticleTitle>${this.props.title}</ArticleTitle>
        <ArticleAuthor>${this.props.author}</ArticleAuthor>
        <ArticleText>${this.props.text}</ArticleText>
      </Article>`;
      
    }
  
  }
  
  module.exports = Article;