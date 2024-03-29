import { changeTheme, getTheme } from '@dash-ui-lib/core';
// import '@dash-ui-lib/core';

export function App() {
  return (
    <div>
      <div className={'m-md p-sm shadow-sm round-md overflow-auto'}>
        <div className="pb-sm text-bold">Change theme</div> <br />
        <button
          className="btn btn-primary hover:bg-green"
          onClick={() => changeTheme(getTheme() === 'dark' ? 'light' : 'dark')}
        >
          Toggle theme
        </button>
      </div>
      <div className={'m-md p-sm shadow-sm round-md overflow-auto'}>
        <div className="pb-sm text-bold">Inputs</div> <br />
        {/* <div className="input-contain">
          <input type="text" aria-labelledby="placeholder-fname" />
          <label className="placeholder-text" id="placeholder-fname">
            <div className="text">First Name</div>
          </label>
        </div> */}
        <div className='flex items-center gap-md flex-wrap'>

        <input type="checkbox" />
        <input type="radio" name="test-radio" value="0"/>
        <input type="radio" name="test-radio" value="1"/>
        <input type="radio" name="test-radio" value="2"/>
        <input type="text" />
        <input type="text" placeholder="Placeholder" />
        <input type="text" value="Value" />
        <input type="text" disabled />
        <input type="text" readOnly />
        <input type="text" required />
        <input type="text" aria-invalid="true" />
        <textarea  type="textarea" ></textarea>
        </div>
      </div>
      <div className={'m-md p-sm shadow-sm round-md'}>
        <div className="pb-sm text-bold">Buttons</div> <br />
        <div className={`flex items-center justify-start gap-sm flex-wrap`}>
          <button className="btn btn-primary sm:w-full">
            Button responsive sm
          </button>
          <button className="btn btn-primary md:w-full">
            Button responsive md
          </button>
          <button className="btn btn-primary lg:w-full">
            Button responsive lg
          </button>
          <button className="btn btn-primary xl:w-full">
            Button responsive xl
          </button>
          <button className="btn btn-primary xxl:w-full">
            Button responsive xxl
          </button>
          <button className="btn btn-primary">Button</button>
          <button className="btn btn-secondary">Button</button>
          <button className="btn btn-white">Button</button>
          <button className="btn btn-black">Button</button>
          <button className="btn btn-gray">Button</button>
          <button className="btn btn-red">Button</button>
          <button className="btn btn-orange">Button</button>
          <button className="btn btn-yellow">Button</button>
          <button className="btn btn-green">Button</button>
          <button className="btn btn-teal">Button</button>
          <button className="btn btn-blue">Button</button>
          <button className="btn btn-indigo">Button</button>
          <button className="btn btn-cyan">Button</button>
          <button className="btn btn-purple">Button</button>
          <button className="btn btn-pink">Button</button>
          <button className="btn btn-full">Button</button>
          <button className="btn btn-round-xs">Button</button>
          <button className="btn btn-round-sm">Button</button>
          <button className="btn btn-round-md">Button</button>
          <button className="btn btn-round-lg">Button</button>
          <button className="btn btn-round-2xl">Button</button>
          <button className="btn btn-round-3xl">Button</button>
          <button className="btn btn-round-4xl">Button</button>
          <button className="btn btn-round-5xl">Button</button>
          <button className="btn btn-round-6xl">Button</button>
          <button className="btn btn-outline">Button</button>
          <button className="btn btn-outline-primary">Button</button>
          <button className="btn btn-outline-secondary">Button</button>
          <button className="btn btn-outline-white">Button</button>
          <button className="btn btn-outline-black">Button</button>
          <button className="btn btn-outline-gray">Button</button>
          <button className="btn btn-outline-red">Button</button>
          <button className="btn btn-outline-orange">Button</button>
          <button className="btn btn-outline-yellow">Button</button>
          <button className="btn btn-outline-green">Button</button>
          <button className="btn btn-outline-teal">Button</button>
          <button className="btn btn-outline-blue">Button</button>
          <button className="btn btn-outline-indigo">Button</button>
          <button className="btn btn-outline-cyan">Button</button>
          <button className="btn btn-outline-purple">Button</button>
          <button className="btn btn-outline-pink">Button</button>
          <button className="btn btn-ghost">Button</button>
          <button className="btn btn-ghost-primary">Button</button>
          <button className="btn btn-ghost-secondary">Button</button>
          <button className="btn btn-ghost-white">Button</button>
          <button className="btn btn-ghost-black">Button</button>
          <button className="btn btn-ghost-gray">Button</button>
          <button className="btn btn-ghost-red">Button</button>
          <button className="btn btn-ghost-orange">Button</button>
          <button className="btn btn-ghost-yellow">Button</button>
          <button className="btn btn-ghost-green">Button</button>
          <button className="btn btn-ghost-teal">Button</button>
          <button className="btn btn-ghost-blue">Button</button>
          <button className="btn btn-ghost-indigo">Button</button>
          <button className="btn btn-ghost-cyan">Button</button>
          <button className="btn btn-ghost-purple">Button</button>
          <button className="btn btn-ghost-pink">Button</button>
          <button className="btn btn-link">Button</button>
          <button className="btn btn-link-primary">Button</button>
          <button className="btn btn-link-secondary">Button</button>
          <button className="btn btn-link-white">Button</button>
          <button className="btn btn-link-black">Button</button>
          <button className="btn btn-link-gray">Button</button>
          <button className="btn btn-link-red">Button</button>
          <button className="btn btn-link-orange">Button</button>
          <button className="btn btn-link-yellow">Button</button>
          <button className="btn btn-link-green">Button</button>
          <button className="btn btn-link-teal">Button</button>
          <button className="btn btn-link-blue">Button</button>
          <button className="btn btn-link-indigo">Button</button>
          <button className="btn btn-link-cyan">Button</button>
          <button className="btn btn-link-purple">Button</button>
          <button className="btn btn-link-pink">Button</button>
          <button className="btn btn-blue text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="bg-none"
            >
              <path d="M9.752 6.193c.599.6 1.73.437 2.528-.362.798-.799.96-1.932.362-2.531-.599-.6-1.73-.438-2.528.361-.798.8-.96 1.933-.362 2.532Z" />
              <path d="M15.811 3.312c-.363 1.534-1.334 3.626-3.64 6.218l-.24 2.408a2.56 2.56 0 0 1-.732 1.526L8.817 15.85a.51.51 0 0 1-.867-.434l.27-1.899c.04-.28-.013-.593-.131-.956a9.42 9.42 0 0 0-.249-.657l-.082-.202c-.815-.197-1.578-.662-2.191-1.277-.614-.615-1.079-1.379-1.275-2.195l-.203-.083a9.556 9.556 0 0 0-.655-.248c-.363-.119-.675-.172-.955-.132l-1.896.27A.51.51 0 0 1 .15 7.17l2.382-2.386c.41-.41.947-.67 1.524-.734h.006l2.4-.238C9.005 1.55 11.087.582 12.623.208c.89-.217 1.59-.232 2.08-.188.244.023.435.06.57.093.067.017.12.033.16.045.184.06.279.13.351.295l.029.073a3.475 3.475 0 0 1 .157.721c.055.485.051 1.178-.159 2.065Zm-4.828 7.475.04-.04-.107 1.081a1.536 1.536 0 0 1-.44.913l-1.298 1.3.054-.38c.072-.506-.034-.993-.172-1.418a8.548 8.548 0 0 0-.164-.45c.738-.065 1.462-.38 2.087-1.006ZM5.205 5c-.625.626-.94 1.351-1.004 2.09a8.497 8.497 0 0 0-.45-.164c-.424-.138-.91-.244-1.416-.172l-.38.054 1.3-1.3c.245-.246.566-.401.91-.44l1.08-.107-.04.039Zm9.406-3.961c-.38-.034-.967-.027-1.746.163-1.558.38-3.917 1.496-6.937 4.521-.62.62-.799 1.34-.687 2.051.107.676.483 1.362 1.048 1.928.564.565 1.25.941 1.924 1.049.71.112 1.429-.067 2.048-.688 3.079-3.083 4.192-5.444 4.556-6.987.183-.771.18-1.345.138-1.713a2.835 2.835 0 0 0-.045-.283 3.078 3.078 0 0 0-.3-.041Z" />
              <path d="M7.009 12.139a7.632 7.632 0 0 1-1.804-1.352A7.568 7.568 0 0 1 3.794 8.86c-1.102.992-1.965 5.054-1.839 5.18.125.126 3.936-.896 5.054-1.902Z" />
            </svg>
            Button
          </button>

          <button className="btn btn-disabled">Button</button>
          <button className="btn btn-outline loading">Button</button>
          <button className="btn btn-outline loading-left">Button</button>
          <button className="btn btn-outline loading-right">Button</button>
        </div>
      </div>
      <div className={'m-md p-sm shadow-sm round-md'}>
        <div className="pb-sm text-bold center">Layouts</div> <br />
        <div className="p-sm round-md p-md w-2xl h-xl left bg-primary hover:bg-red">
          left
        </div>
        <div className="p-sm round-md p-md w-2xl h-xl center bg-primary">
          center
        </div>
        <div className="p-sm round-md p-md w-2xl h-xl right bg-primary">
          right
        </div>
        <div className="p-sm round-md m-md h-xl text-left bg-primary">
          text-left
        </div>
        <div className="p-sm round-md m-md h-xl text-center bg-primary">
          text-center
        </div>
        <div className="p-sm round-md m-md h-xl text-right bg-primary">
          text-right
        </div>
      </div>
      <div className={'m-md p-sm shadow-sm round-md'}>
        <div className="pb-sm text-bold ">Flex</div> <br />
        <div className="py-xl text-md ">justify-start</div> <br />
        <div className="p-sm round-md p-md h-xl flex items-center gap-xl flex-wrap justify-start">
          <div className="p-sm round-md w-6xl h-xl bg-primary"></div>
          <div className="p-sm round-md w-6xl h-xl bg-primary"></div>
          <div className="p-sm round-md w-6xl h-xl bg-primary"></div>
          <div className="p-sm round-md w-6xl h-xl bg-primary"></div>
          <div className="p-sm round-md w-6xl h-xl bg-primary"></div>
          <div className="p-sm round-md w-6xl h-xl bg-primary"></div>
        </div>
        <div className="py-xl text-md ">justify-between</div>{' '}
        <div className="p-sm round-md p-md h-xl flex items-center gap-xl flex-wrap justify-between">
          <div className="p-sm round-md w-6xl h-xl bg-primary"></div>
          <div className="p-sm round-md w-6xl h-xl bg-primary"></div>
          <div className="p-sm round-md w-6xl h-xl bg-primary"></div>
          <div className="p-sm round-md w-6xl h-xl bg-primary"></div>
          <div className="p-sm round-md w-6xl h-xl bg-primary"></div>
          <div className="p-sm round-md w-6xl h-xl bg-primary"></div>
        </div>
        <div className="py-xl text-md ">justify-end</div>{' '}
        <div className="p-sm round-md p-md h-xl flex items-center gap-xl flex-wrap justify-end">
          <div className="p-sm round-md w-6xl h-xl bg-primary"></div>
          <div className="p-sm round-md w-6xl h-xl bg-primary"></div>
          <div className="p-sm round-md w-6xl h-xl bg-primary"></div>
          <div className="p-sm round-md w-6xl h-xl bg-primary"></div>
          <div className="p-sm round-md w-6xl h-xl bg-primary"></div>
          <div className="p-sm round-md w-6xl h-xl bg-primary"></div>
        </div>
        <div className="py-xl text-md ">justify-around</div>{' '}
        <div className="p-sm round-md p-md h-xl flex items-center gap-xl flex-wrap justify-around">
          <div className="p-sm round-md w-6xl h-xl bg-primary"></div>
          <div className="p-sm round-md w-6xl h-xl bg-primary"></div>
          <div className="p-sm round-md w-6xl h-xl bg-primary"></div>
          <div className="p-sm round-md w-6xl h-xl bg-primary"></div>
          <div className="p-sm round-md w-6xl h-xl bg-primary"></div>
          <div className="p-sm round-md w-6xl h-xl bg-primary"></div>
        </div>
      </div>
      <div className={'m-md p-sm shadow-sm round-md'}>
        <div className="pb-sm text-bold">Grid</div> <br />
        <div className="py-xl text-md ">grid-t-cols-2</div>{' '}
        <div className="p-sm round-md p-md h-xl grid grid-t-cols-2 grid-gap-md h-6xl overflow-y-auto">
          <div className="p-sm round-md w-6xl h-xl bg-primary"></div>
          <div className="p-sm round-md w-6xl h-xl bg-primary"></div>
          <div className="p-sm round-md w-6xl h-xl bg-primary"></div>
          <div className="p-sm round-md w-6xl h-xl bg-primary"></div>
        </div>
        <div className="py-xl text-md ">grid-t-cols-3</div>{' '}
        <div className="p-sm round-md p-md h-xl grid grid-t-cols-3 grid-gap-md h-6xl overflow-y-auto">
          <div className="p-sm round-md w-6xl h-xl bg-primary"></div>
          <div className="p-sm round-md w-6xl h-xl bg-primary"></div>
          <div className="p-sm round-md w-6xl h-xl bg-primary"></div>
          <div className="p-sm round-md w-6xl h-xl bg-primary"></div>
          <div className="p-sm round-md w-6xl h-xl bg-primary"></div>
          <div className="p-sm round-md w-6xl h-xl bg-primary"></div>
        </div>
      </div>
      <div className={'m-md p-sm shadow-sm round-md overflow-auto'}>
        <div className="pb-sm text-bold">Glass effect</div> <br />
        <div className="p-sm round-md p-md h-6xl w-6xl overflow-y-auto glass md:w-1/2 md:m-auto">
          Glass
        </div>
      </div>
      <div className={'m-md p-sm shadow-sm round-md overflow-auto'}>
        <div className="pb-sm text-bold">Loaders sizes</div> <br />
        <div className="loader-1 loader-sm"></div>
        <div className="loader-1 loader-md"></div>
        <div className="loader-1 loader-lg"></div>
        <div className="loader-1 loader-xl"></div>
        <div className="loader-1 loader-2xl"></div>
        <div className="loader-1 loader-3xl"></div>
        <div className="loader-1 loader-4xl"></div>
        <div className="loader-1 loader-5xl"></div>
        <div className="loader-1 loader-6xl"></div>
        <div className="pb-sm text-bold">Loaders colors</div> <br />
        <div className="loader-1 loader-2xl loader-primary"></div>
        <div className="loader-1 loader-2xl loader-red"></div>
        <div className="loader-1 loader-2xl loader-orange"></div>
        <div className="loader-1 loader-2xl loader-yellow"></div>
        <div className="loader-1 loader-2xl loader-green"></div>
        <div className="loader-1 loader-2xl loader-teal"></div>
        <div className="loader-1 loader-2xl loader-blue"></div>
        <div className="loader-1 loader-2xl loader-indigo"></div>
        <div className="loader-1 loader-2xl loader-purple"></div>
        <div className="loader-1 loader-2xl loader-pink"></div>
        <div className="pb-sm text-bold">Loaders variants</div> <br />
        <div className="loader-1 loader-2xl"></div>
        <div className="loader-2 loader-2xl"></div>
        <div className="loader-3 loader-2xl"></div>
        <div className="loader-4 loader-md"></div>
      </div>
    </div>
  );
}

export default App;
