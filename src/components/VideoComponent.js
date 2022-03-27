import React from 'react';
import PropTypes from 'prop-types';
import YouTube from 'react-youtube';

function VideoComponent({ id }) {
  const opts = {
    height: '300',
    width: '440',
  };
  if (id === undefined) {
    return (
      <>
        <h4>To see country video:</h4>
        <ol className='text-start'>
          <li>Select category</li>
          <li>Click on any country</li>
        </ol>
      </>
    );
  }
  if (id === '') {
    return <h4>No video for this country</h4>;
  }
  return <YouTube videoId={id} opts={opts} />;
}
VideoComponent.defaultProps = {
  id: undefined,
};
VideoComponent.propTypes = {
  id: PropTypes.string,
};

export default VideoComponent;
