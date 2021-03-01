export default function News(news) {
  return `
  <section id="news">
    <div class="information-container news-container container-fluid">
      <h1>News</h1>
      <div class="search">
        <input type="search" name="news" placeholder="Search News...">
      </div>
      <div class="news-items-container">
        ${NewsItems(news)}
      </div>
    </div>
  </section>
  `;
}

export function NewsItems(news) {
  return news.map(newsItem => `
    <p>
      ${newsItem.title}<br>${newsItem.date}
    <p>
    `).slice(0, 10).join('');
}
