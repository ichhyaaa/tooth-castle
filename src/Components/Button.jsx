export const Button = ({ label, onClick, color}) =>{
    return (
        <div style={{
            ...buttonStyles.container,
            backgroundColor: color === "secondary" ? "#3677e0?" : "#1567eb", 
        }}
        onClick={onClick}
        >
            <div style={{ textAlign: "center" }}>{label}
            </div>
        </div>
    );
};

const buttonStyles = {
    container: {
        boarder: "1px solid #1512cc",
        boarderRadius: "5px",
        padding: "20px",
        backgroundColor: "#1567eb",
        color: "#ffffff",
    },
};