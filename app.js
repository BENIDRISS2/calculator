
class Calculator extends React.Component{
    constructor (props) {
        super(props)
        this.state ={
            disresult:""
        }
        this.hundleClick=this.hundleClick.bind(this)
    }

    hundleClick(value){
        // l'utilisateur doit cliquer soit = ou c
        // pour supprimer avec "c" en verrifiant si l'utilisateur a cliquer sur c
        if(value === "C"){
            // dans ce cas je vide la chaine de caracter 
            this.setState({disresult:""})
        }
        // et si il clique sur "=" on fait evaluation
        else if( value === "="){
            try{
                // utiliser la methode eval pour evaluer l;expression mathmatique
                const leresultat =eval(this.state.disresult)
                // on met a jour le disresult apres l'evaluation en chaine de caracter
                this.setState({disresult:leresultat.toString() })
            } catch (error){
                // et si noua avon des erreus par exemple deux plus
                this.setState({disresult:"error"})
            }} else{
                // Pour tous les autres boutons (chiffres, opérateurs, point)
                // concantener les valeurs
                this.setState({disresult:this.state.disresult+value})
            }
        }
    
    
    render(){
            // Définir les valeurs des boutons
    const buttons = [
        '7', '8', '9', '/',
        '4', '5', '6', '*',
        '1', '2', '3', '-',
        '0', '.', '=', '+',
        'C'
    ];
        return (
            <div className="calculator">
            <input type="text"
            className="disresult"
            value={this.state.disresult} 
            //    controler les interactions avec buttons
               readOnly
            />
            {/* inserer les buttons */}
            {/* Tableau buttons : Contient toutes les valeurs des boutons de la calculatrice.
Méthode map : Itère sur chaque valeur du tableau pour créer un bouton correspondant.
Classes CSS :

    operator : Pour les opérateurs mathématiques (/, *, -, +).
    equals : Pour le bouton =.
    clear : Pour le bouton C.
    button : Classe de base pour tous les boutons.

Gestionnaire d'Événements : Chaque bouton appelle handleClick avec sa valeur lorsqu'il est cliqué. */}
            <div className="buttons">{buttons.map((btn, index)=>(
                <button
                        key={index}
                        className={
                            'button ' +
                            (
                                ['/', '*', '-', '+'].includes(btn) ? 'operator' :
                                btn === '=' ? 'equals' :
                                btn === 'C' ? 'clear' : ''
                            )
                        }
                        onClick={() => this.hundleClick(btn)}
                    >
                        {btn}
                    </button>

            )
            )}
            
                {/* les buttons */}
            </div>
            </div>
        )}
}
// const root=document.querySelector("#ig")
// ReactDom.render(<Calculator/>,)

ReactDOM.createRoot(document.querySelector('#ig')).render(<Calculator />)
console.log(<Calculator/>);