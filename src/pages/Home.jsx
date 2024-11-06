import { useEffect, useState } from "react";
import Photo from "../components/Photo";
const KEY = import.meta.env.VITE_API_KEY;
const URL = import.meta.env.VITE_API_URL;

const Home = () => {
    const [data, setData] = useState({
    });
    
    const [userError, setUserError] = useState(null);

    useEffect(() => {
        const controller = new AbortController();
        fetchAllData(controller.signal);
        return () => {
            controller.abort();
        };
    }, []);

    const fetchAllData = async (signal) => {
        try {
            const response = await fetch(`${URL}&${KEY}&tags=spain&per_page=24&format=json&nojsoncallback=1`, { signal });
            const objeto = await response.json();

            if (objeto.status === "error") {
                setUserError(`Tuvimos un error: ${objeto.msg}`);
                return;
            }
            setData(objeto.data.photos);
            console.log(objeto);
            console.log(objeto.data);
            console.log(objeto.data.photos);
        } catch (error) {
            if (error.name !== 'AbortError') {
                console.log("Error al hacer el fetch de los datos:", error);
                setUserError("Error al cargar los datos");
            }
        } finally {
            setLoading(false);
        }
    }

    const { photos } = data;
    const { page, pages, perpage, total, photo } = photos;

    return (
        <div>
            soy home
            <button>{page}</button>
            <button>{pages}</button>
            <button>{perpage}</button>
            <button>{total}</button>
            {photo.map((sss) => {
                return (
                    <div key={sss.id}>
                        <Photo {...sss} />
                    </div>
                );
            })}
        </div>
    );
}

export default Home;