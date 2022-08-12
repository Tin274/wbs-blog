
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

const createHtmlElement = (htmlElement, cssClass) => {
  const elementNode = document.createElement(htmlElement);
  if (cssClass) {
    elementNode.classList.add(cssClass);
  }
  return elementNode;
}

const createArticleNode = (articlesCount) => {
  const articleCssClass = isEven(articlesCount) ? 'flex-row' : 'flex-row-reverse';
  const textContainerCssClass = isEven(articlesCount) ? 'text-mountain' : 'text-mountain-reverse';
  console.log(`We have ${articlesCount} articles`);
  const articleNode = document.createElement('article');
  const imageContainerNode = createHtmlElement('div', 'image');
  const imageNode = createHtmlElement('img', 'mountain-image');
  const textContainerNode = createHtmlElement('div', textContainerCssClass);
  const textNode = createHtmlElement('p');

  imageNode.setAttribute('src', '/img/bild_1.webp');
  imageNode.setAttribute('alt', 'mountain night');

  imageContainerNode.append(imageNode);
  textContainerNode.append(textNode);

  articleNode.append(imageContainerNode);
  articleNode.append(textContainerNode);

  

  // articleNode.innerText = 'test';
 
/*   const myImg = document.createElement('img');
  image.onload = function () {

  } */
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



