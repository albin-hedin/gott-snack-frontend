import { Dialog } from '@headlessui/react'
import Image from 'next/image'

const PicModal = (
  { handlePicModalClick,
    modalVisable,
    imageUrl }:
    {
      handlePicModalClick: any,
      modalVisable: boolean,
      imageUrl: string
    }): JSX.Element => {
  return (
    <Dialog className="relative z-50" open={modalVisable} onClose={() => handlePicModalClick(false)}>
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="max-w-3xl rounded bg-gray-300">
          <div className='p-10'>
            <Image
              src={imageUrl}
              alt=''
              width={500}
              height={500} />
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}

export default PicModal
