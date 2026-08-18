import './Banner.css'

function Banner(props) {
  return (
    <div className="banner d-flex al-end" style={{ backgroundImage: `url(${props.image})` }}>
       <div className="container">
          <div className="title-painel d-flex al-center jc-center">
                <h1 className="title">{props.title}</h1>
          </div>
       </div>
    </div>
   
  )
}

export default Banner