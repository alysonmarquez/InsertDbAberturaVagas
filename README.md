### 💾 Script de Inserção de Vaga no Banco de Dados (HAR_AberturaDeVagas)

Este script é executado durante o fluxo do processo para registrar a solicitação de abertura de vaga no banco de dados. Ele coleta variáveis do processo, monta uma query SQL e define parâmetros para execução posterior via conexão com o banco.

#### 🔍 O que o script faz:

1. **Obtém o `businessKey` do processo atual** e converte para inteiro (`case_id`);
2. **Armazena esse ID como variável do processo** com o nome `myCASEID`;
3. **Coleta variáveis do formulário**, como:
   - Número da demanda (`numeroDemanda`)
   - Nome do cliente (`Cliente`)
   - Nome do gestor responsável (`autoNomeGestor`)
   - Tipo da vaga (`tipoVaga`)
   - Previsão de início (`dataPrevisaoInicio`)
   - Cargo (`cargo`)
   - Tipo de contratação (`tipoContratacao`)
   - ID do registro no SalesForce (`RES_SalesForce`)
   - Quantidade de vagas (`numeroDeVagas`)
   - Nome do colaborador que está solicitando (`txtNOME`)
4. **Monta uma instrução SQL `INSERT`** para gravar esses dados na tabela `HAR_AberturaDeVagas`;
5. Define as seguintes variáveis para que a execução do SQL ocorra corretamente:
   - `requestType` como `"set"`
   - `connId` como `0` (ID da conexão com o banco configurada no sistema)
   - `theSql` com a string SQL construída.

#### 🛠️ Exemplo da query gerada:
```sql
INSERT INTO HAR_AberturaDeVagas (
  caseID, caseStatus, Demanda, Cliente, Gestor, TipoVaga,
  dataPrevisaoInicio, Cargo, tipoContratacao, SalesForce,
  VagasRestantes, nomeColaborador
) VALUES (
  12345, 'Em Aprovação', '987654', 'Cliente XYZ', 'João Silva',
  'Prospecção', '2025-05-01', 'Desenvolvedor', 'CLT',
  'SF123456', '2', 'Carlos Andrade'
);
```
