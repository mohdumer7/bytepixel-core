import { useGetHeroDataQuery } from '@/redux/features/layout/layoutApi';
import React, { useEffect, useState } from 'react'
import {Button} from "@/components/ui/button";
import ReactDOM from 'react-dom';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import "./style.css"
import MeetingDemo from "@/app/components/Admin/Meetings/MeetingDemo";
type Props = {}

const BookDemo = (props: Props) => {
    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

  return (
      <div className="w-full bg-white p-4">
          <div>
              <Modal open={open} onClose={onCloseModal} center
                     classNames={{
                  modal: 'customModal',
              }}>
                  <h2 className="text-white font-semibold text-3xl text-center">Book A Demo</h2>
                  <p className="text-white">
                      <MeetingDemo/>
                  </p>
              </Modal>
          </div>
          <div className="w-[50%] 800px:w-[30%] m-auto mb-10 ">
              <h1 className={`text-7xl text-center w-full text-black 800px:text-[40px] font-semibold`}>
                  Get a Call From US?
              </h1>
              <div className="mt-12 w-full h-full flex justify-center items-center ">
                  <Button onClick={onOpenModal} className="text-3xl rounded-full p-8 bg-black text-white hover:bg-neutral-600">
                      Book a Demo →
                  </Button>
              </div>
          </div>
      </div>
  )
}

export default BookDemo