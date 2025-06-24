
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function PainelCassiano() {
  const [saldo, setSaldo] = useState(0);
  const [metaMilhao, setMetaMilhao] = useState(1000000);
  const [tarefa, setTarefa] = useState("");
  const [tarefas, setTarefas] = useState([]);
  const [nota, setNota] = useState("");
  const [notas, setNotas] = useState([]);
  const [obras, setObras] = useState([]);
  const [novaObra, setNovaObra] = useState("");

  const adicionarTarefa = () => {
    if (tarefa.trim()) {
      setTarefas([...tarefas, tarefa]);
      setTarefa("");
    }
  };

  const adicionarNota = () => {
    if (nota.trim()) {
      setNotas([...notas, nota]);
      setNota("");
    }
  };

  const adicionarObra = () => {
    if (novaObra.trim()) {
      setObras([...obras, novaObra]);
      setNovaObra("");
    }
  };

  return (
    <div className="grid gap-4 p-4">
      <Card>
        <CardContent className="p-4">
          <h2 className="text-xl font-bold mb-2">💰 Gestão Financeira</h2>
          <p>Saldo atual: R$ {saldo.toLocaleString("pt-BR")}</p>
          <p>Meta: R$ {metaMilhao.toLocaleString("pt-BR")}</p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <h2 className="text-xl font-bold mb-2">📋 Tarefas do Dia</h2>
          <div className="flex gap-2 mb-2">
            <Input value={tarefa} onChange={(e) => setTarefa(e.target.value)} placeholder="Digite nova tarefa" />
            <Button onClick={adicionarTarefa}>Adicionar</Button>
          </div>
          <ul className="list-disc pl-5">
            {tarefas.map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <h2 className="text-xl font-bold mb-2">📝 Anotações Pessoais</h2>
          <Textarea value={nota} onChange={(e) => setNota(e.target.value)} placeholder="Escreva sua anotação aqui" />
          <Button className="mt-2" onClick={adicionarNota}>Salvar Anotação</Button>
          <ul className="mt-2 list-disc pl-5">
            {notas.map((n, i) => (
              <li key={i}>{n}</li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <h2 className="text-xl font-bold mb-2">🏗️ Relatórios de Obras</h2>
          <div className="flex gap-2 mb-2">
            <Input value={novaObra} onChange={(e) => setNovaObra(e.target.value)} placeholder="Nova obra (nome ou endereço)" />
            <Button onClick={adicionarObra}>Cadastrar</Button>
          </div>
          <ul className="list-disc pl-5">
            {obras.map((obra, i) => (
              <li key={i}>{obra}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
