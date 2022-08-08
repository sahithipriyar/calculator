import { useState } from "react"
const Main=()=>{
        const [data,setData]=useState([])
        const handleOne=()=>{
            setData(data+"1")
        }
        const handleTwo=()=>{
            setData(data+"2")
        }
        const handleThree=()=>{
            setData(data+"3")
        }
        const handleFour=()=>{
            setData(data+"4")
        }
        const handleFive=()=>{
            setData(data+"5")
        }
        const handleSix=()=>{
            setData(data+"6")
        }
        const handleSeven=()=>{
            setData(data+"7")
        }
        const handleEight=()=>{
            setData(data+"8")
        }
        const handleNine=()=>{
            setData(data+"9")
        }
        const handleMinus=()=>{
            setData(data+"-")
        }
        const handleEqual=()=>{
            setData(eval(data))
        }
        const handlePlus=()=>{
            setData(data+"+")
        }
        const handleMult=()=>{
            setData(data+"*")
        }
        const handleDevide=()=>{
            setData(data+"/")
        }
        const handleZero=()=>{
            setData(data+"0")
        }
        const handleDot=()=>{
            setData(data+".")
        }
        const handleClear=()=>{
            setData("")
        }
 
    return(
        <>
        <div className="main">
           <div className="container">
           <div className="c">
            <h1>Calculator</h1>
           </div>
           <div className="in">
           
           <input style={{width:"380px",height:"25px"}} type="text" id="calc" value={data} name="calc"/>
           <button style={{margin:"0px 0px 0px 7px",backgroundColor:"blue",color:"white",borderStyle: "none",height:"30px",width:"30px"}} onClick={handleClear}>C</button>
           
           </div>
           <div>
            <table className="tb">
                <tr>
                <td>
                <button className="btn" onClick={handleOne}>1</button>
                    <button className="btn" onClick={handleTwo}>2</button>
                    <button className="btn" onClick={handleThree}>3</button>
                    <button className="side-btn" onClick={handleDevide}>/</button>
                </td>
                </tr>
                <tr>
                <td>
                    <button className="btn" onClick={handleFour}>4</button>
                    <button className="btn" onClick={handleFive}>5</button>
                    <button className="btn" onClick={handleSix}>6</button>
                    <button className="side-btn" onClick={handleMinus}>-</button>
                </td>
                </tr>
                <tr>
                <td>
                <button className="btn" onClick={handleSeven}>7</button>
                    <button className="btn" onClick={handleEight}>8</button>
                    <button className="btn" onClick={handleNine}>9</button>
                    <button className="side-btn" onClick={handlePlus}>+</button>
                </td>
                </tr>
                <tr>
                <td>
                <button className="btn" onClick={handleDot}>.</button>
                    <button className="btn" onClick={handleZero}>0</button>
                    <button className="btn" onClick={handleEqual}>=</button>
                    <button className="side-btn" onClick={handleMult}>*</button>
                </td>
                </tr>
               
                    
               
            </table>
           </div>
           </div>
           </div>
        </>
    )
}
export default Main