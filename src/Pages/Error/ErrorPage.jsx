import { useLocation, useNavigate } from 'react-router-dom';
import './ErrorPage.css';

function ErrorPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const message =
    location.state?.message || 'Something went wrong';

  return (
    <div className="error-page">
      <div className="error-card">
        <h1>Error</h1>
        <p>{message}</p>

        <button onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
    </div>
  );
}

export default ErrorPage;
