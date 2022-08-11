
// wie article createn mit JS

// wie image innerhalb des Articles eine Source hinzufügen

// Text hinzufügen

// Blogeintrag der Seite hinzufügen

function isEven (number) {
  if (number % 2 == 0) {
      return true;
  } else {
      return false;
  }
};

const createArticleNode = (articlesCount) => {
  const articleCssClass = isEven(articlesCount) ? 'flex-row' : 'flex-row-reverse';
  console.log(`We have ${articlesCount} articles`);
  const articleNode = document.createElement("article");
  // Das ist nur ein Test
  articleNode.innerText = 'test';
  console.log(articleCssClass);
  articleNode.classList.add(articleCssClass);



  return articleNode;
};

const createBlogEntry = () => {
  const articlesCount = document.querySelectorAll('article').length;
  const section = document.querySelector('.main-content');
  const articleNode = createArticleNode(articlesCount);
  console.log(section);
  section.prepend(articleNode);
  
};



