function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '100px', fontFamily: 'sans-serif' }}>
      <h1>Hello from {import.meta.env.VITE_SERVER_ID}</h1>
    </div>
  )
}
export default App
