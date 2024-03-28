import React from "react";
import ReactDOM from "react-dom/client";
import ColorPicker from "colorPickerImp/ColorPicker"
import { useColors } from "colorPickerImp/useColors"
import ColorList from "colorListImp/ColorList"

import "./index.css";

const App = () => {
  //estados compartidos simples
  const { color, colorList, handleChangeColor, handleSubmitSaveColor } = useColors();

  return  (
    <>
      <h1 className="text-center bg-dark text-white p-2">Color Picker</h1>
      <div className="container mt-4" >
        <div className="row">
          <div className="col-12 col-md-4">
            <ColorList
              colorList={colorList}
            />
          </div>
          <div className="col-12 col-md-8">
            <ColorPicker
              color={color}
              colorList={colorList}
              handleChangeColor={handleChangeColor}
              handleSubmitSaveColor={handleSubmitSaveColor}
            />
          </div>
        </div>
      </div>
    </>
  )
};
ReactDOM.createRoot(document.getElementById("app")).render(<App /> );
