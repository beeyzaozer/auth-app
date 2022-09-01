import { Link } from 'react-router-dom';
function Home() {
  return(
    <div>
      <Link to='/login'>Giriş Yap</Link>  
      <Link to='/register'>Kayıt Ol</Link>  
    </div>
  )
}

export default Home;