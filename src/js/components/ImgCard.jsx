import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { CardTitle, CardMedia } from 'react-md/lib/Cards';
import injectInk from 'react-md/lib/Inks';


const ImgCard = ({ src, alt, title, to, ink, ...props }) => {
  return (
    <Link to={`/${to}`} className="md-card raise ink-item img-card" {...props}>
      {ink}
      <CardTitle title={title} />
      <CardMedia aspectRatio={CardMedia.aspect.equal}>
        <img src={src} alt={alt} />
      </CardMedia>
    </Link>
  );
};

ImgCard.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  ink: PropTypes.node.isRequired,
};

export default injectInk(ImgCard);
