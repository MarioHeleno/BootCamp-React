var container = document.getElementById("app")

// Com JS puro
// var titulo = document.createElement("h1")

// titulo.innerHTML = "Titulo inserido via JS"

// container.appendChild(titulo)

// Com React
function Contador(props) {

    // let numero = 0;
    const [numero, setNumero] = React.useState(0);

    function somar() {
        setNumero(numero + 1);
        // console.log("Somei e ficou = " + (numero + 1));
    }

    function subtrair() {
        setNumero(numero - 1);
        // console.log("Subtrai e ficou = " + (numero - 1));
    }

    return (
        <React.Fragment>
            <h1>{props.titulo}</h1>
            <h2>{numero}</h2>
            <button onClick={somar}>+</button>
            <button onClick={subtrair}>-</button>
        </React.Fragment>
    );
}

function App() {
    return (
        <React.Fragment>
            <h1>Vote no seu preferido!</h1>
            <Contador titulo="Pelé"/>
            <Contador titulo="Maradona"/>
            <Contador titulo="Messi"/>
        </React.Fragment>
    );
}

ReactDOM.render(React.createElement(App, null, null), container);
// ReactDOM.render(App(), container);