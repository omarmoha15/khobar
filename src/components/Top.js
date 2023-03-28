import "./Top.css"

function Top(props) {
    return (
      <>
      <div  className={props.cName}>
        <img alt="topimg" src={props.topImg}/>
        <div className="top-text">
            <h1>{props.title}</h1>
            <p>{props.disc}</p>
            <a href={props.url} className={props.btmclass}>{props.btnname}</a>
        </div>

      </div>
      </>
    );
  }
  
  export default Top;