import Btn from "./components/Btn";
import IconArrowRight from "./components/IconArrowRight";
import IconDownload from "./components/IconDownload";
import IconUpload from "./components/IconUpload";
import Item from "./components/Item";
import NavBar from "./components/NavBar";

function App() {
  /* 
    const onclick = async () => {
      let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      chrome.scripting.executeScript({
        target: { tabId: tab.id! },
        func: () => {
          alert('hola')
        }
      })
    } */
  /*
    const onclick = async () => {
      const tabs = await chrome.windows.getAll({
        populate: true,
        windowTypes: ["normal"],
      });
      console.log(tabs);
    }
  
    return (
      <>
        <div className='flex flex-row items-center justify-center h-screen'>
          <div>
            <img src={reactLogo} alt="Logo React" width="120" />
            <h1 className='text-8xl'>Hola Extensiones</h1>
          </div>
          <button onClick={onclick}>
            Click
          </button>
        </div>
      </>
    )
  */
  return (
    <>
      <div className="h-[600px] w-[600px] bg-base-100 dark:bg-base-700 flex flex-col overflow-hidden">
        <NavBar />
        <div className="flex flex-col items-center justify-center gap-[10px]">
          <h1 className="poppins-medium self-start text-left text-base-400 dark:text-base-100 text-[24px] ml-14 mt-2 ">Open Tabs:</h1>
          <div className="flex flex-col items-center justify-stretch gap-[10px] p-5 border border-solid  h-[364px] w-[460px] border-base-300 dark:border-base-400 rounded-md overflow-hidden no-scrollbar overflow-y-auto">
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
          </div>
          <div className="flex flex-row items-center justify-center gap-[132px] p-[6px]">
            <Btn icon={<IconArrowRight />} text={"Load"} />
            <div className="flex flex-row items-center justify-center gap-[16px]">
              <Btn icon={<IconUpload />} text={"Import"} />
              <Btn icon={<IconDownload />} text={"Export"} />
            </div>
          </div>
        </div>
      </div>
    </>
  )


}

export default App
