import HeaderComponent from "../components/HeaderComponent";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function CategoryPage(){
    // CORREGIDO: Agregada la barra final en la URL
    const urlApi = "http://localhost:8000/series/api/v1/categories/";
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    // CORREGIDO: Typo en el nombre de la función
    const handleEdit = async(id) => {
        navigate(`/categories/edit/${id}`);
    }

    const loadData = async() => {
        setLoading(true);
        setError('');
        try {
            console.log("Cargando desde:", urlApi);
            const resp = await axios.get(urlApi);
            console.log("Datos recibidos:", resp.data);
            
            // CORREGIDO: Extraer el array de results si viene paginado
            if (resp.data.results) {
                console.log("Datos paginados, extrayendo results:", resp.data.results);
                setCategories(resp.data.results);
            } else {
                console.log("Datos directos:", resp.data);
                setCategories(resp.data);
            }
        } catch (error) {
            console.error("Error al cargar categorías:", error);
            setError('Error al cargar las categorías');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    const handleDelete = async(id) => {
        if (window.confirm('¿Está seguro de eliminar este registro?')){
            try {
                // CORREGIDO: URL completa para delete
                await axios.delete(`${urlApi}${id}/`);
                // CORREGIDO: Usar === en lugar de !=
                const nLista = categories.filter(item => item.id !== id);
                setCategories(nLista);
                console.log("Categoría eliminada:", id);
            } catch (error) {
                console.error("Error al eliminar:", error);
                alert("Error al eliminar la categoría");
            }
        }
    };

    return (
        <>
            <HeaderComponent />
            <div className="container mt-3">
                <div className="border-bottom pb-3 mb-3">
                    <div className="d-flex justify-content-between">
                        <h3>Categorías</h3>
                        <div>
                            <Link className="btn btn-primary" to="/categories/new">
                                Nuevo
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Mostrar loading */}
                {loading && (
                    <div className="text-center">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Cargando...</span>
                        </div>
                    </div>
                )}

                {/* Mostrar error */}
                {error && (
                    <div className="alert alert-danger" role="alert">
                        {error}
                        <button 
                            className="btn btn-sm btn-outline-danger ms-2"
                            onClick={loadData}
                        >
                            Reintentar
                        </button>
                    </div>
                )}

                {/* Tabla - Solo mostrar si no hay loading ni error */}
                {!loading && !error && (
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th className="text-center">Id</th>
                                <th className="text-center" style={{width: "100px"}}>
                                    Acciones
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {categories.length > 0 ? (
                                categories.map((item) => (
                                    <tr key={item.id}>
                                        <td>{item.nombre}</td>
                                        <td className="text-center">{item.id}</td>
                                        <td className="text-center">
                                            <button 
                                                onClick={() => handleEdit(item.id)} 
                                                className="btn btn-secondary me-2 btn-sm"
                                            >
                                                <i className="bi bi-pencil-square"></i>
                                            </button>
                                            <button 
                                                onClick={() => handleDelete(item.id)} 
                                                className="btn btn-danger btn-sm"
                                            >
                                                <i className="bi bi-trash-fill"></i>
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="3" className="text-center text-muted">
                                        No hay categorías registradas
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                )}

                {/* Debug info */}
                {process.env.NODE_ENV === 'development' && (
                    <div className="mt-3 p-3 bg-light rounded">
                        <small className="text-muted">
                            <strong>Debug:</strong> {categories.length} categorías cargadas
                            <br />
                            <strong>Loading:</strong> {loading.toString()}
                            <br />
                            <strong>Error:</strong> {error || 'ninguno'}
                        </small>
                    </div>
                )}
            </div>
        </>
    );
}

export default CategoryPage;