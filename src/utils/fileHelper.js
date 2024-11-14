const showImage = (path) => {
  console.log(path);
  return `${process.env.NEXT_PUBLIC_IMAGE_BASEURL}${path}`;
};

export default showImage;
