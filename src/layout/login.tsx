import '../resources/css/App.css';
import Header from './components/header';

export const Login = (): JSX.Element => {
    return (
        <div className='flex flex-col h-screen bg-yellow-700'>
            <header>
                <Header/>
            </header>
            <div className="login-form">
                <div className='master-key'>
                    <input type='text' placeholder='Master sleutel' name="key"/>
                </div>
            </div>
        </div>
    )
}