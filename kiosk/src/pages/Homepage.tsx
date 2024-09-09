import { useNavigate } from 'react-router-dom';

const Homepage = () => {
    const navigate = useNavigate();

    const goToPage2 = () => {
      navigate('/SelectPage');
    };
    
    return (
        <div>
        <h1>Welcome to the Self Serve Kiosk</h1>
        <button onClick={goToPage2}>Order</button>
      </div>
    )
}
export default Homepage;