
function CreateInstance() {
  return (
    <>
    
    <main>
      <h1>Create Instance</h1>
      <form>
        <label htmlFor="instanceName">Nome da Instancia</label>
        <input type="text" name="instanceName" id="instanceName" />
        <label htmlFor="instanceDescription">descrição da Instancia</label>
        <input type="text" name="instanceDescription" id="instanceDescription" />
        <label htmlFor="token">Token</label><small>Mantenha em branco para gerar altomaticamente</small>
        <input type="text" name="instanceToken" id="instanceToken" />
        <button type="submit">Cadastrar Instancia</button>
      </form>
    </main> 
    
    </>
  )
}

export default CreateInstance