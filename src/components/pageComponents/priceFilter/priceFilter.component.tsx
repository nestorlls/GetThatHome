import React from 'react';
import { Button, Input } from '../../baseComponents';
import { BiSolidDollarCircle } from 'react-icons/bi';
import { IPrice } from '../../../common/interfaces/filter.interface';
import { useChange } from '../../../common/hooks';

interface PriceFilterProps {
  getValues: (values: IPrice) => void;
}

/**
+ * Renders a price filter component.
+ *
+ * @param {PriceFilterProps} getValues - A function that retrieves the current state values.
+ * @return {JSX.Element} The rendered price filter component.
+ */
export const PriceFilter: React.FC<PriceFilterProps> = ({
  getValues,
}: PriceFilterProps): JSX.Element => {
  const initialValues: IPrice = {
    min: 0,
    max: 0,
  };

  const { state, handleChange } = useChange(initialValues);

  return (
    <div className="price-filter__wrapper">
      <label className="label">price range</label>
      <div className="price-filter__content">
        <div className="price-filter-inputs__wrapper">
          <Input
            name="min"
            type="text"
            id="min"
            size="sm"
            value={state.min}
            onChange={handleChange}
            placeholder="min"
            iconLeft={<BiSolidDollarCircle size={20} color="gray" />}
          />
          <span className="separator"></span>
          <Input
            name="max"
            type="text"
            id="max"
            size="sm"
            value={state.max}
            onChange={handleChange}
            placeholder="max"
            iconLeft={<BiSolidDollarCircle size={20} color="gray" />}
          />
        </div>
        <div className="price-filter__btn">
          <Button type="button" size="small" onClick={() => getValues(state)}>
            done
          </Button>
        </div>
      </div>
    </div>
  );
};