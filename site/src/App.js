import React from "react";
const arr = [1, 2, 3];
const test = () => console.log(...arr);
const App = () => {
    test();
    return (
        <div>
            <p>React here!</p>
        </div>
    );
};
export default App;