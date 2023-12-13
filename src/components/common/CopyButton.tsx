import { useEffect, useState } from "react";
import { CopyIcon } from "../icons/CopyIcon";

interface ICopyButtonProps {
  textToCopy: string
}

const CopyButton: React.FC<ICopyButtonProps> = ({ textToCopy }) => {
  const [isShowToolTip, setIsShowToolTip] = useState(false)

  useEffect(() => {
    if (isShowToolTip) {
      setTimeout(() => {
        setIsShowToolTip(false)
      }, 2000);
    }
  }, [isShowToolTip])

  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy)

    setIsShowToolTip(true)
  }

  return (
    <>
      <button onClick={handleCopy} className="inline-flex justify-center items-center" >
        <CopyIcon title="Clique aqui para copiar" className="fill-white" />
      </button>

      {isShowToolTip && (
        <div className="inset -ml-10 -mb-20 p-2 rounded-xl bg-h-blue-500">
          <span className="text-sm">Copiado!</span>
        </div>
      )}
    </>
  )
}

export default CopyButton;