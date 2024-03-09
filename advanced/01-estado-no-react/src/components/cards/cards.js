import Card from '../card/card'

const cardsTitle = ['Título card 1', 'Título card 2', 'Título card 3']

const showCardColor = (color) => {
    console.log(color)
}

const Cards = () => {
    return (
        <div>
            <h2>Meus Cards</h2>

            <div>
                {
                    cardsTitle.map(cardTitle => {
                        return (
                        <Card key={cardTitle} showCardColor={showCardColor}>
                            <h3>{cardTitle}</h3>
                            <p>Esse é um texto do card</p>
                        </Card>
                        )
                    })
                }

                <Card color='blue' showCardColor={showCardColor}>
                    <h3>Card AZUL</h3>
                    <p>Esse é um texto do card</p>
                </Card>



            </div>
        </div>
    )
}

export default Cards