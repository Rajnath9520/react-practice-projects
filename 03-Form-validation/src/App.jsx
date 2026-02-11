import './App.css'
import Registration from './Components/Registration'

function App() {


  return (
    <>
      <div className='min-h-screen bg-blue-100 flex items-center justify-center'>
        <div className=' bg-white p-8 rounded-2xl shadow-md  flex flex-col gap-4 items-center justify-center w-full max-w-md'>
          <h1 className='text-2xl font-bold'>Registration Form</h1>
          <Registration/>
        </div>
      </div>
    </>
  )
}

export default App
