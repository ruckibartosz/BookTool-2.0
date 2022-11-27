import useAppSelector from '@Hooks/useAppSelector';

const useClientApartmentCard = () => {
    const { actionType } = useAppSelector((state) => state.sideContext);

    return { actionType };
};

export default useClientApartmentCard;
