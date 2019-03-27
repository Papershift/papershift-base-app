import React from 'react';
import { Modal } from 'semantic-ui-react';
import { connect } from 'react-redux'
import {closeModal} from "../../../actions/modalActions";
import LoginModal from "./LoginModal";


const actions = {
  closeModal
}

const TestModal = ({closeModal}) => {
  return (
    <Modal closeIcon="close" open={true} onClose={closeModal}>
      <Modal.Header>Test Modal</Modal.Header>
      <Modal.Content>
        <Modal.Description>
            <LoginModal />
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

export default connect(null, actions)(TestModal);
