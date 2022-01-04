import './styles.css';

import { Genre } from 'core/models/Genre';
import { makePrivateRequest } from 'core/utils/requests';
import { useEffect, useState } from 'react';
import Select from 'react-select';


type Props = {
  name?: string;
  genre?: Genre;
  handleChangeGenre: (genre: Genre) => void;
}

const GenreFilter = ({ name, genre, handleChangeGenre }: Props) => {

  const [genres, setGenres] = useState<Genre[]>()
  const [isLoadingGenres, setIsLoadingGenres] = useState(false);

  useEffect(() => {
    setIsLoadingGenres(true);
    makePrivateRequest({ url: "/genres" })
      .then(response => setGenres(response.data))
      .finally(() => setIsLoadingGenres(false));
  }, []);

  return (
    <div className="filter-container card-container-shadow">
      <Select
        name="genres"
        key={genre?.id}
        value={genre}
        options={genres}
        getOptionLabel={(option: Genre) => option.name}
        getOptionValue={(option: Genre) => String(option.id)}
        isLoading={isLoadingGenres}
        onChange={value => handleChangeGenre(value as Genre)}
        className="filter-select-container"
        classNamePrefix="filter-select"
        isClearable
      />
    </div>
  )
}

export default GenreFilter
