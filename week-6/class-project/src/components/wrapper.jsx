export default function Wrapper({ children }) {
  return (
    <div>
      <h2
        style={{
          border: "solid red 2px",
          borderRadius: "20px",
          padding: "20px",
        }}
      >
        {children}
      </h2>
    </div>
  );
}
