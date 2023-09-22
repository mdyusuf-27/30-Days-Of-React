import React from 'react'
import ReactDOM from 'react-dom'
import asabenehImage from './images/asabeneh.jpg'
import htmlImg from './images/html_logo.png'
import cssImg from './images/css_logo.png'
import jsImg from './images/js_logo.png'
import reactImg from './images/react_logo.png'

// Fuction to show month date year

const showDate = (time) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const month = months[time.getMonth()].slice(0, 3)
  const year = time.getFullYear()
  const date = time.getDate()
  return ` ${month} ${date}, ${year}`
}

// Header Component
const Header = ({
  data: {
    welcome,
    title,
    subtitle,
    author: { firstName, lastName },
    date,
  },
}) => {
  return (
    <header>
      <div className='header-wrapper'>
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>
          {firstName} {lastName}
        </p>
        <small>{showDate(date)}</small>
      </div>
    </header>
  )
}

// TechList Component
const TechList = ({ techs }) => {
  const techList = techs.map((tech) => <li key={tech}>{tech}</li>)
  return techList
}

// User Card Component
const UserCard = ({ user: { firstName, lastName, image } }) => (
  <div className='user-card'>
    <img src={image} alt={firstName} />
    <h2>
      {firstName}
      {lastName}
    </h2>
  </div>
)

// A button component

const Button = ({ text, onClick, style }) => (
  <button style={style} onClick={onClick}>
    {text}
  </button>
)

const buttonStyles = {
  backgroundColor: '#61dbfb',
  padding: 10,
  border: 'none',
  borderRadius: 5,
  margin: 3,
  cursor: 'pointer',
  fontSize: 18,
  color: 'white',
}

// Main Component
const Main = ({ user, techs, greetPeople, handleTime, img }) => (
  <main>
    <div className='main-wrapper'>
      <p>Prerequisite to get started react.js:</p>
      <ul>
        <TechList techs={techs} />
      </ul>
      <UserCard user={user} />
      <Button text='Greet People' onClick={greetPeople} style={buttonStyles} />
      <Button text='Show Time' onClick={handleTime} style={buttonStyles} />
      <br />
      <br />
      <ImageView img={img} style={styles} styleImg={styleImg} />
      <br />
      <Form style={stylesForm} styles={inputStyle} button={<Button text="Click Here" onClick={ButtonForm} style={styleButton} />} />
      <br />
      <HexaColor />
      <HexaColor />
      <HexaColor />
      <HexaColor />
      <HexaColor />
      <br />
      <Id user={user} style={idStyle} />
    </div>
  </main>
)

// Footer Component
const Footer = ({ copyRight }) => (
  <footer>
    <div className='footer-wrapper'>
      <p>Copyright {copyRight.getFullYear()}</p>
    </div>
  </footer>
)

// Common styling
const styles = {
  width: '100%',
  backgroundColor: "#F0F1F7",
  height: "300px",
  textAlign: "center",
}

const styleImg = {
  width: "250px",
  padding: "20px",
}

// Form styling 
const stylesForm = {
  width: '100%',
  backgroundColor: "#C2E6F4",
  height: "300px",
  textAlign: "center",
}

const inputStyle = {
  padding: "10px",
  margin: "10px",
  borderRadius: "5px",
  border: "none"
}

const styleButton = {
  padding: "15px",
  backgroundColor: "#F37474",
  width: "250px",
  border: "none",
  color: "#FFF"
}

// Image Component
const ImageView = (props) => {

  const images = props.img;
  const { image1, image2, image3, image4 } = images
  const { style } = props
  const { styleImg } = props

  return (
    <>
      <div style={style}>
        <br />
        <h3>Front End Technologies</h3>
        <img src={image1} style={styleImg} />
        <img src={image2} style={styleImg} />
        <img src={image3} style={styleImg} />
        <img src={image4} style={styleImg} />
        <br />
      </div>
    </>
  );
};

// Form using Props

const Form = (props) => {
  const { button } = props

  return (
    <div style={stylesForm}>
      <br />
      <h2>SUBSCRIBE</h2>
      <p>Sign up with your email address to receive news and updates</p>
      <br />
      <input style={inputStyle} placeholder='First name' />
      <input style={inputStyle} placeholder='Last name' />
      <input style={inputStyle} placeholder='Email' />
      <br />
      <br />
      {button}
    </div>
  )
}

const ButtonForm = () => {
  alert("Hello There !")
}

// Random color change
const hexaColor = () => {
  let str = '0123456789abcdef'
  let color = ''
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length)
    color += str[index]
  }
  return '#' + color
}


const HexaColor = () => {
  const bgColor = hexaColor()
  const styles = {
    backgroundColor: hexaColor(),
    color: "#FFF",
    height: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Montserrat',
    margin: '2px auto',
    borderRadius: '5px',
    width: '75%',
    border: '2px solid black',
  }
  return (
    <div style={styles}>
      <h2>{bgColor}</h2>
    </div>
  )
}
const idStyle = {
  backgroundColor: "#2ACFCF",
  color: "#FFF",
  padding: "10px",
  margin: "3px",
  borderRadius: "10px"
}

const Id = ({ user: { firstName, lastName, image, occupation } }) => {
  return (
    <div style={{ height: "500px", backgroundColor: "#F0F1F7", padding: "20px" }}>
      <img src={image} style={{ width: "150px", borderRadius: "50%" }} />
      <br />
      <strong>{firstName} {lastName}</strong>
      <p>{occupation}</p>
      <p>Skills</p>
      <br />
      <br />
      <div>
        <span style={idStyle}>HTML</span>
        <span style={idStyle}>CSS</span>
        <span style={idStyle}>Sass</span>
        <span style={idStyle}>JS</span>
        <span style={idStyle}>React</span>
        <span style={idStyle}>Redux</span>
        <span style={idStyle}>Node</span>
        <span style={idStyle}>MongoBD</span>
        <span style={idStyle}>Python</span>
        <span style={idStyle}>Flask</span>
        <span style={idStyle}>Django</span>
        <span style={idStyle}>NumPy</span>
        <span style={idStyle}>Pandas</span>
        <span style={idStyle}>Data Analysis</span>
        <br /><br />
        <span style={idStyle}>MySQL</span>
        <span style={idStyle}>GraphQL</span>
        <span style={idStyle}>D3.js</span>
        <span style={idStyle}>Gatsby</span>
        <span style={idStyle}>Docker</span>
        <span style={idStyle}>Heroku</span>
        <span style={idStyle}>Git</span>
      </div>
    </div>
  )
}

// The App, or the parent or the container component
// Functional Component
const App = () => {

  const img = {
    image1: htmlImg,
    image2: cssImg,
    image3: jsImg,
    image4: reactImg
  }

  const data = {
    welcome: 'Welcome to 30 Days Of React',
    title: 'Getting Started React',
    subtitle: 'JavaScript Library',
    author: {
      firstName: 'Asabeneh',
      lastName: 'Yetayeh',
      occupation: 'Senior Developer'
    },
    date: new Date(), // date needs to be formatted to a human readable format
  }
  const date = new Date()
  const techs = ['HTML', 'CSS', 'JavaScript']
  // copying the author from data object to user variable using spread operator
  const user = { ...data.author, image: asabenehImage }

  const handleTime = () => {
    alert(showDate(new Date()))
  }
  const greetPeople = () => {
    alert('Welcome to 30 Days Of React Challenge, 2020')
  }

  return (
    <div className='app'>
      <Header data={data} />
      <Main
        user={user}
        techs={techs}
        handleTime={handleTime}
        greetPeople={greetPeople}
        img={img}
      />
      {/* <Footer copyRight={date} /> */}
    </div>
  )
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
