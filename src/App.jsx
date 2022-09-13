import reactLogo from './assets/react.svg'
import CreatePass from './components/CreatePass'// Importar a lógica de criação de senhas
import Options from './components/Options' // Importar as opções de
import './App.css'
import BtnSubmit from './components/BtnSubmit' //Importar o Botão

function App() {

  return (
    <main className="App">
      <section>
        <div className="circle"></div>
        <div className="section">
          <h1>Gerador de Senhas</h1>
          <Options/>
        </div>
      </section>
    </main>
  )
}

export default App
