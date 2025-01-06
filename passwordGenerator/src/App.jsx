import { useState, useCallback, useEffect ,useRef} from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charsAllowed, setCharsAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [changeBtnBg, setBtnBgColor] = useState("blue");
  
  // UserRef hook ---> Used to get the refence of anything
  const passwordRef = useRef(null)


  // usecallback ---> lets you cache a function definition between re-render. it memorize the function values(full or some parts) -- used where some operation works in a single time so to prvent fallback we take the latest cahnge and update the value
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    setBtnBgColor("")

    if (numberAllowed) str += "0123456789";
    if (charsAllowed) str += "`~!@#$%^&*()-_=+[{]}|;:'\",<.>/? ";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charsAllowed, setPassword]); // dependencies

  // useEffect ---> it calls on first load or any depency is changed it is called 
  useEffect(()=>{passwordGenerator()

  },[length, numberAllowed, charsAllowed, setPassword])

  const copyPasswordToClipBoard = useCallback(()=>{
    passwordRef.current?.select(); //optional selection if present then select 
    // passwordRef.current?.setSelectionRange(0,5) //selecting from in to max
    window.navigator.clipboard.writeText(password);
    setBtnBgColor("green")
  },[password, setBtnBgColor])


  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 p-5 text-orange-500 bg-gray-700">
        <h1 className="text-white text-center my-3"> PASSWORD GENERATOR</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button className="bg-blue-700 text-white py-0.5 px-3 shrink-0 text-center outline-none"
          style={{backgroundColor: changeBtnBg}}
          onClick={copyPasswordToClipBoard}>
            Copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={20}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label htmlFor="Length">Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              name="numberCheckbox"
              id="numberInput"
              defaultChecked={numberAllowed}
              onChange={() => {
                setNumberAllowed((prev) => !prev); //callback that reverses the previous value
              }}
            />
            <label htmlFor="Number">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              name="charCheckbox"
              id="character"
              defaultChecked={charsAllowed}
              onChange={() => {
                setCharsAllowed((prev) => !prev); //callback that reverses the previous value
              }}
            />
            <label htmlFor="character">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
