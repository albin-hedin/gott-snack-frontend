import { Dialog } from '@headlessui/react'
import Image from 'next/image'
import MediumHeader from '../MediumHeader'

const AboutModal = (
  { handleModalClick,
    modalVisable,
    headerText,
    imageUrl,
    breadText }:
    {
      handleModalClick: any,
      modalVisable: boolean,
      headerText: string
      imageUrl: string,
      breadText: string
    }): JSX.Element => {
  return (
    <Dialog className="relative z-50" open={modalVisable} onClose={() => handleModalClick(false)}>
      <div className="fixed inset-0 flex items-center justify-center">
        <Dialog.Panel className="max-w-3xl rounded bg-gray-300">
          <div className='relative border-4 border-white rounded'>
            <button className='absolute top-0 right-0 pr-2 pt-2 hover:opacity-50 outline-none' onClick={() => handleModalClick(false)}>
              <Image
                src={'/close.svg'}
                alt="test"
                width={50}
                height={50} />
            </button>
            <div className='flex flex-col items-center'>
              <div className='text-center my-10'>
                <MediumHeader 
                headerText={headerText}
                 blackText={true} />
                <div className='whitespace-pre-wrap md:px-24'>
                  {breadText}
                </div>
              </div>
              <div className='pb-4'>
                <Image
                  className={`rounded-full mr-4`}
                  src={imageUrl}
                  alt=''
                  width={150}
                  height={150} />
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}

export default AboutModal
