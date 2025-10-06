import { MoonLoader } from 'react-spinners';
import type { ISpinner } from './interfaces';

export default function Spinner({ size }: ISpinner) {
  return (
    <MoonLoader
      size={size === 'large' ? 60 : 30}
      color="#4CAF50"
    />
  );
}