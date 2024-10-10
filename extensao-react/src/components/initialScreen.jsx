import "./InitialScreen.css";

const InitialScreen = () => {
  return (
    <div>
      <div>
        <header>
          <h2>User:</h2>
          <button>Carteira Sigma</button>
          <button>Manutenção</button>
        </header>
      </div>
      <main>
        <div>
          <section>
            <h3>Dados do Cliente</h3>
          </section>
        </div>
        <div>
          <section>
            <h3>Descrição</h3>
          </section>
        </div>
        <div>
          <section>
            <h3>Plataformas</h3>
          </section>
        </div>
        <div>
          <section>
            <h3>Plano</h3>
          </section>
        </div>
        <div>
          <section>
            <h3>Dados financeiros</h3>
          </section>
        </div>
      </main>
      <div>
        <footer>
          <button>Sigma</button>
        </footer>
      </div>
    </div>
  );
};

export default InitialScreen;
