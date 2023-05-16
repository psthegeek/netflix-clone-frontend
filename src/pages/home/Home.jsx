import './home.scss'
import Navbar from '../../components/navbar/Navbar'
import Featured from '../../components/featured/Featured'
import List from '../../components/list/List'

const Home = () => {
  return (
    <>
        <div className="home">
          <Navbar/>
          {/* <img
            width="100%"
            src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          /> */}
          <Featured type="movies"/>
          <List/>
          <List/>
          <List/>
          <List/>
        </div>
    </>
  )
}

export default Home
