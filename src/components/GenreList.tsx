import useGenres from '../hooks/useGenres'

const GenreList = () => {
    const {genres} = useGenres();
  return (
    <ul>
     {genres.map(genre => <li>{genre.id}{genre.name}</li>)}
    </ul>
  )
}

export default GenreList