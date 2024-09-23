import './Home.css';

export default function Home(){
    return (
        <div className='home-page'>
            <div className="page-header"></div>
                <main className='home-container'>
            <div className="banner-text">
                <h1>Welcome to App Invest!</h1>
                <h2 className='banner-sub-text'>Start managing your investments wallet right now!</h2>
                </div>
            <div className="action-buttons">
                <a href="">Create an Account</a>        
                <a href="">Login</a>        
            </div>
        </main>
            <div className="page-footer"></div>
        </div>

    );
}
