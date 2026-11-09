import './App.css'

function App() {
  return (
    <main className="resume">
      <header className="intro">
        <p className="job">student</p>
        <h1>russ</h1>
        <p>i am a student learning devoloper</p>
        <div className="contact">
          <a href="#">kuralbaevruslan@gmail.com</a>
          <span>Almaty</span>
        </div>
      </header>

      <section>
        <h2>about me</h2>
        <p>i enjoy learning</p>
      </section>

      <section>
        <h2>education</h2>
        <h3>your school</h3>
        <p>study</p>
      </section>

      <section>
        <h2>skills</h2>
        <p>html, css, javascript, react</p>
      </section>

      <section>
        <h2>projects</h2>
        <h3>my first website</h3>
        <p>a simple website react.</p>
      </section>
    </main>
  )
}

export default App
