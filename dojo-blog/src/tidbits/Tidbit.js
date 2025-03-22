import { useEffect, useState } from "react";

const TidBit = () => {
    var {data: tidbit, pending, error} = useFetch('https://api.api-ninjas.com/v1/facts');
    const {fun, setFun} = useState(false);
    return ( 
        <div className="fun">
            {pending && <button>Click for fun!</button>}
            {error && <div>{error}</div>}
            {tidbit && <div>{tidbit}</div>}
        </div>
     );
}
 
export default TidBit;