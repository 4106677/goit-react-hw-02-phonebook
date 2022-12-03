import { Input } from './Filter.styled';

export const Filter = () => {
  return (
    <div>
      <p>Find contacts by name</p>
      <Input type="text" name="filter" />
    </div>
  );
};
