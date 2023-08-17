'use client';
import Select from 'react-select';
import useCountries from '@/app/hooks/useCountries';

export type CountrySelectedValue = {
    flag: string;
    label: string;
    latlng: number[];
    region: string;
    value: string;
}

interface CountrySelectedProps {
    value?: CountrySelectedValue;
    onChange?: (value: CountrySelectedValue) => void;
}

const CountrySelected: React.FC<CountrySelectedProps> = ({
    value,
    onChange
}) => {
    const { getAll } = useCountries();

    return (
        <div>
            <Select
                placeholder="N'importe où"
                isClearable
                options={getAll()}
            />
        </div>
    )
}

export default CountrySelected;