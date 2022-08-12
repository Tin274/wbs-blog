function isEven (number) {
  if (number % 2 == 0) {
    return true;
  } else {
    return false;
  }
};

const requestRandomImageFromUnsplash = async () => {
  const response = await fetch('https://api.unsplash.com/photos/random?client_id=odyVqPxIX-8GwZAmOff3ORRL2rQd3_Id-_AV__vcchI');
  const imageData = await response.json();
  const imageUrl = imageData.urls.regular;
  return imageUrl;
}

const createHtmlElement = (htmlElement, cssClass) => {
  const elementNode = document.createElement(htmlElement);
  if (cssClass) {
    elementNode.classList.add(cssClass);
  }
  return elementNode;
}

const createArticleNode = async (articlesCount) => {
  const imageUrl = await requestRandomImageFromUnsplash();
  const textareaValue = document.getElementById('new-text').value;
  const articleCssClass = isEven(articlesCount) ? 'flex-row' : 'flex-row-reverse';
  const textContainerCssClass = isEven(articlesCount) ? 'text-mountain' : 'text-mountain-reverse';
  console.log(`We have ${articlesCount} articles`);
  const articleNode = document.createElement('article');
  const imageContainerNode = createHtmlElement('div', 'image');
  const imageNode = createHtmlElement('img', 'mountain-image');
  const textContainerNode = createHtmlElement('div', textContainerCssClass);
  const textNode = createHtmlElement('p');

  textNode.innerText = textareaValue;

  imageNode.setAttribute('src', imageUrl);
  imageNode.setAttribute('alt', 'mountain night');
  console.log(imageUrl);

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

const createBlogEntry = async () => {
  const articlesCount = document.querySelectorAll('article').length;
  const section = document.querySelector('.main-content');
  const articleNode = await createArticleNode(articlesCount);
  console.log(section);
  section.prepend(articleNode);
  
};



