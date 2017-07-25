import React from "react";
import Preloader from '../preloader/preloader';
import Modal from '../modal/Modal';

function PageTop(props) {
  return (
    <React.Fragment>
      <Modal
        show={ props.modal.show }
        clicks={ props.clickedData }
        closeModal={ props.closeModal}
      />
      <Preloader loading={ props.preloader.loading }/>
    </React.Fragment>
  )
}
export default PageTop