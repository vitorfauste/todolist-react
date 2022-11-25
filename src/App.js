import { useState } from "react";

export default function App() {
    const tarefas = ["Estudar JS", "Estudar LMS"];

    function add() {
        input.value = input.value.trim();
        if (input.value != "") {
            tarefas.push(tarefa);
            input.value = "";
        }
    }

    return <section>
        <h1>Tarefas</h1>
        <li>{tarefas}</li>
        <input></input>
        <button onclick={add}>Adicionar</button>
    </section>
}