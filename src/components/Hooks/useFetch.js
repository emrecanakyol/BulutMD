import { useState, useEffect } from "react";

//Datamızı url üzerinden Fetch işlemi ile çekiyoruz.
//Kod tekrarı olmaması açısından Custom Hook yapımızla tüm ekranlarımızda kullanmayı hedefliyoruz.
const useFetch = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('https://gist.githubusercontent.com/hknclk/5710c4adb791755b31ccde6777f04bd2/raw/19954b5d84f476a1d691ce43e4319292893cc27a/sample.json');
            const json = await response.json();
            setData(json.entries);
            setLoading(false);
        } catch (error) {
            setLoading(false);
        }
    }

    return {data, loading}
}

export default useFetch;