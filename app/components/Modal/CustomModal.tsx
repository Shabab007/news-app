import { Modal } from '@mui/material'
import React from 'react'
import { Props } from './types'

const CustomModal = (props: Props) => {
  const { handleClose, open, children } = props
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <>{children}</>
    </Modal>
  )
}

export default CustomModal
