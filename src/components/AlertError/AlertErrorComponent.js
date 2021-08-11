import './alerterror.css';
const AlertError = ({ children }) => {
    return <div className="alertError">
        <span>{children}</span>
    </div>
}

export default AlertError;