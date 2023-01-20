import {Link} from 'react-router-dom'

function BackBtn() {
  return (
    <div>
      <Link
        className='inline-block bg-orange-600 bg-opacity-50 mt-1'
        to={"/weather-app/"}>
        <i className="fas fa-arrow-left text-xl hover:text-orange-900 text-white pt-2 px-2"></i>
      </Link>
    </div>
  )
}

export default BackBtn