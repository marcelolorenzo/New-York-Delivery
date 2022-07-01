import { useLoadScript } from "@react-google-maps/api";
import { Alert, Spinner } from "react-bootstrap";

const libraries: ("drawing" | "geometry" | "localC ontext" | "places" | "visualization")[] = ['places']

type Props = {
    children: JSX.Element
}

export function LoadGoogleScript({ children }: Props) {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: 'AIzaSyALlCd2X12quqEOjlH2Dqj98vIMvuWVxAQ',
        libraries
    })
    if (loadError) {
        return <Alert variant="danger">Failed to load Google. Reload the website.</Alert>
    }
    if(!isLoaded) {
        return <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading ... </span>

        </Spinner>
    }
    return children
}