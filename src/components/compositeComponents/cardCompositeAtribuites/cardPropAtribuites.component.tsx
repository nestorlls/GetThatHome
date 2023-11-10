import React from 'react';
import { BiBed, BiBath, BiArea } from 'react-icons/bi';
import { MdPets } from 'react-icons/md';

import { CardPropertyAtribuite } from '../../baseComponents';

interface ICardPropAtribuitesProps {
  bed: number;
  bath: number;
  area: number;
  pet: boolean;
}

/**
 * Renders the card properties attributes.
 *
 * @param props - The properties for the card attributes.
 * @returns The JSX element representing the card properties attributes.
 */
export const CardPropAtribuites: React.FC<ICardPropAtribuitesProps> = (
  props: ICardPropAtribuitesProps
): JSX.Element => {
  const { bed, bath, area, pet } = props;
  return (
    <div className="card-composite__wrapper">
      <CardPropertyAtribuite icon={<BiBed size={20} />} atribuite={bed} />
      <CardPropertyAtribuite icon={<BiBath size={20} />} atribuite={bath} />
      <CardPropertyAtribuite
        icon={<BiArea size={20} />}
        atribuite={area}
        units="m2"
      />
      {pet && (
        <CardPropertyAtribuite icon={<MdPets size={20} />} atribuite={pet} />
      )}
    </div>
  );
};
