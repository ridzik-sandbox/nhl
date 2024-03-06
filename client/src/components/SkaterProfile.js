import { useContext, React } from 'react';

export default function SkaterProfile() {
  const skater = useContext(SkaterContext);
  return <>Hello {skater.id}</>;
}
