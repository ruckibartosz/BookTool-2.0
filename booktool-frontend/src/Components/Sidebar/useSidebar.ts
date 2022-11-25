import { useNavigate } from 'react-router-dom';

import useAppDispatch from '@Hooks/useAppDispatch';
import useAppSelector from '@Hooks/useAppSelector';
import { changeType } from '@Actions/context';
import { changeSideContextType } from '@Actions/sideContext';
import { ContextType } from '@Types/context';
import { SideContextRenderType } from '@Types/sideContext';

const useSidebar = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { context } = useAppSelector((state) => state.context);

    const handleSidebarButtonClick = async (context: ContextType) => {
        await dispatch(changeType(context)).then(() => {
            navigate(`/${context}`);
        });

        await dispatch(changeSideContextType(context as SideContextRenderType));
    };

    return { handleSidebarButtonClick, context };
};

export default useSidebar;
