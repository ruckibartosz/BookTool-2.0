import { useEffect } from 'react';

import { getAllClients } from '@Store/Actions/client';
import useAppDispatch from '@Hooks/useAppDispatch';
import useAppSelector from '@Hooks/useAppSelector';

const useClientPopover = () => {
    const dispatch = useAppDispatch();
    const { allClients, isLoading } = useAppSelector((state) => state.client);

    const getAllClientsHandler = () => dispatch(getAllClients());

    useEffect(() => {
        getAllClientsHandler();
    }, []);

    return { allClients, isLoading };
};

export default useClientPopover;
