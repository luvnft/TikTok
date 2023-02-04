import { Dialog, Transition } from '@headlessui/react';
import { signIn } from 'next-auth/react';
import { Fragment, useState } from 'react';
import { BsHeartFill } from 'react-icons/bs';

export default function NotLogin() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <button className='reaction-btn' onClick={openModal}>
        <BsHeartFill size={18} />
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='w-full max-w-md transform overflow-hidden border dark:border-darkBorder rounded-2xl dark:text-white bg-white dark:bg-darkSecondary p-6 text-left align-middle shadow-xl transition-all'>
                  <Dialog.Title
                    as='h3'
                    className='text-lg font-medium leading-6 border-b border-b-gray-100 dark:border-b-darkBorder pb-4'
                  >
                    Login to TikTok
                  </Dialog.Title>
                  <div className='mt-6 mb-2 flex-col items-center flex justify-center'>
                    <p className='tracking-wide mb-3 text-sm text-gray-500 dark:text-gray-400'>
                      Continue with google
                    </p>
                    <div className='flex items-center gap-3'>
                      <button
                        onClick={closeModal}
                        className='btn-secondary py-2 px-6'
                      >
                        Close
                      </button>
                      <button
                        onClick={() => signIn('google')}
                        className='btn-primary py-2 px-6'
                      >
                        Login
                      </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
