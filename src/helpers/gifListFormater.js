import PropTypes from "prop-types";

const gifListFormater = (data) => {
  return data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    };
  });
};

export default gifListFormater;

gifListFormater.propTypes = {
  data: PropTypes.func.isRequired,
};
