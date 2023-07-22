import './diestyle.css'

function DieDataall(props) {
  return (
    <div className='t-card'>
        <div className="t-image">
            <img src={props.image} alt="image1" />
        </div>
            <h4>{props.heading}</h4>
            {/* <p>{props.text}</p> */}
    </div>
  );
}

export default DieDataall;