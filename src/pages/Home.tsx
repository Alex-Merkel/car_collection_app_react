import Background from '../assets/images/car.jpg'

const Home = () => {
  return (

    <div 
        style={{ backgroundImage: `url(${ Background })`}}
        className="flex flex-row justify-center mx-auto bg-cover bg-fixed"
        >
          <div className='flex place-items-center h-screen'>
            <h3 className="p-5 bg-blue-400 bg-opacity-70 text-xl text-white rounded">Welcome to your Car Collection</h3>
          </div>
    </div>

  )
}

export default Home
