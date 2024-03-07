import './../App.css';
import Footer from './footer'
import Header from './header'

export default function Layout({
    children,
  })  {
    return (
    <html>
        <Header/>
        <div className="App bg-blue-200 min-h-screen flex flex-col justify-center items-center">
        {children}
        </div>
        <Footer/>
    </html>
    )
  }