
import styles from './LoginComponent.module.css';
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react';

const LoginComponent: React.FC = () => {
    const { signOut, user } = useAuthenticator((context) => [context.user]);

    return (
        
        <div className={styles.authButton}>
        {user ? (
          <button onClick={signOut} className="btn btn-warning mx-2">Log off</button>
        ) : (
          <Authenticator>
            <button className="btn btn-warning mx-2">Login</button>
          </Authenticator>
        )}
      </div>
    );
};

export default LoginComponent;