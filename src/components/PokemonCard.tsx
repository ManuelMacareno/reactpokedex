import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Figure from 'react-bootstrap/Figure';
import { Pokemon } from '../models/pokemon';

type Props = {
  pokemon: Pokemon;
};

const PokemonCard = ({ pokemon }: Props) => {
  return (
    <Card className="mx-auto" style={{ width: '18rem' }}>
      <Card.Header><b>Tipo:</b> {pokemon.type}</Card.Header>
      <Card.Img
        height="100"
        width="auto"
        variant="top"
        src={pokemon.imggif}
        className="d-block mx-auto w-50"
      />
      <Card.Body>
        <Card.Title className="text-center">{pokemon.id} - {pokemon.name}</Card.Title>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <Figure.Image width={16} height={16} src="https://cdn-icons-png.flaticon.com/128/833/833472.png" />
            <b> HP: </b> {pokemon.hp}
          </ListGroup.Item>
          <ListGroup.Item>
            <Figure.Image width={16} height={16} src="https://cdn-icons-png.flaticon.com/128/834/834240.png" />
            <b> Ataque:</b> {pokemon.attack}
          </ListGroup.Item>
          <ListGroup.Item>
            <Figure.Image width={16} height={16} src="https://cdn-icons-png.flaticon.com/128/1667/1667978.png" />
            <b> Defensa:</b> {pokemon.defense}
          </ListGroup.Item>
          <ListGroup.Item>
            <Figure.Image width={16} height={16} src="https://cdn-icons-png.flaticon.com/128/9718/9718482.png" />
            <b> E.Ataque:</b> {pokemon.sp_atk}
          </ListGroup.Item>
          <ListGroup.Item>
            <Figure.Image width={16} height={16} src="https://cdn-icons-png.flaticon.com/128/7116/7116577.png" />
            <b> E.Defensa:</b> {pokemon.sp_def}
          </ListGroup.Item>
          <ListGroup.Item>
            <Figure.Image width={16} height={16} src="https://cdn-icons-png.flaticon.com/128/1409/1409012.png" />
            <b> Velocidad:</b> {pokemon.speed}
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default PokemonCard;
