import React, { useEffect } from "react";

const AttributeInput = (props) => {
  const handleClick = () => {
    // Call the function when the button is clicked
    props.onButtonClick();
  };
  useEffect(() => {
    const openModalButton = document.querySelector('[data-te-toggle="modal"]');
    const modal = document.getElementById("exampleModal");
    const closeModalButton = modal.querySelector("[data-te-modal-dismiss]");
    const dataAfterInput = modal.querySelector("[data-after-input]");

    const modalDialog = modal.querySelector("[data-te-modal-dialog-ref]");

    const openModal = () => {
      modal.classList.remove("hidden");
      modalDialog.classList.add("translate-y-[-50px]");
      setTimeout(() => {
        modalDialog.classList.remove("opacity-0");
        modalDialog.classList.remove("translate-y-[-50px]");
      }, 10);
    };

    const closeModal = () => {
      modalDialog.classList.add("opacity-0");
      modalDialog.classList.add("translate-y-[-50px]");
      setTimeout(() => {
        modal.classList.add("hidden");
        modalDialog.classList.remove("translate-y-[-50px]");
      }, 300);
    };

    openModalButton.addEventListener("click", openModal);
    closeModalButton.addEventListener("click", closeModal);
    dataAfterInput.removeEventListener("click", closeModal);

    return () => {
      openModalButton.removeEventListener("click", openModal);
      closeModalButton.removeEventListener("click", closeModal);
      dataAfterInput.removeEventListener("click", closeModal);
    };
  }, []);

  return (
    <>
      <button
        type="button"
        data-te-toggle="modal"
        data-te-target="#exampleModal"
        className="rounded-r-[7px] bg-pink-500 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none peer-placeholder-shown:pointer-events-none peer-placeholder-shown:bg-blue-gray-500 peer-placeholder-shown:opacity-50 peer-placeholder-shown:shadow-none"
        data-ripple-light="false"
      >
        ADD
      </button>

      <div
        className="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        data-te-modal-init
      >
        <div
          className="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px]"
          data-te-modal-dialog-ref
        >
          <div className="min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-black  rounded-lg bg-clip-padding text-current shadow-lg outline-none ">
            <div className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
              <h5
                className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
                id="exampleModalLabel"
              >
                Add Attributes
              </h5>
              <button
                type="button"
                className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                data-te-modal-dismiss
                aria-label="Close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="relative flex-auto p-4" data-te-modal-body-ref>
              <input
                className="shadow bg-transparent border m-2 rounded-[7px] w-96 py-2 px-3 text-white focus:text-pink-500 leading-tight focus:outline-none focus:border-pink-500 focus:shadow-outline"
                id="keyId"
                type="text"
                placeholder="Enter Key"
              />
              <input
                className="shadow bg-transparent border m-2 rounded-[7px] w-96 py-2 px-3 text-white focus:text-pink-500 leading-tight focus:outline-none focus:border-pink-500 focus:shadow-outline"
                id="valueId"
                type="text"
                placeholder="Enter Value"
              />
            </div>
            <div className="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
              <button
                type="button"
                onClick={handleClick}
                className="ml-1 inline-block rounded bg-white px-6 pb-2 pt-2.5 text-sm font-medium uppercase leading-normal text-pink-500  hover:text-white focus:text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-pink-500 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-pink-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                data-te-ripple-init
                data-te-ripple-color="light"
                data-after-input
                aria-label="Close"
              >
                ADD
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AttributeInput;
