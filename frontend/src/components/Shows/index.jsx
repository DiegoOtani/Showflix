import { ShowsSectionStyled } from './styles'
import Card from '../Card'

const Shows = ({ shows }) => {
  if(!shows) return <p>Shows not found</p>

  return (
    <ShowsSectionStyled>
      {shows.map(show => (
        <Card 
          key={show.id}
          id={show.id}
          title={show.title}
          imgUrl={show.img_url}
          language={show.language}
          rating={show.rating}
          selected={false}
          onClick={() => console.log('ok')}
        />
      ))}
    </ShowsSectionStyled>
  )
}

export default Shows