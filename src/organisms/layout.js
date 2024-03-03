import './../App.css';
import Footer from './footer'

export default function Layout({
    children,
  })  {
    return (
    <html>
        <div className="App bg-blue-200 min-h-screen flex flex-col justify-center items-center">
        {children}
        </div>
        <Footer/>
    </html>
    )
  }