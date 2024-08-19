'use client';

import React, { useState } from 'react';
import Image, { ImageProps } from 'next/image';

type ImageWithFallbackProps = ImageProps & {
	fallbackSrc?: string;
};

const ImageWithFallback = (props: ImageWithFallbackProps) => {
	const { src, fallbackSrc = '/broken-src.svg', ...rest } = props;
	const [imgSrc, setImgSrc] = useState(src);

	return (
		<Image
			{...rest}
			alt="image"
			src={imgSrc}
			onError={() => {
				setImgSrc(fallbackSrc);
			}}
		/>
	);
};

export default ImageWithFallback;
