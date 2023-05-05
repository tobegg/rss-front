import React, { FC, useEffect, useState } from "react";
import { Post } from "@/api";
import Button from "./Button";

interface ModalProps {
  children: React.ReactNode;
  showModal: boolean;
  setShowModal: (val: boolean) => void;
  onSave: () => void;
}

const Modal: FC<ModalProps> = ({
  children,
  showModal,
  setShowModal,
  onSave
}) => {
  return (
    <>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative my-6 mx-auto w-[400px]">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                  <h3 className="text-2xl">
                    Edit Post
                  </h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black opacity-7 h-6 w-6 text-xl block py-0">
                      x
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  {children}
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <Button label="Close" onClick={() => setShowModal(false)}/>
                  <Button label="Save" onClick={onSave} className="ml-3" />
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Modal;