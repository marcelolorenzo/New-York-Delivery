import { Autocomplete } from "@react-google-maps/api";
import { useRef } from "react";
import { Address } from "../../entities/Address";
import { FormField, FormFieldProps } from "../FormField";
import { LoadGoogleScript } from "../LoadGoogleScript";

type Props = {
    value: null | Address
    onChange: (address: null | Address) => void
} & Omit<FormFieldProps, 'value' | 'onChange'>

export function AutocompleteField ({ value, onChange, ...fieldProps}: Props) {
    const autocompleteRef = useRef<null | google.maps.places.Autocomplete>(null)
    const handleLoad = (autocomplete: google.maps.places.Autocomplete) => {
        autocompleteRef.current = autocomplete
        autocomplete.setBounds(new google.maps.LatLngBounds(
            new google.maps.LatLng(40.497205909696895, -74.25460062238943),
            new google.maps.LatLng(40.89079001329174, -73.82201397011647)
        ))
    }

    const handleChange = () => {
        const place = autocompleteRef.current?.getPlace()
        if (place && place.formatted_address && place.geometry?.location) {
            const address: Address = {
                address: place.formatted_address,
                lat: place.geometry.location.lat(),
                lng: place.geometry.location.lng()
            }
            onChange(address)
        }
    }
    return (
        <LoadGoogleScript>
            <Autocomplete
                onLoad={handleLoad}
                onPlaceChanged={handleChange}
                restrictions={{
                    country: 'br'
                }}
                options={{
                    strictBounds: true 
                }}
            >
                <FormField 
                {...fieldProps} 
                onChange={() => onChange(null)}
                defaultValue={value?.address || ' '}
                />
            </Autocomplete>
        </LoadGoogleScript>
    )
}

