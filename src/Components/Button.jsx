export const Button = ({ label, onClick, color }) => {
	return (
		<div
			style={{
				...buttonStyles.container,
				backgroundColor:
					color === "secondary" ? "rgb(79 70 229)" : "rgb(79 70 229)",
			}}
			onClick={onClick}
		>
			<div style={{ textAlign: "center" }}>{label}</div>
		</div>
	);
};

const buttonStyles = {
	container: {
		marginTop: "20px",
		boarder: "1px solid #1512cc",
		boarderRadius: "5px",
		padding: "15px",
		backgroundColor: "rgb(79 70 229)",
		color: "#ffffff",
		borderRadius: "6px",
	},
};
