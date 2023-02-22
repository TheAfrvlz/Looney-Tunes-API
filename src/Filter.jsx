import './Filter.css'

function Filter() {
  return (
    <div className='Filter-Container'>
        <div className="Filter Filter-Text">
            <h1>Name</h1>
            <input name="firstName"/>
        </div>
        <div className="Filter Filter-Range">
            <h1>Episodes</h1>
            <div className="Range">
            <h2 className="Min-Range">0</h2>
            <input type="range" name="" id="" />
            <h2 className="Max-Range">500</h2>
            </div>
        </div>
        <div className="Filter Filter-Checkbox">
            <h1>Peliculas</h1>
            <input type="checkbox" name="" id="" />
        </div>
        <div className="Filter Filter-Text">
            <h1>Cartoons</h1>
            <input name="firstName"/>
        </div>
    </div>
  )
}

export default Filter;
