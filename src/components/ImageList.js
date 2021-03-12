import React from 'react';

const ImageList = (props) => {
	const fullImages = props.images.map(({ id, description, urls }) => {
		return <img key={id} src={urls.regular} alt={description} />;
	});
	return <div>{fullImages}</div>;
};

export default ImageList;
