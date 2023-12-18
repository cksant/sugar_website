import './css/App.css'

function App() {

  return (
    <>
      <img className='logo' src='../public/logo.png' alt='logo'/>
      <div className='nav-bar'>
        <a href="" target='_blank'>View Menu</a>
        <a href="https://www.ubereats.com/ca/store/sugar-oink-oink/Jg4Mc_ozRk6tX7E84ycdcg" target='_blank'>Order Online</a>
      </div>
      <div className='location-general-info'>
        <p>Location: directions and navigation details</p>
        <h2>Hours</h2>
        <p>Sunday: 6am - 1am</p>
        <p>Monday: CLOSED</p>
        <p>Tuesday: 6pm - 1am</p>
        <p>Wednesday: 6pm - 1am</p>
        <p>Thursday: 6pm - 1am</p>
        <p>Friday: 6pm - 2am</p>
        <p>Saturday: 6pm - 2am</p>
        <p></p>
      </div>
      <div className='gallery'>
        <p>Insert gallery here</p>
      </div>
      <div className='customer-reviews'>
        <p>Insert customer reviews here</p>
      </div>

    </>
  )
}

export default App
