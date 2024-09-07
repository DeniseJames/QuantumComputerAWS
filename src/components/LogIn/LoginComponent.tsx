import styles from './LoginComponent.module.css';
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const LoginComponent: React.FC = () => {
    const { signOut, user } = useAuthenticator((context) => [context.user]);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate('/');
        }
    }, [user, navigate]);

    const handleSignOut = () => {
        signOut();
        navigate('/');
    };

    return (
        <div className={styles.authButton}>
            {user ? (
                <button onClick={handleSignOut} className="btn btn-warning mx-2">Log off</button>
            ) : (
                <Authenticator>
                    <button className="btn btn-warning mx-2">Login</button>
                </Authenticator>
            )}
        </div>
    );
};

export default LoginComponent;
