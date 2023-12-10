export const TextInput = ({
    onTextChange,
    placeholder,
    type,
    value,
    inputStyle,
}) => {
    return (
        <div style={{display:"flex", flex:1}}>
            <input
            type={type}
            placeholder={placeholder}
            style={styles.input}
            onChange={(e) => onTextChange(e.target.value)}
            value={value}
            />
        </div>
    );
};

const styles = {
    input : {
        marginButtom: 10,
        padding: 10,
        fontsize: 16,
        borderRadius: 5,
        width: "100%",
    },
};