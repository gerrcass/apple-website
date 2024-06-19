import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Hightlights from "./components/Hightlights"
import Model from "./components/Model"
import Features from "./components/Features"

//import * as Sentry from '@sentry/react'

const App = () => {

  // return <button onClick={() => methodDoesNotExist()}>Break the world</button>;


  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Hightlights />
      <Model />
      <Features />
    </main>
  )
}

export default App
// export default Sentry.withProfiler(App)
