import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { CardTitle, CardMedia } from 'react-md/lib/Cards';
import Ink from 'react-md/lib/Inks';

import { APP_URI_BASE } from '../utils';

const ImgCard = ({ src, alt, title, to }) => {
  return (
    <Ink>
      <Link to={`${APP_URI_BASE}/${to}`} className="md-card raise ink-item">
        <CardTitle title={title} />
        <CardMedia aspectRatio={CardMedia.aspect.equal}>
          <img src={src} alt={alt} />
        </CardMedia>
      </Link>
    </Ink>
  );
};

ImgCard.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default ImgCard;
