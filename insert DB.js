// Type your JavaScript below...
var case_id = parseInt(execution.getProcessBusinessKey()); //buskey
execution.setVariable("myCASEID", case_id);
var numeroDemanda = execution.getVariable("numeroDemanda");
var Cliente = execution.getVariable("Cliente");
var NomeGestor = execution.getVariable("autoNomeGestor");
var tipoVaga = execution.getVariable("tipoVaga");
var dataPrevisaoInicio = execution.getVariable("dataPrevisaoInicio");
var cargo = execution.getVariable("cargo");
var tipoContratacao = execution.getVariable("tipoContratacao");
var SalesForce = execution.getVariable("RES_SalesForce");
var Vagas = execution.getVariable("numeroDeVagas");
var NomeColaborador = execution.getVariable("txtNOME")


var theSql = "INSERT INTO HAR_AberturaDeVagas (caseID, caseStatus, Demanda, Cliente, Gestor, TipoVaga, dataPrevisaoInicio, Cargo, tipoContratacao, SalesForce, VagasRestantes, nomeColaborador) VALUES ("+ case_id +", 'Em Aprovação','"+numeroDemanda+"','"+Cliente+"','"+NomeGestor+"','"+tipoVaga+"','"+dataPrevisaoInicio+"','"+cargo+"','"+tipoContratacao+"','"+SalesForce+"', '"+Vagas+"', '"+NomeColaborador+"')";

execution.setVariable("requestType", "set"); 
execution.setVariable("connId", 0);
execution.setVariable("theSql", theSql); 




