import { useState } from 'react';
import { SearchBlock, SearchResults } from '../../modules';
import { Spinner, Modal } from '../../components';
import { getData } from '../../helpers';

export const HomePage = () => {
    const [isFetching, setIsFetching] = useState(false);
    const [data, setData] = useState([]);
    const [modalMessage, setModalMessage] = useState('');

    const handleFinishDataFetching = ({ apiData, message }) => {
        message && setModalMessage(message);
        setData(apiData);
        setIsFetching(false);
    };

    const handleFetchData = (queryString) => {
        setIsFetching(true);
        setData([]);
        getData(queryString, handleFinishDataFetching);
    };

    const handleCloseModal = () => {
        setModalMessage('');
    };

    return (
        <>
            <SearchBlock onFetchData={handleFetchData} />
            {isFetching && <Spinner />}
            <SearchResults data={data} />
            <Modal message={modalMessage} onCloseModal={handleCloseModal} />
        </>
    );
};
