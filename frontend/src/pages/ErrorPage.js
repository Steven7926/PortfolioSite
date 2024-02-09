
import React from "react";
import { TypeAnimation } from 'react-type-animation';


function ErrorPage() {
    const writtin_block = "return {" + "\n" + " error: \"Nothing Here :(\"," +
                            "\n }"

    return (
        <div className="flex flex-row phone:px-10 px-6 pt-6">
            <div className="w-full">                     
                <pre className="text-wrap">
                    <TypeAnimation
                        sequence={[writtin_block, 500]}
                        speed={90}
                    />  
                </pre>
            </div>
        </div>
    );
}
export default ErrorPage;