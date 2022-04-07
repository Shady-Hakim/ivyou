import React from 'react';
import PropTypes from 'prop-types';

function NewsComponent({ news }) {
  const finalNews = news && news.map((item, idx) => ({ ...item, id: idx }));
  console.log('finalNews', finalNews);
  if (news === undefined) {
    return (
      <>
        <h4>To see country news:</h4>
        <ol className='text-start'>
          <li>Select category</li>
          <li>Click on any country</li>
        </ol>
      </>
    );
  }
  if (!news.length) {
    return <h4>No news for this country</h4>;
  }
  return (
    <div className='news-inside overflow-scroll p-2'>
      {finalNews.map((item) => (
        <div key={item.id} className='card mb-3'>
          <div className='row g-0'>
            <div className='col-md-4'>
              <img
                src={item.urlToImage}
                className='img-fluid rounded-start p-2'
                alt={item.title}
              />
            </div>
            <div className='col-md-8'>
              <div className='card-body text-start'>
                <h6>{item.source.name}</h6>
                <h5 className='card-title text-dark'>{item.title}</h5>
                <p className='card-text'>{item.description}</p>
                <p className='card-text'>
                  <small className='text-muted'>{item.publishedAt}</small>
                </p>
                <a href={item.url}>Read more...</a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
NewsComponent.defaultProps = {
  news: undefined,
};
NewsComponent.propTypes = {
  news: PropTypes.arrayOf(
    PropTypes.shape({
      urlToImage: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      publishedAt: PropTypes.string,
      url: PropTypes.string,
      source: PropTypes.shape({
        name: PropTypes.string,
      }),
    }),
  ),
};

export default NewsComponent;
