class Todo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            input: "",
            todos: [],
            modifIndex: null,
            modifInput: ""
        }
    }

    render() {
        return (
            <div className="container col-lg-6 offset-lg-6 col-12 m-auto mt-5">
                <div className="input-group mb-3">
                    <input type="text"
                        value={this.state.input}
                        onChange={(e) => {
                            this.setState({ input: e.target.value })
                        }}
                        className="form-control"
                        placeholder="Ajouter une tache" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button className="btn btn-outline-primary"
                        onClick={() => {
                            this.setState({ todos: [...this.state.todos, this.state.input] })
                        }}
                        id="button-addon2">Ajouter</button>
                </div>
                <div className="list-group">
                    <ul class="list-group" >
                        {this.state.todos.map((todo, index) => {
                            return <li key={index} class="list-group-item d-flex justify-content-between align-items-start">
                                {this.state.modifIndex === index ? (
                                    <div className="ms-2 me-auto d-flex">
                                        <input type="text"
                                            value={this.state.modifInput}
                                            onChange={(e) => {
                                                this.setState({modifInput: e.target.value })
                                            }}
                                            className="form-control" />
                                        <button class="btn btn-sm btn-outline-success"
                                            onClick={() => {
                                                const newTodos = [...this.state.todos];
                                                newTodos[index] = this.state.modifInput;
                                                this.setState({
                                                    todos: newTodos,
                                                    modifIndex: null,
                                                    modifInput: ""
                                                })
                                            }}
                                        >Enregistrer</button>
                                    </div>
                                ) : (
                                    <div class="ms-2 me-auto">
                                        {todo}
                                    </div>
                                )}
                                <i className="fa-solid fa-pen-to-square me-3"
                                    onClick={() => {
                                        this.setState({
                                            modifIndex: index,
                                            modifInput: this.state.todos[index]
                                        })
                                    }}
                                    style={{ color: "#FFD43B" }}>
                                </i>
                                <i className="fa-solid fa-trash"
                                    onClick={() => {
                                        //filtrer le tableau en fonction de l'index des éléments
                                        this.setState({ todos: this.state.todos.filter((element, i) => i !== index) });
                                    }}
                                    style={{ color: "#ed0202" }}></i>
                            </li>
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<Todo />, document.getElementById("root"));