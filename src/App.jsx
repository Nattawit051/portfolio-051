import { useState } from 'react'
import './App.css'
import { ImageProfile } from './components/ImageProfile'
import { Title } from './components/Title'
import moment from 'moment';

function App() {
  const [hide, setHide] = useState(false)

  return (
    <main id="main">
      <div className="leftPort">
        <ImageProfile image="/src/assets/ProfileImage.png" />

        <Title title="Nattawit Littidej (Ice)">
          <h3>Position : Programmer</h3>
        </Title>

        <Title title="Contact">
          <p style={{ display: hide ? 'none': 'block'}} >
            Tel : +66815702177
          </p>
          <button onClick={() => setHide(!hide)}>
            {hide ? 'Show': 'Hide'}
          </button>
          <p>Email : s64122202051@ssru.ac.th</p>
          <p>https://www.linkedin.com/in/nattawit-littidej-4a2563199/</p>
        </Title>
    
        <Title title="Education">
          <p>Bachelor's degree Faculty of Science and Technology</p>
          <p>Information Technology</p> 
          <p>-GPA 3.74</p> 
        </Title>
      </div>

      <div className="rightPort">
      <Title title="Personal Info">
          <p>Birth : {moment("2002/05/18").format("D MMM YYYY")}</p>
          <p>Nationality : Thai</p>
          <p>Height : 187</p>
          <p>Weight : 55</p>
        </Title>

        <Title title="Profile">
          <p>I'm an IT student who likes to study and learn about programming, AI and game development.</p>
          <p>I'm always ready to find new knowledge.</p>
        </Title>

        <Title title="Work Experience">
          <p>-Artificial Intelligence Skills Training.</p>
          <p>-Has Experience working on Android application projects.</p>
          <p>-Has Experience working on Website projects with HTML and CSS.</p>
        </Title>

        <Title title="Skills">
          <p>HTML / CSS / JS</p>
          <p>React.js, Next.js, Vue,js</p>
          <p>Flutter, Dart</p>
          <p>Git</p>
        </Title>
      </div>
    </main>
  )
}

export default App
