// ====== GLOBAL FUNCTION ======
function $(selector) {
    return document.querySelector(selector);
  }
  
  
  // ========================================================================
  // -- Generate articles html content from fakedata.js
  const generateImg = imgList => {
    if(imgList.length === 1){
      return `<li><img src="${imgList[0].imgSrc}" alt="${imgList[0].imgAlt}"></li>`
    }
      return imgList.map(
        img => `<li><img src="${img.imgSrc}" alt="${img.imgAlt}"></li>`
      ).join('')
  }
  
  const generateReview = review => {
    return `
    <br/>
    <a href="${review.URL}">${review.website}</a>
    `
  }
  
  const generateArticle = article => {
    return `
    <article>
    <h2>${article.ranking} - ${article.title}</h2>
    <ul class="imgSlider">
    ${generateImg(article.images)}
    </ul>
    <p>${article.content}<p/>
    <div class="seeReview">
    See more on reviews:
    ${article.reviewsLinks.map(generateReview).join('')}
    </div>
    </article>
    `
  }
  
  const articlesSectionInnerHTML = `
  ${ARTICLES_TITLE}
  ${FAKE_ARTICLES_DATA.map(generateArticle).join('')}
  `;
  
  $("#bestGamesSection").innerHTML = articlesSectionInnerHTML;