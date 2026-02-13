import './App.css'
import BasicProps from "./components/BasicProps.jsx"
import ChildrenProps from "./components/ChildrenProps.jsx"
import ComplexProps from "./components/ComplexProps.jsx"
import RefProps from "./components/RefProps.jsx"
import ThemeToggler from "./components/ThemeToggler.jsx"

function Navigation(){
  const isDark =true;
  const section = [
    {id:'basic' , label:'basic props' ,icon :'📦'},
    {id:'ref' , label:'ref props' ,icon :'🔗'},
    {id:'complex' , label:'complex props' ,icon :'🧩'},
    {id:'children' , label:'children props' ,icon :'👶'},
    {id:'theme' , label:'theme props' ,icon :'🎨'}
  ];
  return (
    <nav className={`sticky top-0 z-50 ml-2 shadow-md `}>
      <div>
        <div className='flex justify-center'>
          {section.map((section) => (
            <button key={section.id} className='px-4 py-2 rounded-lg font-medium bg-amber-500 text-black mr-4 mt-2 transition-all hover:bg-red-400'>
                <span>
                  {section.icon}
                </span>
                {section.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}

function AppContent(){
  const isDark = true;
  return(
    <div className="min-h-screen bg-gray-700">
      <Navigation/>
      <div className='container mx-auto px-4 py-8 text-white'>
      <header className={`text-center transition-colors ${isDark ? "text-white" : "text-gray-600"}`}>
          <h1 className='font-bold text-5xl mb-4'>React Props Explained</h1>
          <p className={`${isDark ? "text-gray-300" : "text-gray-600"} mb-4`}>A guide to understand the React better </p>
        </header>
        <div className='space-y-8'>
            <div id='basic' className='scroll-mt-200'>
              <BasicProps/>
            </div>
            <div id='ref' className='scroll-mt-200'>
              <RefProps/>
            </div>
            <div id='complex' className='scroll-mt-200'>
              <ComplexProps/>
            </div>
            <div id='children' className='scroll-mt-200'>
              <ChildrenProps/>
            </div>
            <div id='theme' className='scroll-mt-200'>
              <ThemeToggler/>
            </div>
        </div>
        <footer className={`mt-12 pd-8 text-center transition-colors 
        ${isDark ? "text-gray-200" : "text-gray-400"}`}>
          <p className='text-sm'>made using vite,react and tailwind css</p>
        </footer>
      </div>
    </div>
  );
}
function App() {

  return (
    <>
    <AppContent/>
    </>
  )
}

export default App;
