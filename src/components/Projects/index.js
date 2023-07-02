import Little from "./little"
import Sidebar from "../Sidebar"
import OrderApp from "./orderApp"
import './index.scss'

const Projects = () => {
  return (
    <div className="App">
    <Sidebar />
    <div className="projects" >
    <Little/>
    <OrderApp />
    </div>
    </div>
  )
}

export default Projects