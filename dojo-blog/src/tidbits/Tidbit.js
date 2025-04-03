import useFetch from "../useFetch";

const TidBit = () => {
    var id = Math.ceil(Math.random()) * 50;
    var {data: tidbit, error} = useFetch('http://localhost:8000/facts/' + id); //beware this call at the beginning of the sfc is leading to the useFetch to happen too many times because the URL keeps changing. Need to find a fix for that.
    return ( 
        <div className="fun">
            {/*pending && <button>Click for fun!</button>*/}
            {error && <div>{error}</div>}
            {tidbit && 
                <div>
                    <div>{tidbit.fact}</div>
                    <div>Category: {tidbit.category}</div>
                </div>}
        </div>
     );
}
 
export default TidBit;