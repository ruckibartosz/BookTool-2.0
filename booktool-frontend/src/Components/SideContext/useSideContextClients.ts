import useAppDispatch from "@/Hooks/useAppDispatch";
import { openPopup } from "@Actions/popup";


const useSideContextClients = () => {
    const dispatch = useAppDispatch();

    const handleOpenPopupCreateClient = () => dispatch(openPopup({id: "client-create"}))

    return { handleOpenPopupCreateClient };
}

export default useSideContextClients;