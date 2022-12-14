
import { useEffect,useState } from "react";



function Musiquizz() {

    const [link,setLink] = useState();

    useEffect(()=>{
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const code = urlParams.get('code')
        setLink("https://matheusreimer.github.io/Portfolio/?code="+code);
    },[])

    
    return (
      <div className="container">
            <div className="button">
                <a href="musiquizz://app">Redirect to Spotify</a>
            </div>
      </div>
      );
  }
  
  export default Musiquizz;
