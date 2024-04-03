import Navbar from "@components/Navbar";
import '@styles/globals.css';

const layout = ({children}) => {
  return (
    <html>
        <body>
            <Navbar />
            {children}
        </body>
    </html>
  )
}

export default layout