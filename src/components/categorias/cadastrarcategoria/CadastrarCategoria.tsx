function CadastrarCategoria() {
    return (
      <div className="container w-1/3 mx-auto">
        <h1 className="text-4xl text-center my-4">Cadastrar Categoria</h1>
        <p className="text-center font-semibold mb-4">
          Preencha as informações abaixo para cadastrar uma nova categoria.
        </p>
        <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
          <header className="py-2 px-6 bg-indigo-600 text-white font-bold text-2xl">
            Nova Categoria
          </header>
          <form className="p-8 bg-slate-200 space-y-4">
            <div>
              <label className="block text-lg font-medium mb-2" htmlFor="descricao">
                Descrição da Categoria
              </label>
              <input
                id="descricao"
                type="text"
                className="w-full p-2 border rounded-md"
                placeholder="Digite a descrição da categoria"
              />
            </div>
            <div className="flex">
              <button
                type="submit"
                className="w-full text-slate-100 bg-indigo-400 hover:bg-indigo-600 py-2"
              >
                Cadastrar
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
  
  export default CadastrarCategoria;
  