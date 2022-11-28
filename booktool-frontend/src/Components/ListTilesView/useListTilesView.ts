import useAppSelector from '@Hooks/useAppSelector';

const useListTilesView = () => {
    const { renderType } = useAppSelector((state) => state.sideContext);

    return { renderType };
}

export default useListTilesView;