'use client';

// project imports
import SimpleModal from 'components/forms/plugins/Modal/SimpleModal';
import ServerModal from 'components/forms/plugins/Modal/ServerModal';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';

// ==============================|| MODAL PAGE ||============================== //

const Modal = () => (
  <MainCard title="Simple Modal">
    {/* <ServerModal /> */}
    <SimpleModal />
  </MainCard>
);

export default Modal;
