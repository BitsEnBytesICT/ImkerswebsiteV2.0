// CSS Import
import '../resources/css/Admin.css';


export const Login = (): JSX.Element => {

    const login = () => {
        
    }

    return (
        <div className='admin-login flex flex-col h-screen'>
            <div className="auth">
                <div className="login-form">
                    <div className='master-key'>
                        <input type='text' placeholder='Master sleutel' name="key"/>
                    </div>
                    <div>
                        <button onClick={login} type='button'>Inloggen</button>
                    </div>
                </div>
            </div>
        </div>
    )
}