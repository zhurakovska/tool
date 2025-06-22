import './Likes.css';

export const Likes = (props) => {
  console.log(props, "props");
  return (
    <div className="button-controls">
     <button>❤{props.like}</button>
      <button>Dislike</button>
    </div>
  );
};
