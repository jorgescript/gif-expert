export const GifItem = ({ gif: { url, title } }) => (
  <div>
    <img src={url} alt={title} />
    <p>{title}</p>
  </div>
);
